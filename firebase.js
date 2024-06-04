// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOUlpw4Ir9XxSZfn5YyDNZ5KbeKIDSTI",
  authDomain: "quizapp-3f1b6.firebaseapp.com",
  projectId: "quizapp-3f1b6",
  storageBucket: "quizapp-3f1b6.appspot.com",
  messagingSenderId: "212302837406",
  appId: "1:212302837406:web:713770fe4a5607a1662d8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth, getApp, getAuth };
