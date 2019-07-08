import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIGoDtFTf6moXE49nKVgJKfMS60lAxtC0",
    authDomain: "noteme-352b8.firebaseapp.com",
    databaseURL: "https://noteme-352b8.firebaseio.com",
    projectId: "noteme-352b8",
    storageBucket: "",
    messagingSenderId: "388424478444",
    appId: "1:388424478444:web:91a5dc1e4118cd2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;