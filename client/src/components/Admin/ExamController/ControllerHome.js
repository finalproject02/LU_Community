import React from 'react';
import {Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import PublishResults from "./PublishResults";
import AdminNavbar from "../AdminNavbar/AdminNavbar"

const ControllerHome = () => {
    const { people } = useSelector(state => state.people);
    const admissionFeePaid = people?.filter(person => person.position === 'paid admission fee');
    return (
        <div>
		<AdminNavbar/>
            <Container>
                <PublishResults/>
            </Container>
        </div>
    );
};

export default ControllerHome;