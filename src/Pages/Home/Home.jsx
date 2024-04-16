import { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeaturedProperties></FeaturedProperties>
    </div>
  );
};

export default Home;
