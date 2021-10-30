import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Container, Table } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {ApproveResultByHead, ApproveResultByExamController} from "../../../actions/departments"

const ApproveResultCourse = () => {
	const dispatch = useDispatch()
	const params = useParams();
	const { id } = params;
	const { currentUser } = useSelector(state => state.auth);
	const { semesters, courses } = useSelector(state => state.departments);
	
	const currentCourse = courses?.filter(course => course._id === id)
	
	const resultApproval = semesters?.filter(semester => semester.courseDocId === id && semester.result_approve === 1);
	const getTotalMark = (assignment, attendence, mid_term, final_term) => {
		return assignment + attendence + mid_term + final_term
	}
	
	const getCGPA = (assignment, attendance, mid_term, final_term) => {
		const totalMarks = assignment + attendance + mid_term + final_term;
		if(totalMarks >= 80 && totalMarks < 100) {
			return "A+"
		} else if (totalMarks >= 75 && totalMarks < 80) {
			return "A"
		} else if(totalMarks >= 70 && totalMarks < 75) {
			return "A-"
		} else if(totalMarks >= 65 && totalMarks < 70) {
			return "B+"
		} else if(totalMarks >= 60 && totalMarks < 65) {
			return "B"
		} else if(totalMarks >= 55 && totalMarks < 60) {
			return "B-"
		} else if(totalMarks >= 50 && totalMarks < 55) {
			return "C+"
		} else if(totalMarks >= 45 && totalMarks < 50) {
			return "C"
		} else if(totalMarks >= 40 && totalMarks < 45) {
			return "D"
		} else if(totalMarks < 40) {
			return "F"
		}
	}
    return (
        <div>
            <AdminNavbar />
            <Container>
                <h2 className="text-center my-2 textPrimary">Couse Title: {currentCourse?.map(course => course.course_title)} <br /> Course Code: {currentCourse?.map(course => course.course_code)}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Grade</th>
							<th scope="col">Approve</th>
                        </tr>
                    </thead>
                    <tbody>
					{resultApproval?.map(result => (
					    <tr>
                            <td>{result.student_id}</td>
                            <td>{result.student_name}</td>

                            <td>
                                <input className="form-control w-75" type="text" value={getTotalMark(result.assignment, result.attendance, result.mid_term, result.final_term)} name placeholder="mark" /></td>

                            <td><input className="form-control w-75" value={getCGPA(result.assignment, result.attendance, result.mid_term, result.final_term)}type="text" name placeholder="Grade" /></td>
							<td>
								<button className="btn btn-primary" onClick={() => dispatch(ApproveResultByHead(result._id))}>Approve</button>
							</td>
                        </tr>
					))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ApproveResultCourse;