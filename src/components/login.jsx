import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        window.alert("USER LOGGED IN");
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h1>LOGIN</h1>
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

export default Login;
