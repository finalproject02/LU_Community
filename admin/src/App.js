import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AdmissionRequest from './pages/AdmissionRequest/AdmissionRequest';
import NotFound from "./components/NotFound/NotFound";
import StudentDetails from './components/StudentDetails/StudentDetails';
import { useDispatch } from "react-redux";
import { getAllApplication } from "./actions/applications";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ApproveAdReq from './components/ApproveAdReq/ApproveAdReq';
import ViewCourses from "../src/components/Teacher/ViewCourses";
import CourseStudent from "../src/components/Teacher/CourseStudent";
import ApproveResult from './components/DepHead/ApproveResult';
import ApproveResultCourse from './components/DepHead/ApproveResultCourse';
import PublishResult from './components/ExamController/PublishResult';
import StudentResults from './components/ExamController/StudentResults';
import AssignCourse from './components/DepHead/AssignCourse';
import AssignCourseList from './components/DepHead/AssignCourseList';
import SemesterRegistrationReq from './components/SemesterRegistration/SemesterRegistrationReq';
import SemesterRegiDetails from './components/SemesterRegistration/SemesterRegiDetails';
import AddDepartmentWise from './components/Add/AddDepartmentWise';
import AddStudent from './components/Add/AddStudent';
import AddFacultyMember from './components/Add/AddFacultyMember';
import AddCourse from './components/Add/AddCourse';
import AddDepartment from './components/Add/AddDepartment';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllApplication())
  }, [])
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admissionRequest">
            <AdmissionRequest />
          </Route>
          <Route path="/studentDetails/:id">
            <StudentDetails />
          </Route>
          <Route path="/approveRequest">
            <ApproveAdReq />
          </Route>
          <Route path="/addDepartment">
            <AddDepartment />
          </Route>
          <Route path="/addDepartmentWise">
            <AddDepartmentWise />
          </Route>
          <Route path="/addCourse">
            <AddCourse />
          </Route>
          <Route path="/addFacultyMember">
            <AddFacultyMember />
          </Route>
          <Route path="/addStudent">
            <AddStudent />
          </Route>
          <Route path="/viewCourses">
            <ViewCourses />
          </Route>
          <Route path="/courseStudents">
            <CourseStudent />
          </Route>
          <Route path="/approveResult">
            <ApproveResult />
          </Route>
          <Route path="/assignCourses">
            <AssignCourse />
          </Route>
          <Route path="/assignCourseList">
            <AssignCourseList />
          </Route>
          <Route path="/semesterRegistrationRequest">
            <SemesterRegistrationReq />
          </Route>
          <Route path="/semesterRegiDetails">
            <SemesterRegiDetails />
          </Route>
          <Route path="/approveResultCourse">
            <ApproveResultCourse />
          </Route>
          <Route path="/publishResults">
            <PublishResult />
          </Route>
          <Route path="/publishStudentResults">
            <StudentResults />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;