// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGTfTquMeK-g86aqVdQo2SH3riXQHS0fg",
  authDomain: "react-native-app-9798a.firebaseapp.com",
  projectId: "react-native-app-9798a",
  storageBucket: "react-native-app-9798a.firebasestorage.app",
  messagingSenderId: "183285284914",
  appId: "1:183285284914:web:eb3d1a20542a6fdb667c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};