// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwnltMvwCLc6QBjEGX5hZcfkwfCJnmdlw",
  authDomain: "only-js-todolist.firebaseapp.com",
  projectId: "only-js-todolist",
  storageBucket: "only-js-todolist.appspot.com",
  messagingSenderId: "1011094966726",
  appId: "1:1011094966726:web:8e493bb94c9f9562f5a2c7",
  measurementId: "G-X5058H8W76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = new firebase.firestore();

export {firestore} 