import { auth } from "./config";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ChatRoom from "./components/ChatRoom";
import "./app.css";

import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      <nav>
        <h1>WDC</h1>
        <Logout />
      </nav>

      <div className="content">{user ? <ChatRoom /> : <Login />}</div>
    </div>
  );
};

export default App;
