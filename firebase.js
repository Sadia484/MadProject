// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU01REsJWiZujCBE7e9NFnBhukB7iKVaw",
  authDomain: "fir-auth-68ea1.firebaseapp.com",
  projectId: "fir-auth-68ea1",
  storageBucket: "fir-auth-68ea1.appspot.com",
  messagingSenderId: "254665524841",
  appId: "1:254665524841:web:834a4109db761efec104f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication object
const auth = getAuth(app);

export { auth };