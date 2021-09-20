import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import headerLogo from "../../images/logo-white.png";

const Header = () => {
  return (
    <header className="bgPrimary py-3 borderBottom">
      <Container>
        <div className="d-flex justify-content-start">
          <a
            href="/"
            className="text-decoration-none text-white d-flex align-items-center mb-3 mb-lg-0"
          >
            <img className="img-fluid logo fs-4" src={headerLogo} alt="" />
            <span className="fontSize fw-700 w-100">Leading Uiversity</span>
            <em className="position motoSm">..A promise to lead</em>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
