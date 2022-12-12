import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNQyrjAgL-LZfwpH5XVHiIjuFy3EaZEkM",
  authDomain: "vivek-portfilo.firebaseapp.com",
  projectId: "vivek-portfilo",
  storageBucket: "vivek-portfilo.appspot.com",
  messagingSenderId: "25384986407",
  appId: "1:25384986407:web:d55047499d985fabe5eb02"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
