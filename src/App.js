import React from "react";
import { firebaseApp } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import CreateUser from "./components/createUser";

const firebaseDb = getDatabase(firebaseApp);

const App = () => {
  const setData = (id) => {
    set(ref(firebaseDb, "users/" + id), {
      name: "Tushar Garg",
      age: 23,
    });
  };

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
      <button onClick={() => setData(1)}>SET DATA IN REALTIME DB</button>

      <CreateUser />
    </div>
  );
};

export default App;
