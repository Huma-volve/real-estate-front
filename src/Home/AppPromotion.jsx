const AppPromotion = () => {
  return (

    <div
      id="help"
      className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8"
    >

      {/* Content Wrapper */}
      <div className="relative w-[90%] h-[400px] mx-auto rounded-lg shadow-lg p-6 bg-gradient-to-b from-[#F7FBF9] to-[rgba(206,170,135,1)]">
        {/* Phone Image */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
          <img
            src="./photos/mobile.png" // Replace with the actual image src
            alt="Phone showing QAIM app"
            className="w-40 sm:w-96"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-4">
          يمكنك تحميل تطبيق{" "}
          <span className="text-[rgba(194,144,98,1)]">قيم - QAIM</span> الآن!
        </h2>

        {/* Rating */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          <span className="text-yellow-500 text-5xl">&#9733;</span>
          <span className="text-yellow-500 text-5xl">&#9733;</span>
          <span className="text-yellow-500 text-5xl">&#9733;</span>
          <span className="text-yellow-500 text-5xl">&#9733;</span>
          <span className="text-yellow-500 text-5xl">&#9733;</span>
        </div>

        {/* Downloads Text */}
        <p className="text-center text-gray-700 mt-2 text-2xl">
          أكثر من 20,000 عملية تنزيل حتى الآن
        </p>

        {/* App Store and Google Play */}
        <div className="flex justify-start space-x-4 mt-24 px-10 gap-6">
          <a href="#" className="block">
            <img
              src="./photos/apple.png"
              alt="Download on Google Play"
              className="w-32"
            />
          </a>
          <a href="#" className="block">
            <img
              src="./photos/google.png"
              alt="Download on App Store"
              className="w-32"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
