import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNVGRRehzETnU1mz9yBncg91SMfxwHodI",
    authDomain: "whatsapp-duplicate.firebaseapp.com",
    databaseURL: "https://whatsapp-duplicate.firebaseio.com",
    projectId: "whatsapp-duplicate",
    storageBucket: "whatsapp-duplicate.appspot.com",
    messagingSenderId: "656158415931",
    appId: "1:656158415931:web:788d6e9a0031466eeb101e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;