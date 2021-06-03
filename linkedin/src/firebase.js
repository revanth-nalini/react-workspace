import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB3RAzXjZFORhAaVF2G0hig1DbQ4CRKdno",
    authDomain: "linkedin-cut.firebaseapp.com",
    projectId: "linkedin-cut",
    storageBucket: "linkedin-cut.appspot.com",
    messagingSenderId: "489903255649",
    appId: "1:489903255649:web:8e675471f3571b07107a20"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };