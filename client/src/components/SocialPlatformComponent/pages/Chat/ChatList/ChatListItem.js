import Avatar from "./Avatar.js";
import moment from "moment";

export default function  ChatListItem (prop) {

    const handleClick = (id) => {
        localStorage.setItem('chatId', JSON.stringify({id}));
    }
    return (
            <div
                style={{ animationDelay: `0.${prop.animationDelay}s` }}
                onClick={() =>handleClick(prop.id)}
                className={`chatlist__item ${prop.active ? prop.active : ""
                    } `}
            >
                <Avatar
                    image={prop.profile_picture ? `/api/files/storage/${prop.profile_picture}` : "http://placehold.it/80x80"}
                    isOnline={prop.isOnline}
                />

                <div className="userMeta">
                    <p>{prop.name}</p>
                    <span className="activeTime">{moment(prop.lastLogin).fromNow()}</span>
                </div>
            </div>
    );

}
