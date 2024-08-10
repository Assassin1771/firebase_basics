import React, { useState, useEffect } from "react";
import { firebaseApp } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import CreateUser from "./components/createUser";
import Login from "./components/login";
import GoogleAuth from "./components/GoogleAuth";

const firebaseDb = getDatabase(firebaseApp);

const App = () => {
  const auth = getAuth();

  const [loggedIn, setIsLoggedIn] = useState();

  const setData = (id) => {
    set(ref(firebaseDb, "users/" + id), {
      name: "Tushar Garg",
      age: 23,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
        const uid = user.uid;
        // ...
      } else {
        setIsLoggedIn();
        // User is signed out
        // ...
      }
    });
  }, [auth]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        width: "max-content",
      }}
    >
      <div>FIREBASE REACT APP</div>

      {loggedIn ? (
        <div>
          <div>YOU ARE LOGGED IN </div>
          <button onClick={() => signOut(auth)}>LOG OUT</button>
        </div>
      ) : (
        <>
          <button onClick={() => setData(1)}>SET DATA IN REALTIME DB</button>

          <CreateUser />
          <Login />
          <GoogleAuth />
        </>
      )}
    </div>
  );
};

export default App;
