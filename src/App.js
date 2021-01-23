import { auth } from "./config";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ChatRoom from "./components/ChatRoom";
import "./app.css";

import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <NavBar user={user} />
      <div className="content">{user ? <ChatRoom /> : <Login />}</div>
    </div>
  );
};

export default App;
