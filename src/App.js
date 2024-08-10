import React from "react";
import { firebaseApp } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const firebaseDb = getDatabase(firebaseApp);

const App = () => {
  const setData = (id) => {
    set(ref(firebaseDb, "users/" + id), {
      name: "Tushar Garg",
      age: 23,
    });
  };

  return (
    <div>
      <div>FIREBASE REACT APP</div>
      <button onClick={() => setData(1)}>set data in realtime db</button>
    </div>
  );
};

export default App;
