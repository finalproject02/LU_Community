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
        <AdminNavbar/>
        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/admissionRequest">
            <AdmissionRequest/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
