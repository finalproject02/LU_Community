import React, { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItem";
import {useSelector} from "react-redux";

export default function ChatList ()  {
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const peerConnect = people?.filter(person => currentUser?.peers.includes(person._id));

        return (
            <div className="main__chatlist">
                <div className="chatlist__items">
                    {peerConnect.map((item, index) => {
                        return (
                            <ChatListItems
                                name={item.name}
                                key={item.id}
                                animationDelay={index + 1}
                                active={item.active ? "active" : ""}
                                isOnline={item.isOnline ? "active" : ""}
                                profile_picture={item.profile_picture}
                                lastLogin={item.lastLogin}
                                id={item._id}
                            />
                        );
                    })}
                </div>
            </div>
        );

}
