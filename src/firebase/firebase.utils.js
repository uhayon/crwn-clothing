import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDK3eZnQn8d4lLUCJPo-vfX_Vax5HpuFMo",
  authDomain: "crwn-clothing-db-fe6ab.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-fe6ab.firebaseio.com",
  projectId: "crwn-clothing-db-fe6ab",
  storageBucket: "",
  messagingSenderId: "872064480249",
  appId: "1:872064480249:web:69897702393e812a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;