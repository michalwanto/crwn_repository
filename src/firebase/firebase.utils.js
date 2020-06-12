import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFSIBfg5pguAakeud6a3YXLrPpbNaw6Cg",
  authDomain: "crwn-db-59178.firebaseapp.com",
  databaseURL: "https://crwn-db-59178.firebaseio.com",
  projectId: "crwn-db-59178",
  storageBucket: "crwn-db-59178.appspot.com",
  messagingSenderId: "185378063376",
  appId: "1:185378063376:web:e0d93dcb3fbf53acea7695",
  measurementId: "G-906XB9YTXH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
