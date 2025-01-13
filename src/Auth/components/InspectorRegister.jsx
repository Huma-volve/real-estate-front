import { useState } from "react";
import {
  BsEnvelope,
  BsPerson,
  BsLock,
  BsPhone,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlus,
  FaRegAddressCard,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useFetchAreasFromCities from "../../hooks/useFetchAreasFromCities";
import useFetchCities from "../../hooks/useFetchCities";
import fetchInspectorRegister from "../authApi/fetchInspectorRegister";
import toast from "react-hot-toast";

function InspectorRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inspectionFee, setInspectionFee] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [area1, setArea1] = useState("");
  const [area2, setArea2] = useState("");
  const [area3, setArea3] = useState("");
  const [nationalId, setNationalId] = useState(null);
  const [file, setFile] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    cities,
    loading: loadingCities,
    error: citiesError,
  } = useFetchCities();

  const {
    areas,
    loading: loadingAreas,
    error: areasError,
  } = useFetchAreasFromCities(city);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhoneNumber = (number) => /^01[0-2,5]{1}[0-9]{8}$/.test(number); // Egyptian phone number pattern

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check for empty fields
    if (!username) newErrors.username = "يرجى إدخال اسم المستخدم.";
    if (!email) newErrors.email = "يرجى إدخال البريد الإلكتروني.";
    if (!phoneNumber) newErrors.phoneNumber = "يرجى إدخال رقم الجوال.";
    if (!inspectionFee) newErrors.inspectionFee = "يرجى إدخال رسوم المعاينة.";
    if (!city) newErrors.city = "يرجى اختيار المدينة.";
    if (!area1) newErrors.area1 = "يرجى اختيار المنطقة الأولى.";
    if (!area2) newErrors.area2 = "يرجى اختيار المنطقة الثانية.";
    if (!area3) newErrors.area3 = "يرجى اختيار المنطقة الثالثة.";
    if (!nationalId) newErrors.nationalId = "يرجى تحميل بطاقة الهوية الوطنية.";
    if (!file) newErrors.certification = "يرجى تحميل شهادة الاعتماد.";
    if (!password) newErrors.password = "يرجى إدخال كلمة المرور.";
    if (!confirmPassword)
      newErrors.confirmPassword = "يرجى إدخال تأكيد كلمة المرور.";
    if (!termsAccepted) newErrors.termsAccepted = "يجب قبول الشروط والأحكام.";

    // Validate email and phone number formats
    if (email && !validateEmail(email))
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح.";
    if (phoneNumber && !validatePhoneNumber(phoneNumber))
      newErrors.phoneNumber = "يرجى إدخال رقم جوال صحيح.";
    if (password && password.length < 6)
      newErrors.password = "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل.";
    if (password && password !== confirmPassword)
      newErrors.confirmPassword = "كلمة المرور وتأكيد كلمة المرور لا يتطابقان.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phoneNumber);
      formData.append("inspection_fees", inspectionFee);
      formData.append("national_id", nationalId);
      formData.append("city_id", city);
      formData.append("area_id_1", area1);
      formData.append("area_id_2", area2);
      formData.append("area_id_3", area3);
      formData.append("password", password);
      formData.append("password_confirmation", confirmPassword);
      formData.append("terms_accepted", termsAccepted ? "1" : null);
      formData.append("delegation", file);
      formData.append("certificate", certificate);

      setLoading(true);

      try {
        const result = await fetchInspectorRegister(formData);
        toast.success("تم تسجيل الحساب بنجاح، الآن يمكنك تسجيل الدخول");
        navigate("/login");
      } catch (error) {
        toast.error("فشل التسجيل، يرجى المحاولة مرة أخرى.");
      } finally {
        setLoading(false);
      }
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
            {/* Text Inputs */}
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
                type: "number",
                placeholder: "رسوم المعاينة",
                value: inspectionFee,
                onChange: setInspectionFee,
                icon: <BsPerson className="text-gray-400 mx-2" size={24} />,
                error: errors.inspectionFee,
              },
              {
                type: "text",
                placeholder: "رقم الهوية الوطنية ",
                value: nationalId,
                onChange: setNationalId,
                icon: (
                  <FaRegAddressCard className="text-gray-400 mx-2" size={24} />
                ),
                error: errors.nationalId,
              },
            ].map(
              ({ type, placeholder, value, onChange, icon, error }, idx) => (
                <div
                  className="w-full mb-4 flex flex-col items-center"
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

            {/* City and Area Dropdowns */}
            <div className="w-full mb-4 flex flex-col items-center">
              <div className="flex items-center border rounded-full w-[65%]">
                <FaLocationDot className="text-gray-400 mx-2" size={24} />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`${inputClasses} text-gray-400`}
                >
                  <option className="text-gray-400" value="" disabled>
                    اختار المدينة
                  </option>
                  {loadingCities ? (
                    <option>Loading...</option>
                  ) : citiesError ? (
                    <option>Error loading cities</option>
                  ) : (
                    cities.map((city) => (
                      <option
                        key={city.id}
                        value={city.id}
                        className="text-black"
                      >
                        {city.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* Area Dropdowns Side by Side */}
            <div className="w-full mb-4 flex flex-wrap justify-between px-8">
              {[
                {
                  placeholder: "اختيار المنطقة الأولى",
                  value: area1,
                  onChange: setArea1,
                  error: errors.area1,
                },
                {
                  placeholder: "اختيار المنطقة الثانية",
                  value: area2,
                  onChange: setArea2,
                  error: errors.area2,
                },
                {
                  placeholder: "اختيار المنطقة الثالثة",
                  value: area3,
                  onChange: setArea3,
                  error: errors.area3,
                },
              ].map(({ placeholder, value, onChange, error }, idx) => (
                <div
                  className="flex items-center border rounded-full w-[32%] mb-2"
                  key={idx}
                >
                  <FaLocationDot className="text-gray-400 mx-2" size={24} />
                  <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`${inputClasses} text-gray-400`}
                  >
                    <option className="text-gray-400" value="" disabled>
                      {placeholder}
                    </option>
                    {loadingAreas ? (
                      <option>Loading...</option>
                    ) : areasError ? (
                      <option>Error loading areas</option>
                    ) : (
                      areas.map((area) => (
                        <option
                          key={area.id}
                          value={area.id}
                          className="text-black"
                        >
                          {area.name}
                        </option>
                      ))
                    )}
                  </select>
                  {error && (
                    <p className="text-red-500 text-sm mt-1 w-full">{error}</p>
                  )}
                </div>
              ))}
            </div>

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
                      className={`${inputClasses}`}
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

            {/* File Upload */}
            <div className="w-full mb-4 flex flex-col items-center">
              <label className="flex items-center justify-center border rounded-xl w-[40%] py-2 cursor-pointer bg-[#D1E8E2] text-[#000]">
                <span>اضافة بطاقة الهوية الوطنية</span>
                <FaPlus className="mr-2" />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              {file && (
                <p className="text-gray-600 text-sm mt-1">{file.name}</p>
              )}
              {errors.file && (
                <p className="text-red-500 text-sm mt-1">{errors.file}</p>
              )}
            </div>

            <div className="w-full mb-4 flex flex-col items-center">
              <label className="flex items-center justify-center border rounded-xl w-[40%] py-2 cursor-pointer bg-[#D1E8E2] text-[#000]">
                <span>إضافة شهادة اعتماد</span>
                <FaPlus className="mr-2" />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setCertificate(e.target.files[0])}
                />
              </label>
              {certificate && (
                <p className="text-gray-600 text-sm mt-1">{certificate.name}</p>
              )}
              {errors.file && (
                <p className="text-red-500 text-sm mt-1">{certificate.file}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="w-full mb-4 flex flex-col items-center">
              <label className="flex items-center justify-center w-[65%] text-gray-500">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <span>
                  أوافق على{" "}
                  <Link to="/terms" className="text-[#C29062]">
                    الشروط والأحكام
                  </Link>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.termsAccepted}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-full mb-8 flex items-center justify-center">
              <button
                type="submit"
                className="w-[65%] p-4 bg-[#C29062] text-white rounded-full font-bold"
              >
                {loading ? "جاري التسجيل..." : "تسجيل"}
              </button>
            </div>
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

export default InspectorRegister;
