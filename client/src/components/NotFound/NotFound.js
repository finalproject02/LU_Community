import React from "react";
import Header from "../Header/Header";
import MainNavbar from "../MainNavbar/MainNavbar";

const NotFound = () => {
  return (
    <>
      <div>
        <Header />
        <MainNavbar />
      </div>
      <div className="d-flex justify-content-center align-items-center text-danger">
        <div>
          <h2>Not Found</h2>
          <h1>404</h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
