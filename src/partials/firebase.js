import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDg2ZIuAA-InBEz4GKn_sqS1zYs1VhoqIY',
  authDomain: 'client-88402.firebaseapp.com',
  projectId: 'client-88402',
  storageBucket: 'client-88402.appspot.com',
  messagingSenderId: '875121968689',
  appId: '1:875121968689:web:ad06c0ab94342abfce7710',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
