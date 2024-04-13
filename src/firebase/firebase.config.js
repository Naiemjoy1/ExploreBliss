// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcCuMKP2A-Du1OF6-2VfrlmxbY6Ft16MY",
  authDomain: "explorebliss-528b8.firebaseapp.com",
  projectId: "explorebliss-528b8",
  storageBucket: "explorebliss-528b8.appspot.com",
  messagingSenderId: "832561750976",
  appId: "1:832561750976:web:d8370789f463640f3d5e25",
  measurementId: "G-F8WT4RWBWD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
