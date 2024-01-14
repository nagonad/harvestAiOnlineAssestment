import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex h-screen items-center justify-evenly gap-x-4">
      <Link to="/barchart">
        <button className="bg-cyan-700 py-2 px-4 rounded-md text-white hover:bg-cyan-700/75">
          Bar Chart
        </button>
      </Link>
      <Link to="/weatherforecast">
        <button className="bg-cyan-700 py-2 px-4 rounded-md text-white hover:bg-cyan-700/75">
          Weather Forecast
        </button>
      </Link>
    </div>
  );
};
