import React from 'react';
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

function App() {
  return (
      <div>
        <Router>
          <AdminNavbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/admissionRequest">
              <AdmissionRequest/>
            </Route>
            <Route path="/studentDetails">
              <StudentDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;