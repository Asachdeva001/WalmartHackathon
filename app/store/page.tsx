'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, X, Volume2, ArrowLeft, Check } from 'lucide-react'
import { sampleProducts, sampleStoreCodes } from '@/lib/data'
import { useApp } from '@/lib/context'
import { DetectedObject } from '@/lib/types'

export default function StorePage() {
  const { state } = useApp()
  const [step, setStep] = useState<'code' | 'camera' | 'detection' | 'product'>('code')
  const [storeCode, setStoreCode] = useState('')
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [detectedObjects, setDetectedObjects] = useState<DetectedObject[]>([])
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const speak = (text: string) => {
    if (!state.readAloud) return
    
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
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
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
        speak('Camera activated. Point at products to identify them.')
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

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
    }
    setIsCameraActive(false)
  }

  useEffect(() => {
    return () => {
      stopCamera()
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
                disabled={!storeCode}
              >
                <Check className="h-4 w-4 mr-2" />
                Enter Store
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Demo codes: 1234, 5678</p>
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
                
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="mt-4 flex justify-center">
                  <Button
                    onClick={isCameraActive ? captureImage : startCamera}
                    className="w-full"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    {isCameraActive ? 'Capture & Detect' : 'Start Camera'}
                  </Button>
                </div>
                
                {isProcessing && (
                  <div className="mt-4 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Processing image...</p>
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
                      {selectedProduct.variants.map((variant) => (
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