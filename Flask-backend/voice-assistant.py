from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests
import json
import re

# Load .env variables
load_dotenv()

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

@app.route("/voice-command", methods=["POST"])
def handle_voice_command():
    data = request.get_json()
    user_command = data.get("command", "")
    listed_product = data.get("products", [])
    print("📥 Received command:", user_command)

    prompt = f"""
You are an AI voice assistant for a shopping website. 
You need to analyze the user's message and output a JSON object with two fields:
1. reply: a friendly response to speak back to the user
2. actions: a list of shopping cart actions (or empty list if it's just a chat)

Also you can check about product availability and prices in the provided list of products. the list is {json.dumps(listed_product)}
Each action must have:
- action: "add" or "remove"
- product: item name (singular form)
- quantity: number

Examples:
Input: "Add 2 mangoes and 1 milk"
Output:
{{
  "reply": "Sure, I’ve added 2 mangoes and 1 milk to your cart.",
  "actions": [
    {{ "action": "add", "product": "mango", "quantity": 2 }},
    {{ "action": "add", "product": "milk", "quantity": 1 }}
  ]
}}

Input: "What's the price of mango?"
Output:
{{
  "reply": "Mangoes are currently priced at $2 per piece.",
  "actions": []
}}

Now answer this:
Input: "{user_command}"
Output:
"""

    headers = {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
    }

    payload = {
        "contents": [
            {
                "parts": [{"text": prompt}]
            }
        ],
        "generationConfig": {
            "temperature": 0.7
        }
    }

    try:
        response = requests.post(GEMINI_URL, headers=headers, json=payload)
        response.raise_for_status()
        gemini_output = response.json().get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
        print("🧠 Gemini raw response:\n", gemini_output)

        # Remove markdown/code formatting
        cleaned_output = re.sub(r"```json|```", "", gemini_output).strip()

        try:
            parsed = json.loads(cleaned_output)
        except json.JSONDecodeError as e:
            return jsonify({
                "error": "Could not parse Gemini output",
                "raw": gemini_output
            }), 400

        return jsonify(parsed)

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"error": "Gemini API call failed"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
