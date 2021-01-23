import React from "react";
import { auth } from "../config";

const SignOut = () =>
  auth.currentUser && (
    <button className="logout" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );

export default SignOut;
