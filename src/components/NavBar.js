import { useState } from "react";
import Logout from "./Logout";
import Rooms from "./Rooms";

const NavBar = ({ user, currentRoom, setCurrentRoom }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav>
      <h1>
        Current room: <strong>{currentRoom}</strong>
      </h1>
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
            className="list-menu"
            style={{ top: showSideBar && user ? "10vh" : "-100vh" }}
          >
            <li>
              <Logout setShowSideBar={setShowSideBar} />
            </li>
            <li>
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowSideBar={setShowSideBar}
              />
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;
