# Revamp JS Assign 2
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Sai-guru/Revamp-JS-assign-2)

This project is a simple web application that demonstrates user authentication functionalities using Firebase. It includes user registration, login, and password update features, styled with Tailwind CSS.

## Features
-   **User Registration:** New users can sign up with an email and password.
-   **User Login:** Existing users can log in to their accounts.
-   **Password Update:** Authenticated users can update their password.
-   **Firebase Integration:** Utilizes Firebase Authentication for managing users and Firebase Realtime Database for storing basic user information.
-   **Dynamic Feedback:** Provides real-time status messages for successful operations or errors.

## Technologies Used
-   HTML5
-   JavaScript
-   [Firebase](https://firebase.google.com/)
    -   Firebase Authentication
    -   Firebase Realtime Database
-   [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To run this project locally, follow these steps:

### Prerequisites
-   A modern web browser.
-   A Firebase project. If you don't have one, create one at the [Firebase Console](https://console.firebase.google.com/).

### Setup
1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Sai-guru/Revamp-JS-assign-2.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd Revamp-JS-assign-2
    ```

3.  **Configure Firebase:**
    -   In your Firebase project console, go to **Authentication** -> **Sign-in method** and enable **Email/Password**.
    -   Go to your Project Settings and copy your Firebase project's configuration object.
    -   Create a file named `firebase-config.js` in the root of the project and paste your configuration, like so:
    
    ```javascript
    // firebase-config.js
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DATABASE_URL",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.database();
    ```

4.  **Run the application:**
    Open the `index.html` file in your web browser to start using the application. You can use a local web server or a tool like VS Code's "Live Server" extension for a better experience.

## How It Works

1.  **Registration/Login:** Open `index.html`. You can either register a new account or log in with existing credentials. User data (email and last update timestamp) is stored in the Firebase Realtime Database upon registration.
2.  **Password Update:** After a successful login, you will be automatically redirected to `updatePass.html`.
3.  **Enter New Password:** On this page, enter your new password and click the "Update Password" button.
4.  **Status Feedback:** The application will display a success or error message below the form.

## File Structure

-   `index.html`: The main landing page containing the Registration and Login forms.
-   `auth.js`: Handles the JavaScript logic for user registration and login using Firebase Authentication.
-   `updatePass.html`: The page where authenticated users can update their password.
-   `updatePass.js`: Contains the logic for updating the password and ensuring only authenticated users can access the page.
-   `firebase-config.js`: Stores the Firebase project configuration and initializes the Firebase services.
