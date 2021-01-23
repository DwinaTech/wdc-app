import React from "react";
import { auth, firebaseRef } from "../config";

const Login = () => (
  <div className="login">
    <h2>Login</h2>
    <button
      onClick={() => {
        auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
      }}
    >
      Login with Google
    </button>
  </div>
);

export default Login;
