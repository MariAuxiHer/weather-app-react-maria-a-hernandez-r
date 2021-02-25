import React, { useState } from "react";
import axios from "axios";
import "./ThreeHoursForecastOneDay.css";
import WeatherIcon from "./WeatherIcon.js";

export default function ThreeHoursForecastOneDay(props) {
  let [infoThreeHours, setInfoThreeHours] = useState(null);
  let [loaded, setLoaded] = useState(false);

  let apiKey = "662598af31b59527ba2a8720cc4f8ec5";

  function convertDtToHours(dt) {
    let day = new Date(dt * 1000);
    let dayHour = day.getUTCHours();
    let dayMinutes = day.getUTCMinutes();
    if (dayHour < 10) {
      dayHour = `0${dayHour}`;
    } else {
      dayHour = `${dayHour}`;
    }

    if (dayMinutes < 10) {
      dayMinutes = `0${dayMinutes}`;
    } else {
      dayMinutes = `${dayMinutes}`;
    }

    let timeMinutesHour = `${dayHour}:${dayMinutes}`;

    return timeMinutesHour;
  }

  function convertToFahrenheit(temp) {
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    return fahrenheit;
  }

  function searchTemperature() {
    let apiUrlThreeHoursTemp = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlThreeHoursTemp).then(displayTempEveryThreeHours);
  }

  function displayTempEveryThreeHours(response) {
    setInfoThreeHours(response.data);
    setLoaded(true);
  }


  if (
    loaded &&
    props.lat === infoThreeHours.city.coord.lat &&
    props.lon === infoThreeHours.city.coord.lon &&
    props.unit === "metric"
  ) {
    //The second condition is necessary because when I enter a new city the property city is changing, but the state (loaded) is not.
    //So, I need to add sth that makes the state change.
    //&& props.city === infoThreeHours.city.name)

    return (
      <div className="detailed-information">
        <h2 className="weather-throughout-the-day"> Temperature </h2>

        <div className="row" id="detailed-information">
          {infoThreeHours.list.slice(0, 8).map(function (infoThreeHoursitem) {
            return (
              <div className="col-xl-2 col-2" id="col-temp">
                <br />
                <span>
                  {" "}
                  {convertDtToHours(
                    infoThreeHoursitem.dt + infoThreeHours.city.timezone
                  )}{" "}
                </span>

                <WeatherIcon iconCode={infoThreeHoursitem.weather[0].icon} />

                <div className="degree">
                  <span className="smaller-numbers maximum">
                    {" "}
                    {Math.round(infoThreeHoursitem.main.temp_max)}°
                  </span>
                  |
                  <span className="smaller-numbers minimum">
                    {" "}
                    {Math.round(infoThreeHoursitem.main.temp_min)}°{" "}
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
    props.lat === infoThreeHours.city.coord.lat &&
    props.lon === infoThreeHours.city.coord.lon &&
    props.unit === "imperial"
  ) {
    //The second condition is necessary because when I enter a new city the property city is changing, but the state (loaded) is not.
    //So, I need to add sth that makes the state change.
    //&& props.city === infoThreeHours.city.name)


    return (
      <div className="detailed-information">
        <h2 className="weather-throughout-the-day"> Temperature </h2>

        <div className="row" id="detailed-information">
          {infoThreeHours.list.slice(0, 8).map(function (infoThreeHoursitem) {
            return (
              <div className="col-xl-2 col-2" id="col-temp">
                <br />
                <span>
                  {" "}
                  {convertDtToHours(
                    infoThreeHoursitem.dt + infoThreeHours.city.timezone
                  )}{" "}
                </span>

                <WeatherIcon iconCode={infoThreeHoursitem.weather[0].icon} />

                <div className="degree">
                  <span className="smaller-numbers maximum">
                    {" "}
                    {convertToFahrenheit(
                      Math.round(infoThreeHoursitem.main.temp_max)
                    )}
                    °
                  </span>
                  |
                  <span className="smaller-numbers minimum">
                    {" "}
                    {convertToFahrenheit(
                      Math.round(infoThreeHoursitem.main.temp_min)
                    )}
                    °{" "}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    searchTemperature();
    return "";
  }
}