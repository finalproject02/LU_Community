import "./ChatBody.css";
import ChatList from "../ChatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import SocialNavbar from "../../../SocialNavbar/SocialNavbar";

const ChatBody = () => {
    return (
        <>
            <SocialNavbar />
            <div className="main__chatbody mt-3">
                <ChatList />
                <ChatContent />
            </div>
        </>
    );
}
export default ChatBody;