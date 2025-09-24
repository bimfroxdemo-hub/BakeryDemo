import { FaQuestionCircle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <FaQuestionCircle className="mx-auto text-pink-500 text-6xl mb-6" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
