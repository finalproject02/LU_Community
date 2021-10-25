import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Switch from "react-switch";

const AddSemester = () => {
    const [checked,setChecked]=useState(false);
    const handleChange =()=> {
        setChecked(true);
    }
    return (
        <div>
            <Card>
                <Card.Title className="">Add Semester</Card.Title>
                <Card.Body className="">
                    <label>
                        <span>Switch with default style</span>
                        <Switch onClick={handleChange} />
                    </label>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddSemester;
