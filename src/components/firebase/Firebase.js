// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTuTyTo2BB_hAjcCGpS4nYmjoZiAJOKVU",
  authDomain: "githubproject-785d8.firebaseapp.com",
  projectId: "githubproject-785d8",
  storageBucket: "githubproject-785d8.appspot.com",
  messagingSenderId: "55062942162",
  appId: "1:55062942162:web:098571285ecaf4d32c780b"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

