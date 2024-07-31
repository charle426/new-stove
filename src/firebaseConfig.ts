import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM6NheiaqgMMYonNkdvYqCX5PT2_NKdKY",
  authDomain: "stove-a3de4.firebaseapp.com",
  projectId: "stove-a3de4",
  storageBucket: "stove-a3de4.appspot.com",
  messagingSenderId: "552056537693",
  appId: "1:552056537693:web:878f96859596a0e3f703b4",
  measurementId: "G-1ZZXKFY0PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);