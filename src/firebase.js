// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO3uUzCki6RI2E6p9bWHSvLmYB9IxKuEg",
  authDomain: "first-project-c56e4.firebaseapp.com",
  projectId: "first-project-c56e4",
  storageBucket: "first-project-c56e4.appspot.com",
  messagingSenderId: "246569265081",
  appId: "1:246569265081:web:a1ba66a173d10fd077f868",
  databaseUrl: "https://first-project-c56e4-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
