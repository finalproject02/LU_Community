import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Requirement from "../../components/OnlineAdmission/AdmissionRequirement/Requirement";


const OnlineAdmissionBody = () => {
  return (
    <div className="bg-light">
      <Header/>
      <MainNavbar/>
      <Requirement/>
      <Footer/>
    </div>
  );
};

export default OnlineAdmissionBody;
