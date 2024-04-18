// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLplGHD9jA2IUbbADaUL_PadepUZFbKbU",
  authDomain: "dcc-wayanad.firebaseapp.com",
  databaseURL: "https://dcc-wayanad-default-rtdb.firebaseio.com",
  projectId: "dcc-wayanad",
  storageBucket: "dcc-wayanad.appspot.com",
  messagingSenderId: "518197869812",
  appId: "1:518197869812:web:91656f5fd8dc7c55d632a1",
  measurementId: "G-BR03333FQF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export {app, auth, messaging}