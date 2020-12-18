// This object allows us to communicate with Firebase
// We import it in firebase.js and this sets up our access to Firebase services
// Services are: User authentication, database management [Cloud Firestore], and storage
// You can find the config for your version of this project in your Firebase console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Copy/paste your object below 
// For more info on where to find it: https://support.google.com/firebase/answer/7015592
// For more info on what it is: https://firebase.google.com/docs/web/setup#using-module-bundlers
const firebaseConfig = {
  apiKey: "AIzaSyDKJKxFyAXoGDwOIMRAfY3XCXyVQuMTSwk",
  authDomain: "htg-development.firebaseapp.com",
  databaseURL: "https://htg-development.firebaseio.com",
  projectId: "htg-development",
  storageBucket: "htg-development.appspot.com",
  messagingSenderId: "1038503498333",
  appId: "1:1038503498333:web:b5e8a04c3e57b891db33b4",
  measurementId: "G-BNCJKHRSEK",
};

export default firebaseConfig;
