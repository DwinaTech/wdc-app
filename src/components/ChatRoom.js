import { db, auth, firebaseRef } from "../config";
import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MessageCard from "./MessageCard";

const ChatRoom = () => {
  const customRef = useRef();
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: message,
      createdAt: firebaseRef.firestore.FieldValue.serverTimestamp(),
      photoURL,
      uid,
    });

    setMessage("");
    customRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="messages">
        {messages &&
          messages.map((msg) => <MessageCard key={msg.id} message={msg} />)}
        <span ref={customRef}></span>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit" disabled={!message}>
          Send
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
