import React, { Component } from "react";
import "./ChatBody.css";
import ChatList from "../ChatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import UserProfile from "../UserProfile/UserProfile";
import SocialNavbar from "../../../SocialNavbar/SocialNavbar";

export default class ChatBody extends Component {
  render() {
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
}