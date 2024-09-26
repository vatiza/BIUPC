import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold">404</h1>
        <p className="text-2xl font-medium mb-6">Page Not Found</p>
        <Link
          to="/"
          className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
