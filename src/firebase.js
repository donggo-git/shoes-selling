import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVEGCJsSKsw6b4GKrhqOmZ6jHVm04JYNs",
    authDomain: "shoeselling-e62a0.firebaseapp.com",
    projectId: "shoeselling-e62a0",
    storageBucket: "shoeselling-e62a0.appspot.com",
    messagingSenderId: "922868836655",
    appId: "1:922868836655:web:4b82ba51e59d7fe1e999da",
    measurementId: "G-P5BG55P2XL"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();



const db = firebase.firestore();
export { db };