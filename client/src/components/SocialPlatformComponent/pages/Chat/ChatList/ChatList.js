import React, { Component } from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItem";
import {useSelector} from "react-redux";

export default function ChatList ()  {
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const peerConnect = people?.filter(person => currentUser?.peers.includes(person._id));
    const allChatUsers = [
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            id: 1,
            name: "Tim Hover",
            active: true,
            isOnline: true,
        },
        {
            image:
                "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
            id: 2,
            name: "Ayub Rossi",
            active: false,
            isOnline: false,
        },
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
            id: 3,
            name: "Hamaad Dejesus",
            active: false,
            isOnline: false,
        }
    ];

        return (
            <div className="main__chatlist">
                <div className="chatlist__heading">
                    <button className="btn-nobg">
                        <i className="fa fa-ellipsis-h"></i>
                    </button>
                </div>
                <div className="chatList__search">
                    <div className="search_wrap">
                        <input type="text" placeholder="Search Here" required />
                        <button className="search-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
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
