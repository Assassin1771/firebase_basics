import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const GoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  auth.languageCode = "it";

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log({ res: result });
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h1>GOOGLE AUTH</h1>
      <span style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => googleAuth(provider)}>
          SIGN IN WITH GOOGLE
        </button>
      </span>
    </div>
  );
};

export default GoogleAuth;
