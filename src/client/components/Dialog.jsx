import addProperty from "../../assets/client/addProperty.svg";
import PropTypes from "prop-types";

const Dialog = ({
  onAccept,
  onReject,
  isOpen,
  statement,
  statementClassName,
  image,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <img
          src={image || addProperty}
          alt="Dialog Illustration"
          className="mx-auto w-32 h-auto mb-4"
        />
        <p
          className={`text-gray-800 text-lg font-medium mb-6 ${statementClassName}`}
        >
          {statement}
        </p>
        <div className="flex justify-around">
          <button
            onClick={onAccept}
            className="bg-primary text-white font-bold py-2 px-6 rounded w-[40%]"
          >
            تأكيد
          </button>
          <button
            onClick={onReject}
            className="bg-white text-primary border border-primary font-bold py-2 px-6 rounded w-[40%]"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  statement: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  statementClassName: PropTypes.string,
};

export default Dialog;
