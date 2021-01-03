import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC66T4ZWWJVebYSVnmgD1NvfcUnuOzApW8",
  authDomain: "crwn-shopping-92740.firebaseapp.com",
  projectId: "crwn-shopping-92740",
  storageBucket: "crwn-shopping-92740.appspot.com",
  messagingSenderId: "155693164559",
  appId: "1:155693164559:web:8ba1235773fb5337205b7a",
  measurementId: "G-R2NKPDG1RR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;