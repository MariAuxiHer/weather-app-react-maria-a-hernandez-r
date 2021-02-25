import React, { useState } from "react";
import axios from "axios";
import "./FiveDaysForecast.css";
import WeatherIcon from "./WeatherIcon.js";

export default function FiveDaysForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);
  
  let apiKey = "662598af31b59527ba2a8720cc4f8ec5";

  function convertDtToDays(dt) {
    let date = new Date(dt * 1000);
    let daysFunc = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let day = daysFunc[date.getUTCDay()];
    return day;
  }

  function convertToFahrenheit(temp) {
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    return fahrenheit;
  }

  function searchForecast() {
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(readForecast);
  }

  function readForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.lat === forecast.lat &&
    props.lon === forecast.lon &&
    props.unit === "metric"
  ) {
    return (
      <div className="five-days-forecast">
        <h2 className="forecast-title">Five Days Forecast</h2>

        <div className="row" id="forecast">
          {forecast.daily.slice(0, 8).map(function (forecastItem) {
            return (
              <div className="col-xl-2 col-2" id="col-temp">
                <br />
                <span>
                  {" "}
                  {convertDtToDays(
                    forecastItem.dt + forecast.timezone_offset
                  )}{" "}
                </span>
                <br />

                <WeatherIcon iconCode={forecastItem.weather[0].icon} />

                <br />
                <div className="degree">
                  <span className="smaller-numbers maximum">
                    {" "}
                    {Math.round(forecastItem.temp.max)}°
                  </span>
                  |
                  <span className="smaller-numbers minimum">
                    {" "}
                    {Math.round(forecastItem.temp.min)}°{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (
    loaded &&
    props.lat === forecast.lat &&
    props.lon === forecast.lon &&
    props.unit === "imperial"
  ) {
    return (
      <div className="five-days-forecast">
        <h2 className="forecast-title">Five Days Forecast</h2>

        <div className="row" id="forecast">
          {forecast.daily.slice(0, 8).map(function (forecastItem) {
            return (
              <div className="col-xl-2 col-2" id="col-temp">
                <br />
                <span>
                  {" "}
                  {convertDtToDays(
                    forecastItem.dt + forecast.timezone_offset
                  )}{" "}
                </span>

                <WeatherIcon iconCode={forecastItem.weather[0].icon} />

                <div className="degree">
                  <span className="smaller-numbers maximum">
                    {" "}
                    {convertToFahrenheit(Math.round(forecastItem.temp.max))}°
                  </span>
                  |
                  <span className="smaller-numbers minimum">
                    {" "}
                    {convertToFahrenheit(
                      Math.round(forecastItem.temp.min)
                    )}°{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return "";
  }
}
