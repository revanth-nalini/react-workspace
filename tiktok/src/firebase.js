import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAPsTEmQdSTC-s5EpON3qqydhZDrgRVA0o",
  authDomain: "tiktok-twin.firebaseapp.com",
  databaseURL: "https://tiktok-twin.firebaseio.com",
  projectId: "tiktok-twin",
  storageBucket: "tiktok-twin.appspot.com",
  messagingSenderId: "552729974704",
  appId: "1:552729974704:web:f12c6fd4b8af6b06bba875"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;