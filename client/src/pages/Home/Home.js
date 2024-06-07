import React, {useEffect} from "react";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import HomeBody from "../../components/HomeBody/HomeBody";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import { LoadingCurrentUser } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {

  return (
    <div className="overflow-hidden">
      <Header />
      <MainNavbar />
      <MainCarousel />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
