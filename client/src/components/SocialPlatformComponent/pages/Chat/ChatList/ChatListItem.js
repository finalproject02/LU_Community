import Avatar from "./Avatar.js";
import moment from "moment";
import {setCurrentChat} from "../../../../../actions/messages";
import {useDispatch} from "react-redux";

export default function  ChatListItem (prop) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
       dispatch(setCurrentChat(id))
    }
    return (
            <div
                style={{ animationDelay: `0.${prop.animationDelay}s` }}
                onClick={() =>handleClick(prop.id)}
                className={`chatlist__item ${prop.active ? prop.active : ""}`}
            >
                <Avatar
                    image={prop.profile_picture}
                    isOnline={prop.isOnline}
                />

                <div className="userMeta">
                    <p>{prop.name}</p>
                    <span className="activeTime">{moment(prop.lastLogin).fromNow()}</span>
                </div>
            </div>
    );

}
