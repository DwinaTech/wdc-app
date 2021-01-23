import React from "react";
import { auth } from "../config";

const MessageCard = ({ message }) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={photoURL || `${process.env.PUBLIC_URL}/avatar.png`}
          alt="avatar"
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default MessageCard;
