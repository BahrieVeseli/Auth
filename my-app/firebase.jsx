// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCniTxiTOUtc0qv1BGlbCVnE8X6kjx4FTE",
  authDomain: "fir-ecfbf.firebaseapp.com",
  projectId: "fir-ecfbf",
  storageBucket: "fir-ecfbf.firebasestorage.app",
  messagingSenderId: "59661906063",
  appId: "1:59661906063:web:df97724b701f5a5be080fa",
  measurementId: "G-SXDQJ1TDJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);