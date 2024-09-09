import axios from "axios";
import { getNextFiveDaysData } from "./dateUtils";

const apiKey = "aa2f15a1639a12eeefd8ed2caba97506";

export const fetchCurrentWeather = async (city, units) => {
  const unitParam = units === "metric" ? "metric" : "imperial";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitParam}`
  );
  return response.data;
};

export const fetchWeatherData = async (lat, lon, units) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  );
  return getNextFiveDaysData(response.data.list);
};
