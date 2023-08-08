import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZbJapsp4IWzI_CZLNrIPD29gWSobVESI",
  authDomain: "rnauth-67bbe.firebaseapp.com",
  projectId: "rnauth-67bbe",
  storageBucket: "rnauth-67bbe.appspot.com",
  messagingSenderId: "84037784244",
  appId: "1:84037784244:web:53f7cbd587ef27ddeafde1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);