import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyARvVzxc_0yfFrXa59r1z3blyXz02Y5clY',
  authDomain: 'crwn-db-zero.firebaseapp.com',
  projectId: 'crwn-db-zero',
  storageBucket: 'crwn-db-zero.appspot.com',
  messagingSenderId: '290756390112',
  appId: '1:290756390112:web:253f5e26e77f53ffcef485',
  measurementId: 'G-Z5TKH2YWDV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
