import { useState } from "react";
import { auth } from "../config";

const MessageCard = ({ message, handleDelete }) => {
  const { id, text, uid, createdAt, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  const [showActionsButtons, setShowActionsButtons] = useState(false);
  const toggleCard = () => {
    setShowActionsButtons(!showActionsButtons);
  };
  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="contents" onClick={toggleCard}>
          <div className="user-name">
            <p>Mohammed Dwina</p>
          </div>
          <div className="photo">
            <img
              src={photoURL || `${process.env.PUBLIC_URL}/avatar.png`}
              alt="avatar"
            />
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div
            style={{ display: showActionsButtons ? "block" : "none" }}
            className="actions"
          >
            <button onClick={() => handleDelete(createdAt, id)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
