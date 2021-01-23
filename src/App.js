import { auth } from "./config";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import ChatRoom from "./components/ChatRoom";
import "./app.css";

import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  const [currentRoom, setCurrentRoom] = useState("General");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {loading && <Spinner />}
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
