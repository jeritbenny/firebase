
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvSFKjGWhPyD1Ax2vMA_zywuW3vSzg-DM",
  authDomain: "todos-288e7.firebaseapp.com",
  projectId: "todos-288e7",
  storageBucket: "todos-288e7.appspot.com",
  messagingSenderId: "712670398338",
  appId: "1:712670398338:web:fb784cbe89aa469a95b19b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);