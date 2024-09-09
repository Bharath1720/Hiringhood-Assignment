import React from "react";
import IconComponents from "./utilitis/IconComponents";

const WeatherCard = ({ currentWeather }) => (
  <div className="flex flex-col h-[28rem] w-[22rem] bg-gradient-to-b from-blue-600 to-blue-400 p-6 rounded-2xl shadow-lg m-5">
    <div className="flex justify-between items-center mb-4">
      <img
        src={IconComponents(currentWeather.weather[0].main.toLowerCase())}
        alt="Weather"
        className="h-24 w-24"
      />
      <p className="text-white text-5xl font-bold">
        {Math.round(currentWeather.main.temp)}°C
      </p>
    </div>
    <p className="text-white text-2xl font-semibold text-center mb-6">
      {currentWeather.name}
    </p>
    <div className="flex justify-around text-white text-lg">
      <div className="flex flex-col items-center">
        <div className="bg-yellow-400 p-2 rounded-full shadow-md mb-2">
          {currentWeather.weather[0].main}
        </div>
        <p>Condition</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-red-500 p-2 rounded-full shadow-md mb-2">
          {currentWeather.main.humidity}%
        </div>
        <p>Humidity</p>
      </div>
    </div>
    <div className="flex justify-between text-white text-lg mt-8">
      <p>
        Max:{" "}
        <span className="font-semibold">{currentWeather.main.temp_max}°C</span>
      </p>
      <p>
        Min:{" "}
        <span className="font-semibold">{currentWeather.main.temp_min}°C</span>
      </p>
    </div>
  </div>
);

export default WeatherCard;
