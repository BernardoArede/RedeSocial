
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx3mpGLuX7ktHhyt2hLxKSjkBBGbpbQ1g",
  authDomain: "redesocial-216d7.firebaseapp.com",
  projectId: "redesocial-216d7",
  storageBucket: "redesocial-216d7.appspot.com",
  messagingSenderId: "303947375843",
  appId: "1:303947375843:web:292ebd2c016227d24391d6"
};


const app = initializeApp(firebaseConfig);

//Initialize database
const db = getFirestore(app);

export {db}