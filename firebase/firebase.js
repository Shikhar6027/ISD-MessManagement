import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpM-gK_SSR8j7AniqNZNx2ptpz65sIB9g",
  authDomain: "mess-management-isd.firebaseapp.com",
  projectId: "mess-management-isd",
  storageBucket: "mess-management-isd.appspot.com",
  messagingSenderId: "994869481650",
  appId: "1:994869481650:web:0c99d1afea9399863bb9ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { app, firestore, auth }; 