import Avatar from "../../../../images/avatar.jpeg"
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import moment from "moment";

const ConversationList = ({ peerConnect }) => {
    const { currentUser } = useSelector(state => state.auth);

    return (
        <div >
            <ContactComponent userData={peerConnect} />
        </div>

    );
};
const ContactComponent = ({ userData }) => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-1 mb-1 conversationListHover active" >
                <div className="d-flex ms-2 p-2">
                    <div>
                        <img width="45" height="45" className="rounded-circle me-2 cursor" src={userData?.profile_picture ? `/api/files/storage/${userData?.profile_picture}` : Avatar} alt="name" />
                    </div>
                    <div className="mt-0 d">
                        <strong className="mt-0">{userData?.name}</strong><br />
                        <small className="text-muted">{userData?.lastText}</small>
                    </div>
                </div>
                <small className="text-muted p-3">{moment(userData?.lastLogin).calendar()}</small>
            </div>
            <hr className="m-0" />
        </>
    );
};

export default ConversationList;