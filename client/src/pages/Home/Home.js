import React from "react";
import Header from "../../components/Header/Header";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import HomeBody from "../../components/HomeBody/HomeBody";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-light">
      <Header></Header>
      <MainNavbar></MainNavbar>
      <MainCarousel></MainCarousel>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  );
};

export default Home;
