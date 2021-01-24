import { auth } from "../config";

const SignOut = ({ setShowListMenu }) =>
  auth.currentUser && (
    <button
      className="logout"
      onClick={() => {
        auth.signOut();
        setShowListMenu(false);
      }}
    >
      Sign Out
    </button>
  );

export default SignOut;
