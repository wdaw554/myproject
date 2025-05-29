
// @ts-nocheck : This is a temporary workaround for the issue with the generated types.
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // Removed Auth
import { getFirestore } from 'firebase/firestore';

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

// Explicitly check if the API key is present and is a non-empty string
if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
  console.error(
    "CRITICAL ERROR: Firebase API Key (NEXT_PUBLIC_FIREBASE_API_KEY) is missing, empty, or not a string in your environment variables. " +
    "Firebase cannot be initialized. Please ensure your .env.local file is set up correctly with a valid API key and you have restarted your development server."
  );
  // Optionally, throw an error here to halt execution if preferred,
  // though Firebase itself will throw an error shortly if initializeApp is called with an invalid config.
  // throw new Error("Firebase API Key is missing or invalid. App cannot start.");
} else {
  // This console.log can be removed in production or if too verbose
  // console.log("Firebase API Key found in environment variables. Attempting to initialize Firebase...");
}

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  try {
    // Only attempt to initialize if we have something that looks like an API key
    if (firebaseConfig.apiKey && firebaseConfig.apiKey.trim() !== '') {
      app = initializeApp(firebaseConfig);
    } else {
      console.error("Firebase initialization skipped due to missing API key. App functionality will be severely limited.");
    }
  } catch (error) {
    console.error("Error initializing Firebase app:", error);
  }
} else {
  app = getApp();
}

// const auth = getAuth(app); // Removed Auth
const db = app ? getFirestore(app) : null; // Get Firestore only if app is initialized
// const googleProvider = new GoogleAuthProvider(); // Removed Auth

export { app, db }; // Removed auth, googleProvider
