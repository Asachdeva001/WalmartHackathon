from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
import cv2
import numpy as np
from PIL import Image
import io
import base64
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for React app

# Load YOLOv8 model
model = YOLO('yolov8n.pt')  # Downloads automatically on first run

def process_image(image_data):
    """Process base64 image data"""
    try:
        image_bytes = base64.b64decode(image_data)
        image = Image.open(io.BytesIO(image_bytes))
        return np.array(image)
    except Exception as e:
        raise ValueError(f"Error processing image: {str(e)}")

def format_results(results):
    """Format YOLO results for React app"""
    detections = []
    
    for result in results:
        boxes = result.boxes
        if boxes is not None:
            for box in boxes:
                detection = {
                    'class_id': int(box.cls[0]),
                    'class_name': model.names[int(box.cls[0])],
                    'confidence': float(box.conf[0]),
                    'bbox': {
                        'x1': float(box.xyxy[0][0]),
                        'y1': float(box.xyxy[0][1]),
                        'x2': float(box.xyxy[0][2]),
                        'y2': float(box.xyxy[0][3])
                    }
                }
                detections.append(detection)
    
    return {
        'detections': detections,
        'count': len(detections),
        'image_shape': results[0].orig_shape if results else None
    }

@app.route('/detect', methods=['POST'])
def detect():
    """Main detection endpoint"""
    try:
        data = request.json
        if 'image_data' not in data:
            return jsonify({'error': 'No image data provided'}), 400
        
        image_data = data['image_data']
        confidence_threshold = data.get('confidence', 0.5)
        
        # Process image
        image = process_image(image_data)
        
        # Run YOLOv8 inference
        results = model(image, conf=confidence_threshold)
        
        # Format results
        formatted_results = format_results(results)
        
        return jsonify({
            'success': True,
            'results': formatted_results
        })
        
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': f'Detection failed: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model': 'YOLOv8n',
        'version': '1.0.0'
    })

@app.route('/classes', methods=['GET'])
def get_classes():
    """Get available object classes"""
    return jsonify({
        'classes': model.names,
        'total_classes': len(model.names)
    })

if __name__ == '__main__':
    print("Starting YOLOv8 REST API...")
    print("Model loading... This may take a moment on first run.")
    
    # Test model loading
    try:
        test_results = model("https://ultralytics.com/images/bus.jpg")
        print("✓ YOLOv8 model loaded successfully")
        print(f"✓ Available classes: {len(model.names)}")
    except Exception as e:
        print(f"✗ Error loading model: {e}")
    
    print("API Endpoints:")
    print("  POST /detect - Object detection")
    print("  GET /health - Health check")
    print("  GET /classes - Get available classes")
    print("Server running on http://localhost:5000")
    
    app.run(debug=True, host='0.0.0.0', port=5000)