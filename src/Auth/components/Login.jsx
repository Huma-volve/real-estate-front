import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { SlLock } from "react-icons/sl";
import { Link } from "react-router-dom";
import fetchlogin from "../authApi/fetchLogin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    let valid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("يرجى إدخال بريد إلكتروني صالح");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("كلمة المرور يجب أن تكون على الأقل 6 أحرف");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setLoading(true); // Disable the button

      try {
        // Call fetchlogin with the email and password
        const result = await fetchlogin({ email, password });
        toast.success("تم تسجيل الدخول بنجاح!"); // Show success toast
        navigate("/"); // Navigate to the home page
      } catch (error) {
        toast.error("فشل تسجيل الدخول، يرجى المحاولة مرة أخرى."); // Show error toast
      } finally {
        setLoading(false); // Enable the button
      }
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen overflow-y-auto">
      {/* Right Part */}
      <div className="w-full lg:w-2/5 bg-white p-8 flex flex-col items-start justify-center">
        <img
          src="./photos/login.png"
          alt="Login Illustration"
          className="mb-6 h-56 mx-auto"
        />
        <h1 className="text-4xl font-bold mb-2 text-[#C29062]">أهلاً بك!</h1>
        <p className="text-xl mb-8">مرحباً بعودتك مجدداً</p>

        {/* Email input */}
        <div className="w-full mb-4">
          <div className="flex items-center border rounded-lg">
            <BsEnvelope className="text-gray-400 mx-2" size={24} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-4 pl-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        {/* Password input */}
        <div className="w-full mb-6">
          <div className="flex items-center border rounded-lg">
            <SlLock className="text-gray-400 mx-2" size={24} />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="كلمة المرور"
              className="w-full p-4 pl-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="text-gray-400 mx-4"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <button
          className="bg-[#C29062] text-white py-2 px-8 rounded-full w-full"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
        <a href="#" className="mt-4 mx-auto">
          هل نسيت كلمة المرور؟
        </a>
      </div>

      {/* Left Part */}
      <div className="w-full lg:w-3/5 bg-gradient-to-b from-[#D1E8E2] to-transparent p-8 relative flex flex-col justify-center">
        <button className="text-white w-32 bg-[#C29062] flex gap-2 items-center justify-center h-10 rounded-2xl absolute top-4 left-4 m-4">
          <Link to="/">
            <div>عودة</div>
          </Link>
          <div>
            <FaArrowLeft />
          </div>
        </button>
        <div className="mt-10 text-right ms-16 md:text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#C29062]">
            ليس لديك حساب!
          </h1>
          <p className="text-2xl mb-8">يمكنك تسجيل بياناتك وإنشاء حساب الآن</p>
          <Link to="/register">
            <button className="bg-[#C29062] text-white py-2 px-8 rounded-full flex gap-2 items-center mx-auto">
              <div>
                <FaArrowRight />
              </div>
              <div>تسجيل</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
