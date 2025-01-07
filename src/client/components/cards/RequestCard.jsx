import { useState } from "react";
import PropTypes from "prop-types";
import RequestModal from "../models/RequestModal";

const RequestCard = ({ image, title, location, description, badge }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-xl p-2 ml-5 bg-white transition-all duration-300 group hover:bg-gradient-to-b hover:from-[rgba(194,144,98,1)] hover:to-black cursor-pointer"
      >
        <div className="relative h-[50%]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded shadow-md"
          />
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge || "مقبول"}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-medium font-bold text-primary group-hover:text-[rgba(209,232,226,1)] transition-all duration-300">
            {location}
          </h3>
          <p className="text-black font-bold font-sm mt-1 group-hover:text-white transition-all duration-300">
            {title}
          </p>
          <p className="mt-2 text-gray-500 text-sm line-clamp-2 group-hover:text-white transition-all duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Modal Component */}
      <RequestModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        image={image}
        title={title}
        location={location}
        description={description}
      />
    </>
  );
};

RequestCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.string,
};

export default RequestCard;
