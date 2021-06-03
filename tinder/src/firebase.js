import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBV2nHxcTPkKQ9yCLorZMPZ-mmTLGFFu6s",
  authDomain: "tinder-replicate.firebaseapp.com",
  databaseURL: "https://tinder-replicate.firebaseio.com",
  projectId: "tinder-replicate",
  storageBucket: "tinder-replicate.appspot.com",
  messagingSenderId: "518631455016",
  appId: "1:518631455016:web:4100a35c161a7e66d3b81d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;