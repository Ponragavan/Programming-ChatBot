# Programming - ChatBOT

## About

This is the react-vite project: Through the exception of Java, this straightforward chatbot can answer any question about programming. You must verify your email address with an OTP for each Java question you ask in order to receive an answer.

## Live Demo

[Click Here](https://programming-chatbot.netlify.app/)

## Add `.env` Files and API Information

To set up the project for email verification and Java-related queries, you need to add environment variables in specific `.env` files for both the frontend and backend. Follow the steps below:

### Backend `.env` File

Create a `.env` file in the **backend folder** with the following variables:

```bash
FRONTEND_URL=<your_frontend_url>
EMAIL=<your_email>
PASSWORD=<your_email_app_password>
```

- `FRONTEND_URL`: The URL of your deployed frontend application (e.g., `http://localhost:5173`).
- `EMAIL`: The sender's email address used for sending OTPs. Use a valid email account.
- `PASSWORD`: The generated app password for the email account. **Do not use your regular email password**; follow the steps below to generate an app-specific password.

---

### Frontend `.env` File

Create a `.env` file in the **root folder** with the following variables:

```bash
VITE_API_KEY=<your_api_key>
VITE_BACKEND_URL=<your_backend_url>
```

- `VITE_API_KEY`: Your API key, if any, for external services or APIs used in the project.
- `VITE_BACKEND_URL`: The URL of your deployed backend application (e.g., `http://localhost:5000`).

---

### Generating Email App Password

For security purposes, you'll need an app-specific password instead of your regular email password. Here’s how to generate it:

1. Log in to your Google account.
2. Go to **Security** in your Google account settings.
3. Enable **2-Step Verification** if not already enabled.
4. Scroll down to **App Passwords** and select it.
5. Choose an app (e.g., "Mail") and device (e.g., "Other (Custom Name)").
6. Click **Generate** to get a 16-character app password.
7. Use this password in the `PASSWORD` field of your backend `.env` file.

---

### Generating API Key from Google Cloud Console

Follow these steps to generate an API key for using Google Cloud services:

#### Step 1: Sign In and Create a Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. Click on the **Select a Project** dropdown at the top of the page.
3. Click **New Project** and provide a project name (e.g., "Programming ChatBot").
4. Click **Create** and wait for the project to be set up.

#### Step 2: Enable the Required API

1. In the Google Cloud Console, navigate to **APIs & Services** > **Library**.
2. Search for the API you need (e.g., "Natural Language API," "Translation API," etc.).
3. Click on the desired API and then click the **Enable** button.

#### Step 3: Create an API Key

1. Go to **APIs & Services** > **Credentials**.
2. Click **Create Credentials** and select **API Key**.
3. A dialog box will appear with your newly generated API key. Copy the key.

#### Step 4: Restrict the API Key (Optional but Recommended)

1. Click the **Edit API Key** icon next to your API key in the credentials list.
2. Under **Key Restrictions**, choose one or more of the following restrictions:
   - **Application restrictions**: Restrict usage to specific websites (HTTP referrers), IP addresses, or Android/iOS apps.
   - **API restrictions**: Limit the key's access to specific APIs (e.g., only the Translation API).
3. Save the changes.

#### Step 5: Add the API Key to Your Project

1. Open the `.env` file in the **root folder** of your project.
2. Add the API key to `VITE_API_KEY`.

Once the `.env` files are configured, restart your development servers to apply the changes.

## Installation

To run this project locally, run the follwing code on your command prompt:

1.Clone the repository:

```bash
git clone https://github.com/Ponragavan/Programming-ChatBot.git
```

2.Install dependencies:

```bash
npm install
```

3.To run:

```bash
npm run dev
```
