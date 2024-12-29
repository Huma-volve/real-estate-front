import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        403 - Not Authorized
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {" "}
        You do not have permission to view this page.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotAuthorized;
