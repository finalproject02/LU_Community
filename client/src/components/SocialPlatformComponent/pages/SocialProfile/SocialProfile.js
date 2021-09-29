import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import Post from '../../Post/Post';
import ProfileIntro from '../../ProfileIntro/ProfileIntro';
import ProfileEducation from '../../ProfileEducation/ProfileEducation';
import PhotoCard from '../../PhotoCard/PhotoCard';
import FriendCard from '../../FriendCard/FriendCard';
import Suggestions from '../../Suggestions/Suggestions';
import {useSelector, useDispatch} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import decode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css'
import {Logout} from "../../../../actions/auth";

const SocialProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {isAuthenticated, currentUser, token} = useSelector(state => state.auth);
    const [userToken, setUserToken] = useState(token);

    useEffect(() => {
        if (token) {
            const tokenDecoded = decode(token);
            if (tokenDecoded.exp * 1000 < new Date().getTime()) return  history.push('/')
        }
    }, [token]);

    const showToast = (type, message) => {
        switch (type) {
            case 0:
                toast.warning(message)
                break;
            case 1:
                toast.success(message)
                break;
            default:
                break;
        }
    }
    const denyPermission = () => {
        showToast(0, 'Not allow without login ')
    }

    return (
        <div>
            {token ? (
                <>
                    <SocialNavbar />
                    <ProfileCard />
                    <Container>
                        <Row>
                            <Col md="8">
                                <Post />
                            </Col>
                            <Col md="4">
                                <ProfileIntro />
                                <ProfileEducation />
                                <PhotoCard />
                                <FriendCard />
                                <Suggestions />
                            </Col>
                        </Row>
                    </Container>
                </>
            ) : denyPermission
            }
        </div>
    );
};

export default SocialProfile;