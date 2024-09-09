import React, { useEffect, useState } from "react";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import fog from "../assets/fog.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import storm from "../assets/storm.png";
import wind from "../assets/windy.png";

const IconComponents = (weatherConditions) => {
  console.log("DrizzleDrizzleDrizzle", weatherConditions);

  switch (weatherConditions) {
    case "clouds":
      return cloud;
    case "rain":
    case "drizzle":
      return rain;
    case "thunder":
      return storm;
    case "fog":
      return fog;
    case "snow":
      return snow;
    case "wind":
      return wind;
    case "clear":
      return sun;
    default:
      return sun;
  }
};

export default IconComponents;
