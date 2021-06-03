import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJ5P0dRynjAlXe--ph0Sl8RZupPCQVqLY",
    authDomain: "slack-hacked.firebaseapp.com",
    projectId: "slack-hacked",
    storageBucket: "slack-hacked.appspot.com",
    messagingSenderId: "582475969635",
    appId: "1:582475969635:web:9df6d99971900a9604b456"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };