import React, {useState} from 'react';
import {Card, Form} from "react-bootstrap";
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
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="add_year" placeholder="Add Year" />
                            <label>Add Year</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Add" className="btn w-100 text-white" />
                        </div>
                    </Form>
                    <label>
                        <span>Spring-2021</span>
                        <Switch onClick={handleChange} />
                    </label>
                    <label>
                        <span>Summer-2021</span>
                        <Switch onClick={handleChange} />
                    </label>
                    <label>
                        <span>Fall-2021</span>
                        <Switch onClick={handleChange} />
                    </label>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddSemester;
