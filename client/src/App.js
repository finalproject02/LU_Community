import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OnlineAdmissionBody from "./pages/OnlineAdmission/OnlineAdmissionBody";
import AdmissionFirstStep from "./components/OnlineAdmission/AdmissionFristStep/AdmissionFirstStep";
import NotFound from "./components/NotFound/NotFound";
import Classroom from "./pages/Classroom/Classroom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <Home></Home>
          </Route>
          <Route path="/admissionpolicy">
            <Home></Home>
          </Route>
          <Route path="/scholarshipaid">
            <Home></Home>
          </Route>
          <Route path="/howtoapply">
            <Home></Home>
          </Route>
          <Route path="/academicprogram">
            <Home></Home>
          </Route>
          <Route path="/tutionfees">
            <Home></Home>
          </Route>
          <Route path="/academicpolicy">
            <Home></Home>
          </Route>
          <Route path="/onlineadmission">
            <OnlineAdmissionBody></OnlineAdmissionBody>
          </Route>
          <Route path="/admissionfirststep">
            <AdmissionFirstStep></AdmissionFirstStep>
          </Route>
          {/* <Route path="/admissionfirststep/">
            <AdmissionFirstStep></AdmissionFirstStep>
          </Route> */}
          <Route path="/contact">
            <Home></Home>
          </Route>
          <Route path="/faq">
            <Home></Home>
          </Route>
          <Route path="/facultyofbba">
            <Home></Home>
          </Route>
          <Route path="/facultyofartandmodernlang">
            <Home></Home>
          </Route>
          <Route path="/facultyofsocialscience">
            <Home></Home>
          </Route>
          <Route path="/facultyofmodernscience">
            <Home></Home>
          </Route>
          <Route path="/departmentofbba">
            <Home></Home>
          </Route>
          <Route path="/departmentofcse">
            <Home></Home>
          </Route>
          <Route path="/departmentofeee">
            <Home></Home>
          </Route>
          <Route path="/departmentofcivil">
            <Home></Home>
          </Route>
          <Route path="/departmentofenglish">
            <Home></Home>
          </Route>
          <Route path="/departmentofarchitect">
            <Home></Home>
          </Route>
          <Route path="/departmentoflaw">
            <Home></Home>
          </Route>
          <Route path="/departmentofislamicstudies">
            <Home></Home>
          </Route>
          <Route path="/departmentoftourism">
            <Home></Home>
          </Route>
          <Route path="/departmentofbangla">
            <Home></Home>
          </Route>
          <Route path="/results">
            <Home></Home>
          </Route>
          <Route path="/paymentprocedure">
            <Home></Home>
          </Route>
          <Route path="/semesterregi">
            <Home></Home>
          </Route>
          <Route path="/classroom">
            <Classroom></Classroom>
          </Route>
          <Route path="/socialplatform">
            <Home></Home>
          </Route>
          <Route path="/routine">
            <Home></Home>
          </Route>
          <Route path="/help">
            <Home></Home>
          </Route>
          <Route path="/iqac">
            <Home></Home>
          </Route>
          <Route path="/library">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
