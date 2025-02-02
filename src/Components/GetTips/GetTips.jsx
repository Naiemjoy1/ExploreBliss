const GetTips = () => {
  return (
    <div>
      <div
        className="hero lg:h-[450px] mb-10 mt-10 "
        style={{
          backgroundImage: "url(https://i.ibb.co/vBMZjLX/2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 p-4"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
              Get the travel tips
            </h1>
            <p className="mb-5">
              Get the insider travel tips, inspiration, discounts and homestay
              recommendations from the best professionals
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTips;
