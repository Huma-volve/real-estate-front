import PropTypes from "prop-types";
import { Button } from "flowbite-react";

const RequestModal = ({
  isOpen,
  onClose,
  image,
  title,
  location,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[400px] max-w-[95%] h-[95%] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h3 className="mt-4 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <p className="mt-4 text-s font-bold text-primary">المدينة</p>
        <p className=" text-sm text-gray-900">{location}</p>
        <p className="mt-4 text-s font-bold text-primary">المدينة</p>
        <p className=" text-sm text-gray-900">{location}</p>
        <p className="mt-4 text-s font-bold text-primary">المدينة</p>
        <p className=" text-sm text-gray-900">{location}</p>
        <p className="mt-4 text-s font-bold text-primary">المدينة</p>
        <p className=" text-sm text-gray-900">{location}</p>
        <p className="mt-4 text-s font-bold text-primary">المدينة</p>
        <p className=" text-sm text-gray-900">{location}</p>

        <div className="bg-[#f2f8f6] flex w-full rounded pt-4 items-center">
          <img
            src="/inspector.png"
            alt="Inspector Image"
            className="w-20 h-20 rounded mr-4 object-contain ml-2"
          />
          <div>
            <p className="font-bold text-black mb-2">وليد المعاين</p>
            <Button className="bg-primary">عرض ملف التقرير</Button>
          </div>
        </div>

        <div className="flex flex-wrap mt-6">
          <button className="bg-primary text-white py-2 px-4 mb-4 rounded cursor-pointer w-full">
            عرض التقارير
          </button>
          <button className="bg-green-500 text-white py-2 px-4  rounded cursor-pointer w-full">
            اكتمال المشروع
          </button>
        </div>
      </div>
    </div>
  );
};

RequestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RequestModal;
