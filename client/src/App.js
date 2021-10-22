import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnlineAdmissionBody from "./pages/OnlineAdmission/OnlineAdmissionBody";
import NotFound from "./components/NotFound/NotFound";
import Classroom from "./pages/Classroom/Classroom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SocialPlatform from "./pages/SocialPlatform/SocialPlatform";
import AllNotification from "./components/SocialPlatformComponent/pages/AllNotification/AllNotification";
import SocialProfile from "./components/SocialPlatformComponent/pages/SocialProfile/SocialProfile";
import Connection from "./components/SocialPlatformComponent/pages/Connection/Connection";
import Club from "./components/SocialPlatformComponent/pages/Club/Club";
import Group from "./components/SocialPlatformComponent/pages/Group/Group";
import SearchPage from "./components/SocialPlatformComponent/pages/SearchPage/SearchPage";
import ClubDetails from "./components/SocialPlatformComponent/ClubDetails/ClubDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LoadingCurrentUser, updateProfile } from "./actions/auth";
import { getCurrentUserPosts, PostNotifications } from "./actions/posts";
import { ToastContainer } from "react-toastify";
import { People, Suggestions } from "./actions/people";
import { ALlGroup } from "./actions/groups";
import { ALlClub } from "./actions/clubs";
import UserProfile from "./components/SocialPlatformComponent/pages/UserProfile/UserProfile";
import GroupInitial from "./components/SocialPlatformComponent/GroupInitial/GroupInitial";
import ScrollToTop from "./ScrollToTop";
import Message from "./components/SocialPlatformComponent/pages/Message/Message";
import PostDetails from "./components/SocialPlatformComponent/pages/PostDetails/PostDetails";
import AdmissionFirstStep from "./components/OnlineAdmission/AdmissionFristStep/AdmissionFirstStep";
import AdmissionSecondStep from "./components/OnlineAdmission/AdmissionSecondStep/AdmissionSecondStep";
import AdmissionFinalStep from "./components/OnlineAdmission/AdmissionFinalStep/AdmissionFinalStep";
import { Messages } from "./actions/messages";
import ChatBody from "./components/SocialPlatformComponent/pages/Chat/ChatBody/ChatBody";
import FacultyCSE from "./components/FacultyMembers/FacultyCSE";
import TeacherDetails from "./components/FacultyMembers/TeacherDetails";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import ViewCourses from "./components/Admin/Teacher/ViewCourses";
import CourseStudent from "./components/Admin/Teacher/CourseStudent";
import AssignCourses from "./components/Admin/DepartmentHead/AssignCourses";
import AssignCourseList from "./components/Admin/DepartmentHead/AssignCourseList";
import ApproveResults from "./components/Admin/DepartmentHead/ApproveResults";
import ApproveResultCourse from "./components/Admin/DepartmentHead/ApproveResultCourse";
import PublishResult from "./components/Admin/ExamController/PublishResults";
import StudentResults from "./components/Admin/ExamController/StudentResults";
import SemesterRegiReq from "./components/Admin/SemesterRegiReq/SemesterRegiReq";
import SemesterRegiDetails from "./components/Admin/SemesterRegiReq/SemesterRegiDetails";
import Department from "./components/Admin/Department/Department";
import AddCourses from "./components/Admin/Department/AddCourses";
import AddStudents from "./components/Admin/Department/AddStudents";
import AddFacultyMembers from "./components/Admin/Department/AddFacultyMembers";
import SemesterRegi from "./components/Admin/Student/SemesterRegi";
import Payment from "./components/Admin/Student/Payment";
import Results from "./components/Admin/Student/Results";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadingCurrentUser());
    dispatch(PostNotifications())
    dispatch(getCurrentUserPosts());
    dispatch(People());
    dispatch(ALlClub());
    dispatch(ALlGroup());
    dispatch(Messages())
    dispatch(updateProfile({ lastLogin: Date.now() }))
  }, []);
  const { currentUser } = useSelector(state => state.auth);
  const department = currentUser?.department
  useEffect(() => {
    dispatch(Suggestions(department))
  }, [department])

  return (
    <div className="bg-light">
      <ToastContainer />
      <Router>
        <ScrollToTop>
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
            <Route path="/departmentofCSE">
              <FacultyCSE />
            </Route>
            <Route path="/teacherDetails">
              <TeacherDetails />
            </Route>
            <Route path="/departmentofeee">
              <Home />
            </Route>
            <Route path="/departmentofcivil">
              <Home />
            </Route>
            <Route path="/departmentofenglish">
              <Home />
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
            <Route path={'/firstStep'}>
              <AdmissionFirstStep />
            </Route>
            <Route path={'/secondStep'}>
              <AdmissionSecondStep />
            </Route>
            <Route path={'/finalStep'}>
              <AdmissionFinalStep />
            </Route>
            <Route path="/departmentofbangla">
              <Home />
            </Route>
            <Route path="/paymentprocedure">
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
            <Route path="/profile/:id">
              <UserProfile />
            </Route>
            <Route path="/allNotification">
              <AllNotification />
            </Route>
            <Route path="/post/:id">
              <PostDetails />
            </Route>
            <Route path="/connection">
              <Connection />
            </Route>
            <Route path="/message">
              <Message />
            </Route>
            <Route path="/chat">
              <ChatBody />
            </Route>
            <Route path="/club">
              <Club />
            </Route>
            <Route path="/clubDetails/:id">
              <ClubDetails />
            </Route>
            <Route path="/group/:id">
              <Group />
            </Route>
            <Route path="/groupInitial">
              <GroupInitial />
            </Route>
            <Route exact path="/search">
              <SearchPage />
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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/viewCourses">
              <ViewCourses />
            </Route>
            <Route path="/courseStudents">
              <CourseStudent />
            </Route>
            <Route path="/assignCourses">
              <AssignCourses />
            </Route>
            <Route path="/assignCourseList">
              <AssignCourseList />
            </Route>
            <Route path="/approveResults">
              <ApproveResults />
            </Route>
            <Route path="/approveCourseResults">
              <ApproveResultCourse />
            </Route>
            <Route path="/publishResults">
              <PublishResult />
            </Route>
            <Route path="/publishStudentResults">
              <StudentResults />
            </Route>
            <Route path="/semesterRegistrationRequest">
              <SemesterRegiReq />
            </Route>
            <Route path="/semesterRegiDetails">
              <SemesterRegiDetails />
            </Route>
            <Route path="/department">
              <Department />
            </Route>
            <Route path="/semesterRegiDetails">
              <SemesterRegiDetails />
            </Route>
            <Route path="/addCourses">
              <AddCourses />
            </Route>
            <Route path="/AddStudents">
              <AddStudents />
            </Route>
            <Route path="/AddFacultyMembers">
              <AddFacultyMembers />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/semesterRegistration">
              <SemesterRegi />
            </Route>
            <Route path="/paymentHistory">
              <Payment />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
