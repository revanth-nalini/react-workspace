import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABZEUFqaNv7swp7OAL3k53G2vNf4N6b2o",
    authDomain: "glmail-cut.firebaseapp.com",
    projectId: "glmail-cut",
    storageBucket: "glmail-cut.appspot.com",
    messagingSenderId: "618377702272",
    appId: "1:618377702272:web:f7e445a9f466562b36af65"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
