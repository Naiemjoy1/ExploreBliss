import { useLoaderData, useParams } from "react-router-dom";
const HotelDetails = () => {
  const hotels = useLoaderData();
  const { id } = useParams();
  console.log(id, hotels);
  return (
    <div>
      <h2>Hotel details</h2>
    </div>
  );
};

export default HotelDetails;
