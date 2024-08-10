import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateUser = () => {
  const auth = getAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        window.alert("USER CREATED");
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <span style={{ display: "flex", gap: "8px" }}>
        <label>GMAIL</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </span>
      <span style={{ display: "flex", gap: "8px" }}>
        <label>PASSWORD</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </span>

      <span>
        <button type="submit" onClick={() => createUser(email, password)}>
          {" "}
          SUBMIT
        </button>
      </span>
    </div>
  );
};

export default CreateUser;
