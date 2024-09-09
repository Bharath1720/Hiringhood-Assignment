import React from "react";
import IconComponents from "./utilitis/IconComponents";
import { formatDate } from "./utilitis/dateUtils";

const ForecastCard = ({ item }) => (
  <div className="flex flex-col h-[20rem] w-[15rem] bg-gradient-to-b from-indigo-500 to-indigo-400 p-4 rounded-2xl shadow-lg m-3">
    <div className="flex justify-center mb-4">
      <img
        src={IconComponents(item.weather[0].main.toLowerCase())}
        alt="Weather"
        className="h-20 w-20"
      />
    </div>
    <p className="text-white text-xl font-semibold text-center mb-2">
      {formatDate(item.dt_txt)}
    </p>
    <p className="text-white text-2xl font-bold text-center mb-2">
      {Math.round(item.main.temp)}°
    </p>
    <p className="text-white text-center capitalize">
      {item.weather[0].description}
    </p>
  </div>
);

export default ForecastCard;
