import { firebaseAuth } from "../../firebase/firebase";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
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

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
