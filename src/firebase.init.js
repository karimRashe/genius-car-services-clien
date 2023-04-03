// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkN5W_ZiDF0nXWigqf2Q6XWZOQVnC0DY0",
  authDomain: "car-genius-1e170.firebaseapp.com",
  projectId: "car-genius-1e170",
  storageBucket: "car-genius-1e170.appspot.com",
  messagingSenderId: "986948786588",
  appId: "1:986948786588:web:3929901d163528676a9059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);

export default auth;
















