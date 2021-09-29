import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlineAdmissionBody from "./pages/OnlineAdmission/OnlineAdmissionBody";
import AdmissionFirstStep from "./components/OnlineAdmission/AdmissionFristStep/AdmissionFirstStep";
import NotFound from "./components/NotFound/NotFound";
import Classroom from "./pages/Classroom/Classroom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SocialPlatform from "./pages/SocialPlatform/SocialPlatform";
import AllNotification from "./components/SocialPlatformComponent/pages/AllNotification/AllNotification";
import SocialProfile from "./components/SocialPlatformComponent/pages/SocialProfile/SocialProfile";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {LoadingCurrentUser} from "./actions/auth";
import {ToastContainer} from "react-toastify";
import Connection from "./components/SocialPlatformComponent/pages/Connection/Connection";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadingCurrentUser())
  }, [])

  return (
    <div className="bg-light">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/aboutus">
            <Home />
          </Route>
          <Route path="/admissionpolicy">
            <Home />
          </Route>
          <Route path="/scholarshipaid">
            <Home />
          </Route>
          <Route path="/howtoapply">
            <Home />
          </Route>
          <Route path="/academicprogram">
            <Home />
          </Route>
          <Route path="/tutionfees">
            <Home />
          </Route>
          <Route path="/academicpolicy">
            <Home />
          </Route>
          <Route path="/onlineadmission">
            <OnlineAdmissionBody />
          </Route>
          <Route path="/admissionfirststep">
            <AdmissionFirstStep />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/faq">
            <Home />
          </Route>
          <Route path="/facultyofbba">
            <Home />
          </Route>
          <Route path="/facultyofartandmodernlang">
            <Home />
          </Route>
          <Route path="/facultyofsocialscience">
            <Home />
          </Route>
          <Route path="/facultyofmodernscience">
            <Home />
          </Route>
          <Route path="/departmentofbba">
            <Home />
          </Route>
          <Route path="/departmentofcse">
            <Home />
          </Route>
          <Route path="/departmentofeee">
            <Home />
          </Route>
          <Route path="/departmentofcivil">
            <Home />
          </Route>
          <Route path="/departmentofenglish">
            <Home></Home>
          </Route>
          <Route path="/departmentofarchitect">
            <Home />
          </Route>
          <Route path="/departmentoflaw">
            <Home />
          </Route>
          <Route path="/departmentofislamicstudies">
            <Home />
          </Route>
          <Route path="/departmentoftourism">
            <Home />
          </Route>
          <Route path="/departmentofbangla">
            <Home />
          </Route>
          <Route path="/results">
            <Home />
          </Route>
          <Route path="/paymentprocedure">
            <Home />
          </Route>
          <Route path="/semesterregi">
            <Home />
          </Route>
          <Route path="/classroom">
            <Classroom />
          </Route>
          <Route path="/socialplatform">
            <SocialPlatform />
          </Route>
          <Route path="/socialProfile">
            <SocialProfile />
          </Route>
          <Route path="/allnotification">
            <AllNotification />
          </Route>
          <Route path="/connection">
            <Connection />
          </Route>
          <Route path="/routine">
            <Home />
          </Route>
          <Route path="/help">
            <Home />
          </Route>
          <Route path="/iqac">
            <Home />
          </Route>
          <Route path="/library">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
      <div className="bg-light">
        <ToastContainer/>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/aboutus">
              <Home />
            </Route>
            <Route path="/admissionpolicy">
              <Home />
            </Route>
            <Route path="/scholarshipaid">
              <Home />
            </Route>
            <Route path="/howtoapply">
              <Home />
            </Route>
            <Route path="/academicprogram">
              <Home />
            </Route>
            <Route path="/tutionfees">
              <Home />
            </Route>
            <Route path="/academicpolicy">
              <Home />
            </Route>
            <Route path="/onlineadmission">
              <OnlineAdmissionBody />
            </Route>
            <Route path="/admissionfirststep">
              <AdmissionFirstStep />
            </Route>
            <Route path="/contact">
              <Home />
            </Route>
            <Route path="/faq">
              <Home />
            </Route>
            <Route path="/facultyofbba">
              <Home />
            </Route>
            <Route path="/facultyofartandmodernlang">
              <Home />
            </Route>
            <Route path="/facultyofsocialscience">
              <Home />
            </Route>
            <Route path="/facultyofmodernscience">
              <Home />
            </Route>
            <Route path="/departmentofbba">
              <Home />
            </Route>
            <Route path="/departmentofcse">
              <Home />
            </Route>
            <Route path="/departmentofeee">
              <Home />
            </Route>
            <Route path="/departmentofcivil">
              <Home />
            </Route>
            <Route path="/departmentofenglish">
              <Home></Home>
            </Route>
            <Route path="/departmentofarchitect">
              <Home />
            </Route>
            <Route path="/departmentoflaw">
              <Home />
            </Route>
            <Route path="/departmentofislamicstudies">
              <Home />
            </Route>
            <Route path="/departmentoftourism">
              <Home />
            </Route>
            <Route path="/departmentofbangla">
              <Home />
            </Route>
            <Route path="/results">
              <Home />
            </Route>
            <Route path="/paymentprocedure">
              <Home />
            </Route>
            <Route path="/semesterregi">
              <Home />
            </Route>
            <Route path="/classroom">
              <Classroom />
            </Route>
            <Route path="/socialplatform">
              <SocialPlatform />
            </Route>
            <Route path="/socialProfile">
              <SocialProfile />
            </Route>
            <Route path="/allnotification">
              <AllNotification />
            </Route>
            <Route path="/routine">
              <Home />
            </Route>
            <Route path="/help">
              <Home />
            </Route>
            <Route path="/iqac">
              <Home />
            </Route>
            <Route path="/library">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
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
