import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBpseFAaok0MYKmsW_b0FzBVebU9-xHpoY",
  authDomain: "new-javascript-api-4d376.firebaseapp.com",
  projectId: "new-javascript-api-4d376",
  storageBucket: "new-javascript-api-4d376.appspot.com",
  messagingSenderId: "74720463257",
  appId: "1:74720463257:web:7213ee6034b393792c6b08"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);








//https://firestore.googleapis.com/v1/projects/new-javascript-api-4d376/databases/(default)/documents/orders