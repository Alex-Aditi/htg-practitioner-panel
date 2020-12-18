// firebase/app pulls in code to initiate communication with firebase
// on it's own, you cannot use it to access services
import firebase from "firebase/app";
// calling firebase/auth allows us to pull out authentication services in a modular way
// if we were to call another service, i.e. analytics you can do so like this: 
// import "firebase/analytics"
// documentation: https://firebase.google.com/docs/web/setup#using-module-bundlers
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

// this initializes communication to the firebase backend using the values in the firebaseConfig.js file 
// this means we can use other services without needing to rewrite the config values every time
firebase.initializeApp(firebaseConfig);

// this only works because we imported auth above on line 8, after importing firebase/app
const firebaseAuth = firebase.auth();

export default firebase;
export { firebaseAuth };
