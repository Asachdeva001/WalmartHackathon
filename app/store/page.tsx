'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, X, Volume2, ArrowLeft, Check } from 'lucide-react'
import { sampleProducts, sampleStoreCodes } from '@/lib/data'
import { useApp } from '@/lib/context'
import { DetectedObject } from '@/lib/types'

// Import COCO-SSD
import * as cocoSsd from '@tensorflow-models/coco-ssd'

export default function StorePage() {
  const { state } = useApp()
  const [step, setStep] = useState<'code' | 'camera' | 'detection' | 'product'>('code')
  const [storeCode, setStoreCode] = useState('')
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null)
  const [isLiveDetection, setIsLiveDetection] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const speak = (text: string) => {
    if (!state.readAloud) return
    
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  // Load COCO-SSD model
  const loadModel = async () => {
    try {
      setIsModelLoading(true)
      speak('Loading AI model for object detection.')
      const loadedModel = await cocoSsd.load()
      setModel(loadedModel)
      speak('AI model loaded successfully.')
    } catch (error) {
      console.error('Error loading model:', error)
      speak('Error loading AI model. Using demo mode.')
    } finally {
      setIsModelLoading(false)
    }
  }

  // Map COCO-SSD classes to product names
  const mapDetectionToProduct = (className: string): string => {
    const productMap: { [key: string]: string } = {
      'banana': 'Organic Bananas',
      'apple': 'Red Apples',
      'orange': 'Fresh Oranges',
      'bottle': 'Water Bottle',
      'cup': 'Coffee Cup',
      'bowl': 'Ceramic Bowl',
      'sandwich': 'Sandwich',
      'pizza': 'Pizza',
      'donut': 'Donut',
      'cake': 'Cake',
      'chair': 'Office Chair',
      'book': 'Notebook',
      'laptop': 'Laptop',
      'mouse': 'Computer Mouse',
      'keyboard': 'Keyboard',
      'cell phone': 'Smartphone',
      'microwave': 'Microwave',
      'toaster': 'Toaster',
      'refrigerator': 'Refrigerator',
      'clock': 'Wall Clock'
    }
    
    return productMap[className] || className
  }

  // Real-time object detection
  const detectObjects = async () => {
    if (!model || !videoRef.current || !videoRef.current.videoWidth) return

    try {
      const predictions = await model.detect(videoRef.current)
      const validPredictions = predictions.filter(pred => pred.score > 0.5)
      
      // Always update detected objects array (even if empty)
      const mappedObjects: DetectedObject[] = validPredictions.map((pred, index) => ({
        id: `${pred.class}-${index}`,
        name: mapDetectionToProduct(pred.class),
        confidence: pred.score,
        boundingBox: {
          x: pred.bbox[0],
          y: pred.bbox[1],
          width: pred.bbox[2],
          height: pred.bbox[3]
        }
      }))

      setDetectedObjects(mappedObjects)
      
      // Optional: Automatic mode switching after stable detection
      // Uncomment if you want automatic switching after object stays for 2 seconds
      // if (mappedObjects.length === 1) {
      //   setTimeout(() => {
      //     if (detectedObjects.length === 1) {
      //       const product = sampleProducts.find(p => p.name === mappedObjects[0].name)
      //       if (product) {
      //         setSelectedProduct(product)
      //         setStep('product')
      //         setIsLiveDetection(false)
      //         speak(`Detected ${product.name}. Showing detailed information.`)
      //       }
      //     }
      //   }, 2000)
      // }
      
    } catch (error) {
      console.error('Detection error:', error)
    }
  }

  // Start live detection loop
  const startLiveDetection = () => {
    if (!model || !videoRef.current) return

    setIsLiveDetection(true)
    
    const detectLoop = () => {
      if (isLiveDetection && videoRef.current?.readyState === 4) {
        detectObjects()
      }
    }

    detectionIntervalRef.current = setInterval(detectLoop, 200) // Run every 200ms
  }

  // Stop live detection
  const stopLiveDetection = () => {
    setIsLiveDetection(false)
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current)
      detectionIntervalRef.current = null
    }
  }

  const handleStoreCodeSubmit = () => {
    const store = sampleStoreCodes.find(s => s.code === storeCode)
    if (store) {
      speak(`Welcome to ${store.name}. Opening camera for product detection.`)
      setStep('camera')
    } else {
      speak('Invalid store code. Please try again.')
      alert('Invalid store code. Please try 1234 or 5678.')
    }
  }

  const startCamera = async () => {
    try {
      // Load model first if not loaded
      if (!model) {
        await loadModel()
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
        speak('Camera activated. Point at objects to identify them.')
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      speak('Camera access denied. Using demo mode.')
      // Fallback to demo mode
      simulateCamera()
    }
  }

  const simulateCamera = () => {
    setIsCameraActive(true)
    speak('Demo mode activated. Simulating product detection.')
    
    // Simulate detection after 3 seconds
    setTimeout(() => {
      simulateObjectDetection()
    }, 3000)
  }

  const simulateObjectDetection = () => {
    setIsProcessing(true)
    speak('Processing image. Detecting products.')
    
    setTimeout(() => {
      const mockDetectedObjects: DetectedObject[] = [
        {
          id: '1',
          name: 'Organic Bananas',
          confidence: 0.95,
          boundingBox: { x: 100, y: 100, width: 200, height: 150 }
        },
        {
          id: '2',
          name: 'Greek Yogurt',
          confidence: 0.87,
          boundingBox: { x: 350, y: 120, width: 180, height: 140 }
        }
      ]
      
      setDetectedObjects(mockDetectedObjects)
      setIsProcessing(false)
      setStep('detection')
      
      if (mockDetectedObjects.length === 1) {
        const product = sampleProducts.find(p => p.name === mockDetectedObjects[0].name)
        if (product) {
          setSelectedProduct(product)
          setStep('product')
        }
      }
      
      speak(`Detected ${mockDetectedObjects.length} product${mockDetectedObjects.length !== 1 ? 's' : ''}.`)
    }, 2000)
  }

  const handleObjectClick = (object: DetectedObject) => {
    const product = sampleProducts.find(p => p.name === object.name)
    if (product) {
      setSelectedProduct(product)
      setStep('product')
      speak(`Selected ${product.name}. Price: ${product.price} dollars.`)
    }
  }

  const captureImage = () => {
    if (model && videoRef.current) {
      // Start live detection instead of one-time capture
      setIsProcessing(false) // Don't show processing spinner
      speak('Starting live object detection.')
      startLiveDetection()
    } else {
      // Fallback to simulation if model not loaded
      if (canvasRef.current && videoRef.current) {
        const canvas = canvasRef.current
        const video = videoRef.current
        const context = canvas.getContext('2d')
        
        if (context) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          context.drawImage(video, 0, 0)
          
          // Simulate AI processing
          simulateObjectDetection()
        }
      }
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
    }
    setIsCameraActive(false)
    stopLiveDetection()
  }

  // Load model on component mount
  useEffect(() => {
    loadModel()
    
    return () => {
      stopCamera()
      stopLiveDetection()
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => {
            setStep('code')
            stopCamera()
            setDetectedObjects([])
            setSelectedProduct(null)
          }}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-3xl font-bold mb-2">In-Store Experience</h1>
        <p className="text-muted-foreground">
          Use your camera to identify products and get instant information
        </p>
      </div>

      {/* Store Code Entry */}
      {step === 'code' && (
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Enter Store Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🏪</div>
                <p className="text-muted-foreground">
                  Enter your store code to activate the in-store experience
                </p>
              </div>
              
              <Input
                placeholder="Enter store code (e.g., 1234)"
                value={storeCode}
                onChange={(e) => setStoreCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStoreCodeSubmit()}
              />
              
              <Button 
                onClick={handleStoreCodeSubmit}
                className="w-full"
                disabled={!storeCode || isModelLoading}
              >
                <Check className="h-4 w-4 mr-2" />
                {isModelLoading ? 'Loading AI Model...' : 'Enter Store'}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Demo codes: 1234, 5678</p>
                {isModelLoading && <p>AI model loading in background...</p>}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Camera View */}
      {step === 'camera' && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Camera View</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    stopCamera()
                    setStep('code')
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                  style={{ display: isCameraActive ? 'block' : 'none' }}
                />
                
                {!isCameraActive && (
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Camera not active</p>
                    </div>
                  </div>
                )}
                
                {/* Live detection overlay */}
                {isLiveDetection && (
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                    🔴 Live Detection Active
                  </div>
                )}
                
                {/* Dynamic detection results overlay */}
                {isLiveDetection && detectedObjects.length > 0 && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Detected Objects:</h3>
                    <div className="space-y-1">
                      {detectedObjects.map((object) => (
                        <div key={object.id} className="flex justify-between items-center text-sm">
                          <span>{object.name}</span>
                          <span className="text-green-400">{Math.round(object.confidence * 100)}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-300">
                      Click "Select Object" to view details
                    </div>
                  </div>
                )}
                
                {/* No objects detected overlay */}
                {isLiveDetection && detectedObjects.length === 0 && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-lg text-center">
                    <span className="text-sm">No objects detected - point camera at objects</span>
                  </div>
                )}
                
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="mt-4 flex justify-center space-x-2">
                  <Button
                    onClick={isCameraActive ? captureImage : startCamera}
                    className="flex-1"
                    disabled={isModelLoading}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    {isModelLoading 
                      ? 'Loading AI Model...' 
                      : isCameraActive 
                        ? (isLiveDetection ? 'Stop Detection' : 'Start Detection') 
                        : 'Start Camera'
                    }
                  </Button>
                  
                  {isLiveDetection && (
                    <Button
                      onClick={stopLiveDetection}
                      variant="outline"
                    >
                      Stop Live Detection
                    </Button>
                  )}
                  
                  {isLiveDetection && detectedObjects.length > 0 && (
                    <Button
                      onClick={() => {
                        setStep('detection')
                        setIsLiveDetection(false)
                      }}
                      variant="default"
                    >
                      Select Object
                    </Button>
                  )}
                </div>
                
                {(isProcessing || isModelLoading) && (
                  <div className="mt-4 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">
                      {isModelLoading ? 'Loading AI model...' : 'Processing image...'}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Detection Results */}
      {step === 'detection' && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Detected Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {detectedObjects.map((object) => (
                  <Card
                    key={object.id}
                    className="cursor-pointer hover:shadow-md transition-all"
                    onClick={() => handleObjectClick(object)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{object.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Confidence: {Math.round(object.confidence * 100)}%
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep('camera')
                    setDetectedObjects([])
                  }}
                >
                  Scan Again
                </Button>
                <Button
                  onClick={() => {
                    setStep('camera')
                    setDetectedObjects([])
                  }}
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Product Details */}
      {step === 'product' && selectedProduct && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Product Details</span>
                {state.readAloud && <Volume2 className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      ${selectedProduct.price}
                    </div>
                    <div className="text-sm text-muted-foreground">Price</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold">
                      {selectedProduct.rating} ⭐
                    </div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
                
                {selectedProduct.variants && selectedProduct.variants.length > 1 && (
                  <div>
                    <h3 className="font-semibold mb-2">Available Options:</h3>
                    <div className="space-y-2">
                      {selectedProduct.variants.map((variant: any) => (
                        <div
                          key={variant.id}
                          className="flex justify-between items-center p-2 border rounded"
                        >
                          <span>{variant.name}</span>
                          <span className="font-semibold">${variant.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep('camera')
                      setSelectedProduct(null)
                    }}
                  >
                    Scan Another
                  </Button>
                  <Button className="flex-1">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}