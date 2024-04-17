import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  AOS.init();
  return (
    <div className=" lg:relative mt-10">
      <div className=" bg-black lg:h-[350px]">
        <h2 className=" text-xl text-center text-yellow-500 mt-10">
          What is your destination?
        </h2>
        <h2 className=" text-6xl text-white text-center font-extralight">
          Most popular destinations
        </h2>
      </div>
      <div className="lg:absolute mt-4 lg:mt-0 inset-x-28 top-28 grid grid-cols-1 justify-center lg:grid-cols-5 gap-4 md:grid-cols-2">
        <div
          data-aos="flip-left"
          className="lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src="https://i.ibb.co/Z8xzhCd/phuket1.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-1 text-center">
              <h2 className="text-2xl font-extralight tracking-wide">Phuket</h2>
              <p className="dark:text-gray-800">245 Properties</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src="https://i.ibb.co/r0F4GKk/636277618430847579-Jamaica-Sandals-Royal-Caribbean-Villas-built-over-the-sea-come-with-big-views-and.webp"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-1 text-center">
              <h2 className="text-2xl font-extralight tracking-wide">
                Caribbean
              </h2>
              <p className="dark:text-gray-800">245 Properties</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src="https://i.ibb.co/856sqvG/a1bd8541-842f-41d5-a2ac-243fea176074.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-1 text-center">
              <h2 className="text-2xl font-extralight tracking-wide">Oahu</h2>
              <p className="dark:text-gray-800">245 Properties</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-down"
          className="lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src="https://i.ibb.co/F0Mf2zs/san-francisco-predicts-23-9-million-visitor-arrivals-in-2023-spends-to-grow-to-usd-8-7-bn.webp"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-1 text-center">
              <h2 className="text-2xl font-extralight tracking-wide">
                San Francisco
              </h2>
              <p className="dark:text-gray-800">245 Properties</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src="https://i.ibb.co/x2gkTwZ/Miami-City-Skyline-001-2023-Emergent-8a5de7f1-4875-49fa-a3fb-4daac8f7c8b1.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-1 text-center">
              <h2 className="text-2xl font-extralight tracking-wide">Miami</h2>
              <p className="dark:text-gray-800">245 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
