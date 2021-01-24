import React from "react";
import { auth } from "../config";

const MessageCard = ({ message }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="contents">
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
        </div>
      </div>
    </>
  );
};

export default MessageCard;
