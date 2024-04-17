import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Destinations from "../../Components/Destination/Destinations";
import GetTips from "../../Components/GetTips/GetTips";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <FeaturedProperties></FeaturedProperties>
      <GetTips></GetTips>
    </div>
  );
};

export default Home;
