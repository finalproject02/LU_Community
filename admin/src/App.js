import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import Home from './pages/Home/Home';
import AdmissionRequest from './pages/AdmissionRequest/AdmissionRequest';
import NotFound from "./components/NotFound/NotFound";
import StudentDetails from './components/StudentDetails/StudentDetails';
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import { getAllApplication } from "./actions/applications";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ApproveAdReq from './components/ApproveAdReq/ApproveAdReq';
import ViewCourses from "../src/components/Teacher/ViewCourses";
import CourseStudent from "../src/components/Teacher/CourseStudent";


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
          <Route path="/viewCourses">
            <ViewCourses />
          </Route>
          <Route path="/courseStudents">
            <CourseStudent />
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