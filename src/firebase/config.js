// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMf0BxRCsTvFfZ6fOAeZsLi0PJ4fxlhtw",
  authDomain: "irregular-verbs-b8dc9.firebaseapp.com",
  projectId: "irregular-verbs-b8dc9",
  storageBucket: "irregular-verbs-b8dc9.appspot.com",
  messagingSenderId: "597971243862",
  appId: "1:597971243862:web:c2bd34a95e4e50e6f97cf7",
  measurementId: "G-94DFHYC6MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);