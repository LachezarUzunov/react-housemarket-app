// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3bdQ1MyXejXWrRpa7jjrrYKM_WsgEGIM",
  authDomain: "react-housemarket-app.firebaseapp.com",
  projectId: "react-housemarket-app",
  storageBucket: "react-housemarket-app.appspot.com",
  messagingSenderId: "663200308590",
  appId: "1:663200308590:web:53b19171efdf6a0879b57f"
};

// Initialize Firebase
export const db = getFirestore();