import React, { Component } from "react";
import Avatar from "../ChatList/Avatar";
import moment from "moment";
import {useSelector} from "react-redux";

export default function ChatItem (props) {
    const { people } = useSelector(state => state.people);
    const currentUserProfilePicture = (id) => {
        const current = people?.filter(usr => usr._id === id);
        return current.map(c => c.profile_picture).toString()
    }
        return (
            <div
                style={{ animationDelay: `0.8s` }}
                className={`chat__item ${props.user}`}
            >
                <div className="chat__item__content">
                    <div className="chat__msg">{props.message}</div>
                    <div className="chat__meta">
                        <span>{moment(props.createdAt).fromNow()}</span>
                    </div>
                </div>
                <Avatar isOnline="active" image={currentUserProfilePicture(props.id)} />
            </div>
        );
}
