// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxjng-J1bIjD01r-2y3rrns9uvzyOJJR0",
    authDomain: "inventory-management-2483c.firebaseapp.com",
    projectId: "inventory-management-2483c",
    storageBucket: "inventory-management-2483c.appspot.com",
    messagingSenderId: "409552888775",
    appId: "1:409552888775:web:9739e7501015a2615cefe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;