// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7x7u9N5qj2AQwRMnroGgZvyEft4cGryA",
  authDomain: "e-learning-3406e.firebaseapp.com",
  projectId: "e-learning-3406e",
  storageBucket: "e-learning-3406e.appspot.com",
  messagingSenderId: "980951906552",
  appId: "1:980951906552:web:87888ed72e09b2bcc1230d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
