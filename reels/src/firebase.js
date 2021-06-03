import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDdZIj2S-5TvI99ZhG7isL7VtDutD717JE",
    authDomain: "instagram-duplicate.firebaseapp.com",
    databaseURL: "https://instagram-duplicate.firebaseio.com",
    projectId: "instagram-duplicate",
    storageBucket: "instagram-duplicate.appspot.com",
    messagingSenderId: "188741086984",
    appId: "1:188741086984:web:bae020d17d49423f4546bd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
