import HomeBody from "../../components/HomeBody/HomeBody";
import MainCarousel from "../../components/MainCarousel/MainCarousel";

const Home = () => {
  return (
    <div className="bg-light">
      <MainCarousel />
      <HomeBody />
    </div>
  );
};

export default Home;
