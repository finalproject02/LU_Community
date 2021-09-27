import React from "react";
import Requirement from "../../components/OnlineAdmission/AdmissionRequirement/Requirement";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const OnlineAdmissionBody = () => {
  return (
    <div className="bg-light">
      <Header />
      <MainNavbar />
      <Requirement />
      <Footer />
    </div>
  );
};

export default OnlineAdmissionBody;
