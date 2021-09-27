import React from "react";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import HomeBody from "../../components/HomeBody/HomeBody";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

const Home = () => {
  return (
    <div>
      <Header />
      <MainNavbar />
      <MainCarousel />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
