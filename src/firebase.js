import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA4MU-cHjuwF-sDpwGOv9XT9Zy2yjHVfhU",
    authDomain: "shoeselling-53681.firebaseapp.com",
    projectId: "shoeselling-53681",
    storageBucket: "shoeselling-53681.appspot.com",
    messagingSenderId: "666035407657",
    appId: "1:666035407657:web:7f8ded085ab433581b8538",
    measurementId: "G-LJ1SQMP82C"

});


const db = firebase.firestore();
export { db };