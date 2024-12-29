
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-lg text-gray-700 mb-4">Oops! The page you &quot;re looking for doesn&quot;t exist.</p>
                <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorElement;