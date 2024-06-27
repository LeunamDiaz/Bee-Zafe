// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuEG-E1ayEwNFDpccoqd7m0IVDfeNYsJ8",
  authDomain: "beezafe-prb1.firebaseapp.com",
  databaseURL: "https://beezafe-prb1-default-rtdb.firebaseio.com",
  projectId: "beezafe-prb1",
  storageBucket: "beezafe-prb1.appspot.com",
  messagingSenderId: "637957817781",
  appId: "1:637957817781:web:9ef10b26ea4a395a6245fc",
  measurementId: "G-TQH7ZW3MXY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only in the client environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, auth };
