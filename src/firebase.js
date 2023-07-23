import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSFOw9CtIm7f7TSahF35z33zJXoZlzaeE",
  authDomain: "automatic-reservation-c0fd0.firebaseapp.com",
  projectId: "automatic-reservation-c0fd0",
  storageBucket: "automatic-reservation-c0fd0.appspot.com",
  messagingSenderId: "557364223666",
  appId: "1:557364223666:web:269e2a4b2a0870bb09b3ab"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
export const firestore = firebase.firestore();