import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BarChart } from "./components/barChart/BarChart";
import { WeatherForecast } from "./components/weatherForecast/WeatherForecast";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/weatherforecast" element={<WeatherForecast />} />
      </Routes>
    </>
  );
}

export default App;
