import firebase from "firebase/app"
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDnYixA70Zga4zumOEsmmPDgPKRhFHbar8",
    authDomain: "chat-engine-832f4.firebaseapp.com",
    projectId: "chat-engine-832f4",
    storageBucket: "chat-engine-832f4.appspot.com",
    messagingSenderId: "969458651006",
    appId: "1:969458651006:web:ca6435c48f802379772d2f",
  
  }).auth();