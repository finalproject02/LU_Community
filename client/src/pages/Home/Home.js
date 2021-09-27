import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import HomeBody from "../../components/HomeBody/HomeBody";
import Footer from "../../components/Footer/Footer";
import {useDispatch} from "react-redux";
import {ALlUser} from "../../actions/users";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ALlUser())
    },[])
  return (
    <div className="bg-light">
      <Header/>
      <MainNavbar/>
      <MainCarousel/>
      <HomeBody/>
      <Footer/>
    </div>
  );
};

export default Home;
