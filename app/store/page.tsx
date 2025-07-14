'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, X, Volume2, ArrowLeft, Check } from 'lucide-react'

// Mock data (replace with your actual data imports)
const sampleProducts = [
  { id: 1, name: 'Organic Bananas', price: 3.99, rating: 4.5, description: 'Fresh organic bananas' },
  { id: 2, name: 'Red Apples', price: 4.99, rating: 4.7, description: 'Crisp red apples' },
  { id: 3, name: 'Water Bottle', price: 1.99, rating: 4.2, description: 'Plastic water bottle' },
  { id: 4, name: 'Smartphone', price: 699.99, rating: 4.8, description: 'Latest smartphone' },
  { id: 5, name: 'Laptop', price: 1299.99, rating: 4.6, description: 'High-performance laptop' }
]

const sampleStoreCodes = [
  { code: '1234', name: 'Downtown Store' },
  { code: '5678', name: 'Mall Location' }
]

const mockState = { readAloud: true }

interface DetectedObject {
  id: string
  name: string
  confidence: number
  boundingBox: {
    x: number
    y: number
    width: number
    height: number
  }
}

export default function YOLOv8StorePage() {
  const [step, setStep] = useState<'code' | 'camera' | 'detection' | 'product'>('code')
  const [storeCode, setStoreCode] = useState('')
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [isLiveDetection, setIsLiveDetection] = useState(false)
  const [yoloApiUrl] = useState('http://localhost:5000') // API URL
  const [modelStatus, setModelStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const speak = (text: string) => {
    if (!mockState.readAloud) return
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  // Check API health
  const checkYOLOv8API = async () => {
    try {
      setIsModelLoading(true)
      setModelStatus('loading')
      speak('Connecting to AI model.')
      
      const response = await fetch(`${yoloApiUrl}/health`)
      if (response.ok) {
        const data = await response.json()
        console.log('API Status:', data)
        setModelStatus('ready')
        speak('AI model ready for object detection.')
      } else {
        throw new Error('API not responding')
      }
    } catch (error) {
      console.error('API Error:', error)
      setModelStatus('error')
      speak('Error connecting to model. Using demo mode.')
    } finally {
      setIsModelLoading(false)
    }
  }

  // Map classes to product names
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
      'clock': 'Wall Clock',
      'person': 'Person',
      'car': 'Car',
      'bus': 'Bus',
      'truck': 'Truck',
      'bicycle': 'Bicycle'
    }
    
    return productMap[className] || className
  }

  // Convert video frame to base64 for API
  const captureFrameAsBase64 = (): string | null => {
    if (!videoRef.current || !canvasRef.current) return null
    
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    if (!context || video.videoWidth === 0 || video.videoHeight === 0) return null
    
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    context.drawImage(video, 0, 0)
    
    // Convert to base64
    const dataURL = canvas.toDataURL('image/jpeg', 0.8)
    return dataURL.split(',')[1] // Remove data:image/jpeg;base64, prefix
  }

  // Real-time object detection using API
  const detectObjects= async () => {
    if (modelStatus !== 'ready' || !videoRef.current || !videoRef.current.videoWidth) return

    try {
      const base64Image = captureFrameAsBase64()
      if (!base64Image) return

      const response = await fetch(`${yoloApiUrl}/detect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_data: base64Image,
          confidence: 0.5
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.success && result.results) {
        const mappedObjects: DetectedObject[] = result.results.detections.map((detection: any) => ({
          id: `${detection.class_name}-${Math.random()}`,
          name: mapDetectionToProduct(detection.class_name),
          confidence: detection.confidence,
          boundingBox: {
            x: detection.bbox.x1,
            y: detection.bbox.y1,
            width: detection.bbox.x2 - detection.bbox.x1,
            height: detection.bbox.y2 - detection.bbox.y1
          }
        }))

        setDetectedObjects(mappedObjects)
      }
      
    } catch (error) {
      console.error('Detection error:', error)
      // Fallback to demo mode if API fails
      if (modelStatus === 'ready') {
        setModelStatus('error')
        speak('API error. Switching to demo mode.')
      }
    }
  }

  // Start live detection loop
  const startLiveDetection = () => {
    if (modelStatus !== 'ready' || !videoRef.current) {
      // Fallback to demo mode
      simulateObjectDetection()
      return
    }

    setIsLiveDetection(true)
    speak('Starting live object detection.')
    
    const detectLoop = () => {
      if (isLiveDetection && videoRef.current?.readyState === 4) {
        detectObjectsYOLOv8()
      }
    }

    detectionIntervalRef.current = setInterval(detectLoop, 500) // Run every 500ms for API calls
  }

  // Stop live detection
  const stopLiveDetection = () => {
    setIsLiveDetection(false)
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current)
      detectionIntervalRef.current = null
    }
  }

  // Demo mode simulation
  const simulateObjectDetection = () => {
    setIsProcessing(true)
    speak('Demo mode: Simulating object detection.')
    
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
          name: 'Smartphone',
          confidence: 0.87,
          boundingBox: { x: 350, y: 120, width: 180, height: 140 }
        }
      ]
      
      setDetectedObjects(mockDetectedObjects)
      setIsProcessing(false)
      setStep('detection')
      
      speak(`detected ${mockDetectedObjects.length} object${mockDetectedObjects.length !== 1 ? 's' : ''}.`)
    }, 2000)
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
      // Check API first if not already checked
      if (modelStatus === 'loading') {
        await checkYOLOv8API()
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
        speak('Camera activated. ready for object detection.')
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      speak('Camera access denied. Using demo mode.')
      simulateCamera()
    }
  }

  const simulateCamera = () => {
    setIsCameraActive(true)
    speak('Demo mode activated. Simulating detection.')
    
    setTimeout(() => {
      simulateObjectDetection()
    }, 3000)
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
    if (modelStatus === 'ready' && videoRef.current) {
      setIsProcessing(false)
      speak('Starting live object detection.')
      startLiveDetection()
    } else {
      speak('model not ready. Using demo mode.')
      simulateObjectDetection()
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

  // Check API on component mount
  useEffect(() => {
    checkYOLOv8API()
    
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
          Use you camera to identify products and get instant information
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
                  Enter your store code to activate detection
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
                {isModelLoading ? 'Connecting to AI...' : 'Enter Store'}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Demo codes: 1234, 5678</p>
                <p>Status: 
                  <span className={`ml-1 ${
                    modelStatus === 'ready' ? 'text-green-600' : 
                    modelStatus === 'error' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {modelStatus === 'ready' ? '✓ Ready' : 
                     modelStatus === 'error' ? '✗ Error (Demo Mode)' : '⟳ Loading...'}
                  </span>
                </p>
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
                    🔴 Live Detection
                  </div>
                )}
                
                {/* Model status indicator */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
                  {modelStatus === 'ready' ? '✓ Ready' : 
                   modelStatus === 'error' ? '⚠ Demo Mode' : '⟳ Loading...'}
                </div>
                
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
                    <span className="text-sm">scanning - point camera at objects</span>
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
                      ? 'Connecting to YOLOv8...' 
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
                      {isModelLoading ? 'Connecting to API...' : 'Processing with YOLOv8...'}
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
                {mockState.readAloud && <Volume2 className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
                  <p className="text-xs text-muted-foreground">Detected by YOLOv8</p>
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