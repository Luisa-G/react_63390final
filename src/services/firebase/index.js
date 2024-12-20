// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXLmOF68A4FdSXYxe4F6QpDF6pqVcDBwU",
    authDomain: "react63390.firebaseapp.com",
    projectId: "react63390",
    storageBucket: "react63390.firebasestorage.app",
    messagingSenderId: "846551476649",
    appId: "1:846551476649:web:f06362b66ecf13c419bcb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)