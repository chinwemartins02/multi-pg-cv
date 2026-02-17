# Chinwe Martins Portfolio App

This is a **mobile-friendly portfolio app** built with **HTML, CSS, JavaScript, Cordova, and Firebase**. It showcases my projects, skills, education, interests, and includes contact functionality with camera and geolocation support. The app is designed for submission as a mobile application project.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup Instructions](#setup-instructions)  
- [Firebase Configuration](#firebase-configuration)  
- [Cordova Plugins](#cordova-plugins)  
- [Project Structure](#project-structure)  
- [How to Run](#how-to-run)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  

---

## Features

- Responsive navigation menu (desktop + mobile)  
- Hero section with introduction  
- About section with skills and profile picture  
- Education section with timeline and CV download  
- Interests section showcasing areas of excitement in tech  
- Projects section with live links  
- Contact section:  
  - Contact form  
  - WhatsApp link  
  - Camera capture  
  - Geolocation sharing  
- Firebase Authentication (Signup/Login)  
- Firestore integration to store user accounts  

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript  
- **Backend / Auth:** Firebase Authentication, Firebase Firestore  
- **Mobile App Framework:** Apache Cordova  
- **Plugins:** Camera, Geolocation  

---

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone <repository-link>
   cd <project-folder>


# Chinwe Martins Portfolio App

This is a **mobile-friendly portfolio app** built with **HTML, CSS, JavaScript, Cordova, and Firebase**. It showcases my projects, skills, education, interests, and includes contact functionality with camera and geolocation support. The app is designed for submission as a mobile application project.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup Instructions](#setup-instructions)  
- [Firebase Configuration](#firebase-configuration)  
- [Cordova Plugins](#cordova-plugins)  
- [Project Structure](#project-structure)  
- [How to Run](#how-to-run)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  

---

## Features

- Responsive navigation menu (desktop + mobile)  
- Hero section with introduction  
- About section with skills and profile picture  
- Education section with timeline and CV download  
- Interests section showcasing areas of excitement in tech  
- Projects section with live links  
- Contact section:  
  - Contact form  
  - WhatsApp link  
  - Camera capture  
  - Geolocation sharing  
- Firebase Authentication (Signup/Login)  
- Firestore integration to store user accounts  

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript  
- **Backend / Auth:** Firebase Authentication, Firebase Firestore  
- **Mobile App Framework:** Apache Cordova  
- **Plugins:** Camera, Geolocation  

---

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone <repository-link>
   cd <project-folder>

2. **Install Cordova CLI**
npm install -g cordova

3. **Add Platforms**

cordova platform add android
cordova platform add ios   # optional, if using Mac


4. **Install Required Plugins**

cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-geolocation


5. **Open Project in IDE**
Use any IDE (VS Code recommended) to review HTML, CSS, and JS files.


Firebase Configuration

Create a Firebase project at Firebase Console

Enable Authentication → Email/Password sign-in method

Create Firestore database

Copy Firebase config and replace in your JS files:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};


service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}


Cordova Plugins

Camera

cordova plugin add cordova-plugin-camera


Allows taking pictures in the contact form.

Geolocation

cordova plugin add cordova-plugin-geolocation


Captures device location for the contact section.


/project-root
│
├── css/
│   └── index.css
├── img/
│   └── Chinwe.jpg
├── js/
│   └── index.js
├── index.html
├── about.html
├── education.html
├── interests.html
├── projects.html
├── contact.html
├── login.html
├── signup.html
├── cordova.js
└── README.md



How to Run

Serve locally for browser testing:
Open index.html in a browser. (Note: Camera and geolocation will not work in the browser)

Run on Android device:

cordova build android
cordova run android


Run on iOS device (Mac required):

cordova build ios
cordova run ios

Usage

Login / Signup: Users must sign up or log in to access the app.

Navigation: Menu allows jumping to sections.

Projects: Click on live links to visit project pages.

Contact: Users can fill out the form, share location, or take a photo.

WhatsApp Button: Direct message link to my number.

Notes

Ensure Firebase API keys are correct.

Test camera and geolocation features on a real device.

Firestore rules must allow authenticated access for login/signup.


Author: Chinwe Martins
Year: 2026
