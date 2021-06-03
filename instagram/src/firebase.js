  import firebase from "firebase"

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdZIj2S-5TvI99ZhG7isL7VtDutD717JE",
    authDomain: "instagram-duplicate.firebaseapp.com",
    databaseURL: "https://instagram-duplicate.firebaseio.com",
    projectId: "instagram-duplicate",
    storageBucket: "instagram-duplicate.appspot.com",
    messagingSenderId: "188741086984",
    appId: "1:188741086984:web:bae020d17d49423f4546bd"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };