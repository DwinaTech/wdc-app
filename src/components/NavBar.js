import { useState } from "react";
import Logout from "./Logout";

const NavBar = ({ user }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav>
      <h1>WDC</h1>
      {user ? (
        <>
          <button
            className="menu"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
              alt="menu"
              style={{ opacity: showSideBar ? 0 : 1 }}
            />
            <img
              src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
              alt="menu-cross"
              style={{ opacity: showSideBar ? 1 : 0 }}
            />
          </button>
          <ul
            className="side-bar"
            style={{ top: showSideBar && user ? "10vh" : "-100vh" }}
          >
            <li>
              <Logout />
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
