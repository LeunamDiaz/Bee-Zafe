// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrdtAkDsMY29idvt85BwQ5KSgVlraaEfk",
  authDomain: "beezafe.firebaseapp.com",
  databaseURL: "https://beezafe-default-rtdb.firebaseio.com",
  projectId: "beezafe",
  storageBucket: "beezafe.appspot.com",
  messagingSenderId: "258666659584",
  appId: "1:258666659584:web:0035bc6d5dc80055503de5",
  measurementId: "G-DCQTDEWYQW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Initialize Analytics only in the client-side
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export { db };
