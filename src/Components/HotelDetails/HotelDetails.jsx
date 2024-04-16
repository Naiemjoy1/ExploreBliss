import { useLoaderData, useParams } from "react-router-dom";
import { MdLocalPhone } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { useEffect } from "react";
const HotelDetails = () => {
  useEffect(() => {
    document.title = "Hotels";
  }, []);
  const hotels = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const hotel = hotels.find((hotel) => hotel.id === idInt);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    agent_name,
    agent_position,
    agent_image,
    agent_phone,
  } = hotel;
  console.log(hotel);
  return (
    <div className=" mb-10">
      <div
        className="hero h-80"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/10GQbjQ/pexels-asad-photo-maldives-1266831.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl">{estate_title}</h1>
          </div>
        </div>
      </div>
      <div className=" w-3/5 mx-auto mt-10">
        <img src={image} alt="" />
        <div className=" flex justify-between items-center mt-5">
          <h2 className=" text-3xl font-light">{estate_title}</h2>
          <h2 className=" text-lg font-medium">{price}</h2>
        </div>
        <div className=" mt-5">
          <p>{description}</p>
        </div>
        <div className=" flex justify-between text-center mt-5 font-medium">
          <p>Type: {segment_name}</p>
          <p>For: {status}</p>
          <p>Area: {area}</p>
        </div>
        <div className=" mt-5">
          <p>
            {" "}
            <span className=" font-medium">Facilities:</span>
            {facilities.map((facilitie) => (
              <span
                className=" mr-4 px-4 py-2 flex gap-4 items-center"
                key={facilitie}
              >
                <GiCheckMark />
                {facilitie}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className=" font-medium">Location:</span> {location}
          </p>
        </div>
        <div className=" mt-5">
          <p className=" text-2xl">Contract Our Agent</p>
          <div className=" mt-5 flex gap-4">
            <div className=" lg:w-96">
              <img src={agent_image} alt="" />
            </div>
            <div>
              <p className=" text-3xl">{agent_name}</p>
              <p>{agent_position}</p>
              <p className=" mt-4">
                {agent_phone.map((phone) => (
                  <span
                    className=" mr-4 px-4 py-2 flex gap-2 items-center"
                    key={phone}
                  >
                    <MdLocalPhone />
                    {phone}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
