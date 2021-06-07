import React, { useState, useEffect, createContext } from "react";
import firebase from "firebase/app";
  
interface IUserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<firebase.User | null>(null);

export default function UserProvider(props: IUserProviderProps) {
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: firebase.User | null) => {
        setUser(user);
      });
    //useEffect should return unsubscribe function
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}