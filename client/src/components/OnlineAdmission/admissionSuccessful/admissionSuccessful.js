import React from 'react';
import { Card } from 'react-bootstrap';

const admissionSuccessful = ({ finalFormData }) => {
    return (
        <Card className="w-100 bg-light rounded">
            <Card.Body>
                <Card.Title>Md Jahed Miah</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Your submission is successful</Card.Subtitle>
                <Card.Text>
                    Thank you for your submission. we are reviewing your information. After that we will notify you
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default admissionSuccessful;