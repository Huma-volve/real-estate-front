import { useState } from "react";
import {
  BsEnvelope,
  BsPerson,
  BsLock,
  BsPhone,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PersonCustomerRegisteration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhoneNumber = (number) => /^01[0-2,5]{1}[0-9]{8}$/.test(number); // Egyptian phone number pattern

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    // Check for empty fields
    if (!username) {
      newErrors.username = "يرجى إدخال اسم المستخدم.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "يرجى إدخال البريد الإلكتروني.";
      isValid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "يرجى إدخال رقم الجوال.";
      isValid = false;
    }
    if (!city) {
      newErrors.city = "يرجى إدخال المدينة.";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "يرجى إدخال كلمة المرور.";
      isValid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "يرجى إدخال تأكيد كلمة المرور.";
      isValid = false;
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = "يجب قبول الشروط والأحكام.";
      isValid = false;
    }

    // Validate email and phone number formats
    if (email && !validateEmail(email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح.";
      isValid = false;
    }
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "يرجى إدخال رقم جوال صحيح.";
      isValid = false;
    }

    // Password length and matching check
    if (password && password.length < 6) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل.";
      isValid = false;
    }
    if (password && password !== confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور وتأكيد كلمة المرور لا يتطابقان.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const formData = {
        username,
        email,
        phoneNumber,
        city,
        password,
        termsAccepted,
      };
      console.log(formData);
    }
  };

  const inputClasses =
    "w-full p-4 pl-2 border-0 rounded-full focus:outline-none focus:border-[rgba(194,144,98,1)]";

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen overflow-y-auto">
      {/* Right Part */}
      <div className="w-full lg:w-3/5 bg-white p-8 flex flex-col items-center justify-center overflow-y-auto px-0">
        <div className="flex flex-col items-center w-full px-0 overflow-y-scroll">
          <img
            src="./photos/register4.png"
            alt="User Icon"
            className="mb-6 w-16 h-16"
          />
          <h1 className="text-3xl font-bold text-[#C29062] mb-8">
            انشاء حساب جديد
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center px-0"
          >
            {[
              {
                type: "text",
                placeholder: "اسم المستخدم",
                value: username,
                onChange: setUsername,
                icon: <BsPerson className="text-gray-400 mx-2" size={24} />,
                error: errors.username,
              },
              {
                type: "email",
                placeholder: "البريد الإلكتروني",
                value: email,
                onChange: setEmail,
                icon: <BsEnvelope className="text-gray-400 mx-2" size={24} />,
                error: errors.email,
              },
              {
                type: "text",
                placeholder: "رقم الجوال",
                value: phoneNumber,
                onChange: setPhoneNumber,
                icon: <BsPhone className="text-gray-400 mx-2" size={24} />,
                error: errors.phoneNumber,
              },
              {
                type: "text",
                placeholder: "اختار المدينة",
                value: city,
                onChange: setCity,
                icon: (
                  <FaLocationDot className="text-gray-400 mx-2" size={24} />
                ),
                error: errors.city,
              },
            ].map(
              ({ type, placeholder, value, onChange, icon, error }, idx) => (
                <div
                  className="w-full mb-4 flex flex-col items-center "
                  key={idx}
                >
                  <div className="flex items-center border rounded-full w-[65%]">
                    {icon}
                    <input
                      type={type}
                      placeholder={placeholder}
                      className={inputClasses}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
              )
            )}

            {/* Password Fields with Toggle */}
            {[
              {
                placeholder: "كلمة المرور",
                value: password,
                onChange: setPassword,
                show: showPassword,
                setShow: setShowPassword,
                error: errors.password,
              },
              {
                placeholder: "تأكيد كلمة المرور",
                value: confirmPassword,
                onChange: setConfirmPassword,
                show: showConfirmPassword,
                setShow: setShowConfirmPassword,
                error: errors.confirmPassword,
              },
            ].map(
              ({ placeholder, value, onChange, show, setShow, error }, idx) => (
                <div
                  className="w-full mb-4 flex flex-col items-center"
                  key={idx}
                >
                  <div className="flex items-center border rounded-full w-[65%] relative">
                    <BsLock className="text-gray-400 mx-2" size={24} />
                    <input
                      type={show ? "text" : "password"}
                      placeholder={placeholder}
                      className={`${inputClasses}`} // Added padding to make space for the icon
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                    <div
                      className="absolute left-2 cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <BsEyeSlash className="text-gray-400" size={24} />
                      ) : (
                        <BsEye className="text-gray-400" size={24} />
                      )}
                    </div>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
              )
            )}

            {/* Checkbox */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="mr-2"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span>قبول الشروط والأحكام</span>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm mt-1">
                {errors.termsAccepted}
              </p>
            )}
            <button
              type="submit"
              className="bg-[#C29062] text-white py-2 px-8 rounded-full w-[65%]"
            >
              تسجيل دخول
            </button>
          </form>
        </div>
      </div>

      {/* Left Part */}
      <div className="w-full lg:w-2/5 bg-gradient-to-b from-[#D1E8E2] to-transparent p-8 relative flex flex-col justify-center">
        <button className="text-white w-32 bg-[#C29062] flex gap-2 items-center justify-center h-10 rounded-2xl absolute top-4 left-4 m-4">
          <Link to="/">
            <div>عودة</div>
          </Link>
          <div>
            <FaArrowLeft />
          </div>
        </button>
        <div className="mt-10 text-right ms-2 md:text-right">
          <h1 className="text-5xl font-bold mb-6 text-[#C29062]">
            مرحبا بعودتك
          </h1>
          <p className="text-2xl mb-8">
            لتبقي علي تواصل معنا من فضلك قم بالتسجيل الأن.
          </p>
          <Link to="/register">
            <button className="bg-[#C29062] text-white py-2 px-4 rounded-full flex gap-2 items-center mr-4">
              <div>
                <FaArrowRight />
              </div>
              <div> تسجيل دخول</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PersonCustomerRegisteration;
