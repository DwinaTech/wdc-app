import { auth } from "./config";
import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ChatRoom from "./components/ChatRoom";
import "./app.css";

import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("General");

  return (
    <div className="app">
      <NavBar
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <div className="content">
        {user ? <ChatRoom currentRoom={currentRoom} /> : <Login />}
      </div>
    </div>
  );
};

export default App;
