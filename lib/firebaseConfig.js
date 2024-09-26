import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYoh2W336FwhPwi5ZFlhmEoi1I86sVQnY",
  authDomain: "damatag-task.firebaseapp.com",
  projectId: "damatag-task",
  storageBucket: "damatag-task.appspot.com",
  messagingSenderId: "873191917490",
  appId: "1:873191917490:web:787967f64e3a2b315106ab",
  measurementId: "G-PNR1VDN7LG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
