import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJsTmnJSRqayp5e92qIZxMxajMjOk1tgg",
  authDomain: "chat-app-acb31.firebaseapp.com",
  projectId: "chat-app-acb31",
  storageBucket: "chat-app-acb31.appspot.com",
  messagingSenderId: "417516596296",
  appId: "1:417516596296:web:a60d707e75533dca777c7d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();