import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtHP6AlqFSwscSOlUbVN6zdIgp-VPAGlU",
    authDomain: "facebook-carbon.firebaseapp.com",
    databaseURL: "https://facebook-carbon.firebaseio.com",
    projectId: "facebook-carbon",
    storageBucket: "facebook-carbon.appspot.com",
    messagingSenderId: "77552481469",
    appId: "1:77552481469:web:640e07f665628ffb6473d4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;