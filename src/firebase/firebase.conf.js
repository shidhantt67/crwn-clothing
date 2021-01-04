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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;