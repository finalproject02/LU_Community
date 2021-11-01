import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./MainNavbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../actions/auth";

const MainNavbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, currentUser } = useSelector(state => state.auth)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="sticky-top borderBottom" style={{ backgroundColor: "#187875" }}
    >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="collapseTransition"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto bgPrimary">
		  
            <Nav.Link href="/home" className="text-white me-4 navFontSize">
              Home
            </Nav.Link>
			{currentUser?.position !== 'paid admission fee' && isAuthenticated && (
				<Nav.Link className="navFontSize" href="/dashboard">
				  Dashboard
				</Nav.Link>
		    )}
            <Nav.Link className="me-4 navFontSize " href="/aboutus">
              About Us
            </Nav.Link>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Admission"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/admissionpolicy"
              >
                Admission and Registration policies
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/scholarshipaid"
              >
                Scholarship and aid
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/howtoapply"
              >
                How to Apply
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/academicprogram"
              >
                Academic Prigram
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/tutionfees"
              >
                Tution Fees
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/academicpolicy"
              >
                Academic Policy
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/onlineadmission"
              >
                Online Admission
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem py-3" href="/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem py-3" href="/faq">
                FAQ
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Faculty"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/facultyofbba"
              >
                Faculty of Business Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/facultyofartandmodernlang"
              >
                Faculty of Arts and Modern <br /> Language
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/facultyofsocialscience"
              >
                Faculty of Social Science
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/facultyofmodernscience"
              >
                Faculty of Modern Science
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Faculty Members"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofbba"
              >
                Department of Business <br /> Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofcse"
              >
                Department of CSE
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofeee"
              >
                Department of EEE
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofcivil"
              >
                Department of Civil Engineering
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofenglish"
              >
                Department of English
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofarchitect"
              >
                Department of Architecture
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentoflaw"
              >
                Department of Law
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofislamicstudies"
              >
                Department of Islamic Studies
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentoftourism"
              >
                Department of Tourism and <br />
                Hospitality Management
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/departmentofbangla"
              >
                Department of Bangla
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Student Portal"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="dropdownItem py-3" href="/results">
                Results
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/paymentDemo">
                Payment Demo
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/semesterregi"
              >
                Semester Registration
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem py-3" href="/classroom">
                Classroom
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="/socialPlatform"
              >
                Social Platform
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem py-3" href="/routine">
                Class Routine
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem py-3" href="/help">
                Help
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navFontSize me-4" href="/iqac">
              IQAC
            </Nav.Link>
            <Nav.Link className="navFontSize me-4" href="/library">
              Library
            </Nav.Link>
            {isAuthenticated ? (
              <Nav.Link className="navFontSize" onClick={() => dispatch(Logout())}>
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link className="navFontSize" href="/login">
                  Login
                </Nav.Link>
              </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
