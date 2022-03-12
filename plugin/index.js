// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCMTlsL4KRQOwrAw1lO0ud6RWefOgwvHkw",
  authDomain: "kankaaew-72ecf.firebaseapp.com",
  projectId: "kankaaew-72ecf",
  storageBucket: "kankaaew-72ecf.appspot.com",
  messagingSenderId: "879881833393",
  appId: "1:879881833393:web:8c4aa0fc43f7d541d0cb90",
  measurementId: "G-YRMKGW10W1",
});

const db = getFirestore(firebaseApp);
export default db;
