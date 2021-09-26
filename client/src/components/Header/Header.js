import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import headerLogo from "../../images/logo-white.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bgPrimary py-3 borderBottom">
      <Container>
        <div className="d-flex justify-content-start">
          <Link
            to="/"
            className="text-decoration-none text-white d-flex align-items-center mb-3 mb-lg-0"
          >
            <img className="img-fluid logo fs-4" src={headerLogo} alt="name" />
            <span className="fontSize fw-700 w-100">Leading Uiversity</span>
            <em className="position motoSm">..A promise to lead</em>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
