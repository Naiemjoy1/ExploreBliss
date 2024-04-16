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
    <div className=" text-center mt-10 mb-10">
      <div className=" mb-10">
        <p className=" text-3xl">Featured Properties</p>
        <p className=" text-5xl">Featured villas & vacation rentals</p>
      </div>
      <div className=" grid grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
