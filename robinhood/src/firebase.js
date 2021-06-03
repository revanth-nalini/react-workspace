import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACgOnRut4EziuTu8tCzXx7vMtT7JvRi6A",
    authDomain: "robinhood-equal.firebaseapp.com",
    projectId: "robinhood-equal",
    storageBucket: "robinhood-equal.appspot.com",
    messagingSenderId: "842249654882",
    appId: "1:842249654882:web:40f847d516722a5d5e773b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db }