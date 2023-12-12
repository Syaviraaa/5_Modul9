import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAqOJ84KvtiNdS4nT9oUx6coyq0Hw7jKB0",
    authDomain: "noteapp-cc52d.firebaseapp.com",
    projectId: "noteapp-cc52d",
    storageBucket: "noteapp-cc52d.appspot.com",
    messagingSenderId: "8384324297",
    appId: "1:8384324297:web:eb5d500cff3ce6d6aba318"
});

const FIREBASE = firebase;

export default FIREBASE;
