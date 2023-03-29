
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, setDoc, doc, collection,  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmj2HynEq3oHIbDdQwDqKnpHTR8u7JsU",
  authDomain: "javascriptapidatabase.firebaseapp.com",
  projectId: "javascriptapidatabase",
  storageBucket: "javascriptapidatabase.appspot.com",
  messagingSenderId: "746035261722",
  appId: "1:746035261722:web:10b318c77287080d03fca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app);


export { db }



