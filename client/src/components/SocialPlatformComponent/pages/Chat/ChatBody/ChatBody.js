import React, {Component, useEffect, useState} from "react";
import "./ChatBody.css";
import ChatList from "../ChatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import UserProfile from "../UserProfile/UserProfile";
import SocialNavbar from "../../../SocialNavbar/SocialNavbar";

export default function ChatBody () {
    const [chat, setChat] = useState("")

    useEffect(() => {
        setChat(JSON.parse(localStorage.getItem('chatId')));

    }, [])
    console.log(chat)
    return (
      <>
        <SocialNavbar />
        <div className="main__chatbody mt-5">
          <ChatList />
          <ChatContent />
          <UserProfile />
        </div>
      </>
    );
}