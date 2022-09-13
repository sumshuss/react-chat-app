
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBr05z3VoqbNUZasa58wbtk78zF8KHnutU",
  authDomain: "chat-2d413.firebaseapp.com",
  projectId: "chat-2d413",
  storageBucket: "chat-2d413.appspot.com",
  messagingSenderId: "833408779931",
  appId: "1:833408779931:web:bcda0964897f8cc3d3683e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
