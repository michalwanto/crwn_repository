import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("UkApKAVyWUuNDh5GJhTu")
  .collection("cartItems")
  .doc("JPV9XxA8gJXCI728uXo3");

firestore.doc("/users/UkApKAVyWUuNDh5GJhTu/cartItems/JPV9XxA8gJXCI728uXo3");
firestore.collection("/users/UkApKAVyWUuNDh5GJhTu/cartItems");
