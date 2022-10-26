// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBOYFWlj7w7AYQSgtZBOMqFAdVHjp-hVU",
    authDomain: "skillx-auth.firebaseapp.com",
    projectId: "skillx-auth",
    storageBucket: "skillx-auth.appspot.com",
    messagingSenderId: "1014335188488",
    appId: "1:1014335188488:web:4a15f906c3ae6ce06eebbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;