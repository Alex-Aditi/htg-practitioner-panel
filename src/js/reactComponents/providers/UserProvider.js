import { firebaseAuth } from "../../firebase/firebase";
import React, { createContext, useEffect, useState } from "react";

// this initializes the propagation of user data throughout the app
const UserContext = createContext();

// this is a component that listens for a user object
// it wraps the application in entrypoint.js 
// it propagates the user info down the component tree
const UserProvider = ({ children }) => {
  // these values allow us to keep track of whether a user is logged in or not
  // we use setUser to change the value of user on line 28 and line 32
  // null, which is the original value of user, is equivalent to no logged in user
  const [user, setUser] = useState(null);

  // this matches componentwillmount
  // useEffect runs once when a component mounts, when React loads
  useEffect(() => {
    // when a user logs in or out, onAuthStateChanged gets triggered
    // onAuthStateChanged returns an unsubscribe function that we need to run on unmount
    const unsubscribeFromAuth = firebaseAuth.onAuthStateChanged((userAuth) => {
      // userAuth is either an object or null
      // it is only null on logout, because there is no longer a user
      // on login, the user object is sent to the browser from firebase
      // this object includes the user id as well as several other key/value pairs
      // some of these can be used to develop future features (i.e. email validation)
      if (userAuth) {
        // this code runs if a user successfully logs in
        console.log(userAuth);
        setUser({ uid: userAuth.id });
      } else {
        // this code runs if a user logs out
        console.log("no user");
        setUser(null);
      }
    });
    //this runs on unmount and matches componentwillunmount
    return () => {
      // the unsubscribe function allows us to close the session once the app shuts down
      unsubscribeFromAuth();
    };
  }, 
  // useEffect requires a second argument 
  // we will not be using the features the second arg provides in this app
  // this means useEffect will only run once on mount and not again 
  // docs on useEffect: https://reactjs.org/docs/hooks-effect.html
  []);

  // this component passes the prop value, which contains the user object, through the React Context API
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// this is the component export
export default UserProvider;

// this allows us to use data specific to the logged in user elsewhere in the app
export { UserContext };
