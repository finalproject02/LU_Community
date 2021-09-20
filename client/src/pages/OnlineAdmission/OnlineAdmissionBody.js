import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import AdmissionFirstStep from "../../components/OnlineAdmission/AdmissionFristStep/AdmissionFirstStep";
import Requirement from "../../components/OnlineAdmission/AdmissionRequirement/Requirement";
import AdmissionSecondStep from "../../components/OnlineAdmission/AdmissionSecondStep/AdmissionSecondStep";
import AdmissionFinalStep from "../../components/OnlineAdmission/AdmissionFinalStep/AdmissionFinalStep";

const OnlineAdmissionBody = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <MainNavbar></MainNavbar>
      <Requirement></Requirement>
      <AdmissionFirstStep></AdmissionFirstStep>
      <AdmissionSecondStep></AdmissionSecondStep>
      <AdmissionFinalStep></AdmissionFinalStep>
      <Footer></Footer>
    </div>
  );
};

export default OnlineAdmissionBody;
