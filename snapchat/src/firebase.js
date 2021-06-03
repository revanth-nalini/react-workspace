import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmm65YebhBeFsnf5Pj7SpNMzPQXNq4VNY",
    authDomain: "snapchat-unofficial.firebaseapp.com",
    projectId: "snapchat-unofficial",
    storageBucket: "snapchat-unofficial.appspot.com",
    messagingSenderId: "860102172536",
    appId: "1:860102172536:web:339ebd15b8a1fa2812728d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, storage, provider };