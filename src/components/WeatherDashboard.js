import React, { useCallback, useState } from "react";

import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";
import SearchBar from "./SearchBar";
import { fetchCurrentWeather, fetchWeatherData } from "./utilitis/apiUtils";

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchCity, setSearchCity] = useState(city);
  const [noData, setNoData] = useState(false);

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const currentWeatherData = await fetchCurrentWeather(searchCity, units);
      setCurrentWeather(currentWeatherData);
      const fiveDayData = await fetchWeatherData(
        currentWeatherData.coord.lat,
        currentWeatherData.coord.lon,
        units
      );
      setForecast(fiveDayData);
      setNoData(fiveDayData.length === 0);
    } catch (error) {
      setError("Error fetching weather data.");
      setNoData(true);
    } finally {
      setLoading(false);
    }
  }, [searchCity, units]);

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <div className="flex justify-between py-8 px-10">
        <h1 className="text-white font-bold text-xl">Weather App</h1>
        <SearchBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={() => fetchWeather()}
        />
      </div>

      {loading && (
        <div className="flex justify-center items-center h-[60vh] text-white">
          Loading.....
        </div>
      )}

      {!loading && noData && (
        <div className="text-white text-center mt-4">No data found.</div>
      )}

      {!loading && !noData && (
        <div className="flex flex-wrap gap-4 justify-between">
          {currentWeather && (
            <div className="flex-1 max-w-[40%] ">
              <WeatherCard currentWeather={currentWeather} />
            </div>
          )}
          {forecast.length > 0 && (
            <div className="flex-1 max-w-[55%] flex flex-wrap gap-4 justify-center">
              {forecast.map((item, index) => (
                <ForecastCard key={index} item={item} />
              ))}
            </div>
          )}
        </div>
      )}

      {!loading && searchCity === "" && <p>Search for the weather </p>}
    </div>
  );
};

export default WeatherDashboard;
