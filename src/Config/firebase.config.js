
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCn6UtjBkTmwB5WxMnVATm769AX4vNKjLI",
  authDomain: "cleen-co.firebaseapp.com",
  projectId: "cleen-co",
  storageBucket: "cleen-co.appspot.com",
  messagingSenderId: "737829692777",
  appId: "1:737829692777:web:5f79c7cab8dd5a865949f8"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;