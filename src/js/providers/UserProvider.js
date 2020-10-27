import { firebaseAuth } from "../firebase/firebase";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //this matches componentwillmount
  useEffect(() => {
    //onstateChanged returns an unsubscribe function
    const unsubscribeFromAuth = firebaseAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        setUser({ uid: userAuth.id });
      } else {
        console.log("no user");
        setUser(null);
      }
    });
    //this runs on unmount and matches componentwillunmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
export { UserContext };
