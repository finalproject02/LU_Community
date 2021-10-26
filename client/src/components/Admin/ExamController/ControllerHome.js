import React from 'react';
import {Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import PublishResults from "./PublishResults";

const ControllerHome = () => {
    const { people } = useSelector(state => state.people);
    const admissionFeePaid = people?.filter(person => person.position === 'paid admission fee');
    return (
        <div>
            <Container>
                <PublishResults/>
            </Container>
        </div>
    );
};

export default ControllerHome;