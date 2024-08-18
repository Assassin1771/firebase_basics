import React, { useState, useEffect } from "react";
import { firebaseApp } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CreateUser from "./components/createUser";
import Login from "./components/login";
import GoogleAuth from "./components/GoogleAuth";

const firebaseDb = getDatabase(firebaseApp);

const fireStore = getFirestore(firebaseApp);

const App = () => {
  const auth = getAuth();

  // AUTH UI
  const showAuthui = false;

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

  // FIRESTORE

  const writeData = async () => {
    const result = await addDoc(collection(fireStore, "cities"), {
      name: "GZB",
      state: "UP",
    });

    console.log(result);
  };

  //  READ DOCS FOR
  // 1. Reading Data
  // 2. Querying Data (Queries)
  // 3. Update Data
  // 4. Delete Data

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

      {showAuthui && (
        <>
          {loggedIn ? (
            <div>
              <div>YOU ARE LOGGED IN </div>
              <button onClick={() => signOut(auth)}>LOG OUT</button>
            </div>
          ) : (
            <>
              <button onClick={() => setData(1)}>
                SET DATA IN REALTIME DB
              </button>

              <CreateUser />
              <Login />
              <GoogleAuth />
            </>
          )}
        </>
      )}

      <>
        <button onClick={() => writeData()}>insert in firestore</button>
      </>
    </div>
  );
};

export default App;
