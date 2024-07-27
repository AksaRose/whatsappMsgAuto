# WhatsApp Auto Message Sender

## Description

This project contains a whatsapp bot and a whatsapp message automation application which is controlled by a admin panel. Whatsapp Message Automation application automates sending WhatsApp messages to phone numbers extracted from a Google Sheet using a service account for Google Sheets API and wweb.js for WhatsApp messaging. Whatsapp bot is a bot that responds to messages using the Google Generative AI. The bot can reply to specific keywords and use generative AI to handle other queries. 
## Libraries Used

- **`googleapis`**: Google API client library for Node.js to interact with Google Sheets API.
- **`wwebjs`**: WhatsApp Web JavaScript library for sending messages via WhatsApp.
- **`fs.promises`**: Provides a promise-based API for file operations.
- **`path`**: Provides utilities for working with file and directory paths.
- **[@google/generative-ai](https://github.com/google/generative-ai)**: Google’s generative AI library for handling natural language processing tasks.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: A module to load environment variables from a `.env` file.

## Setup : Whatsapp Message Automation

### 1. Google Sheets API Setup

1. **Create a Google Cloud Project**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project.

2. **Enable the Google Sheets API**:
   - Navigate to **APIs & Services > Library**.
   - Search for "Google Sheets API" and enable it.

3. **Create Service Account Credentials**:
   - Go to **IAM & Admin > Service Accounts**.
   - Create a new service account.
   - Download the JSON key file.

4. **Share the Google Sheet**:
   - Open the Google Sheet you want to use.
   - Share it with the service account email (found in your JSON key file) with "Viewer" or "Editor" access.

### 2. WhatsApp Setup

1. **Install WhatsApp Web JavaScript Library**:
   - Install the `wwebjs` library using npm.

2. **Prepare Credentials**:
   - Place your Google Sheets API credentials JSON file in the root directory of your project and name it `credentials.json`
     
## Prerequisites: Whatsapp bot

1. **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Google Generative AI API Key**: Obtain an API key from Google and set it up in a `.env` file.
    ```bash
   API_KEY=your_google_api_key_here


4. **WhatsApp Web Account**: You’ll need a WhatsApp account and a QR code to authenticate with WhatsApp Web.
  

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AksaRose/whatsappMsgAuto.git

