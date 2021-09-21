import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import Home from './pages/Home/Home';
import AdmissionRequest from './pages/AdmissionRequest/AdmissionRequest';

function App() {
  return (
    <div>
      <Router>
        <AdminNavbar></AdminNavbar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/admissionRequest">
            <AdmissionRequest></AdmissionRequest>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
