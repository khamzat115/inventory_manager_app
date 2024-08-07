// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOP6SfYJYRAnBCdY5Kyj7L_l1qtWHkys",
  authDomain: "inventory-manager-b8b46.firebaseapp.com",
  projectId: "inventory-manager-b8b46",
  storageBucket: "inventory-manager-b8b46.appspot.com",
  messagingSenderId: "162415876581",
  appId: "1:162415876581:web:0a9088ef7b4208ebd2f70c",
  measurementId: "G-D35GSY4HB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
//const analytics = getAnalytics(app);
export {firestore};