import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
  const { id, estate_title, image, segment_name, status, price } = hotel;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[275px] w-full" src={image} alt="Shoes" />
        </figure>
        <button className="btn btn-sm absolute top-4 right-4">{status}</button>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
        </div>
        <div className=" text-left flex justify-between items-center text-base font-semibold px-4">
          <p className=" text-yellow-500">{segment_name}</p>
          <p>{price}</p>
        </div>
        <div className=" py-4">
          <Link to={`/hotel/${id}`}>
            <button className="btn btn-wide">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
