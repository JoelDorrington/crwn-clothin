import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAMPZ4Z7kdrc4gWPu-yPE-Fs322jyqdQSI",
  authDomain: "crwn-db-58f6d.firebaseapp.com",
  databaseURL: "https://crwn-db-58f6d.firebaseio.com",
  projectId: "crwn-db-58f6d",
  storageBucket: "crwn-db-58f6d.appspot.com",
  messagingSenderId: "217885937903",
  appId: "1:217885937903:web:8eec8db1172b3626738b1a"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;