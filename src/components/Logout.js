import React from "react";
import { auth } from "../config";

const SignOut = ({ setShowSideBar }) =>
  auth.currentUser && (
    <button
      className="logout"
      onClick={() => {
        auth.signOut();
        setShowSideBar(false);
      }}
    >
      Sign Out
    </button>
  );

export default SignOut;
