import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();

export default firebase;
export { firebaseAuth };
