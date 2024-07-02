import { useEffect, useState } from "react";
import Hotel from "../Hotel/Hotel";

const FeaturedProperties = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("hotel.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div className=" text-center mt-10 lg:mt-44 lg:mb-5 mb-4">
      <div className=" mb-10">
        <p className=" md:text-xl lg:text-3xl">Featured Properties</p>
        <p className=" text-2xl lg:text-5xl">
          Featured villas & vacation rentals
        </p>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
