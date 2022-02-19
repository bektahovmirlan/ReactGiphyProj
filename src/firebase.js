
import "firebase/auth"
import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6tAcA1VhTKAwA3zIWpu56I22kvyhd-xU",
  authDomain: "login-dd301.firebaseapp.com",
  projectId: "login-dd301",
  storageBucket: "login-dd301.appspot.com",
  messagingSenderId: "794721590087",
  appId: "1:794721590087:web:62aea8e573dd2697988a62",
  measurementId: "G-6DEXBSV8ZP"
};
console.log(firebaseConfig)

export const app = initializeApp(firebaseConfig); 
