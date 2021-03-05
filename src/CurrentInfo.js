import React, { useState } from "react";
import "./CurrentInfo.css";
import ThreeHoursForecastOneDay from "./ThreeHoursForecastOneDay.js";
import FiveDaysForecast from "./FiveDaysForecast.js";
import WeatherIcon from "./WeatherIcon.js";

export default function CurrentInfo(props) {
  let [unit, setUnit] = useState("metric");
 
  function setToImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function setToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    let wind = `${props.wind} km/hr`;

    return (
      <div>
        <div id="current-info">
          <div className="row">
            <div className="col" id="city-current-info">
              <h2 className="city">{props.city}</h2>

              <div className="current-time-weather">
                <span className="current-day-and-time">{props.date}</span>
                <br />
                <span id="description"> {props.description} </span>{" "}
                <WeatherIcon iconCode={props.icon} />
              </div>

              <div id="current-temperture">
                <span id="tempe">{props.temperature}</span>{" "}
                <span id="celsius-farenheit-smaller-size">
                  <span id="celsius" className="active">
                    °C
                  </span>{" "}
                  |
                  <a href="/" id="fahrenheit" onClick={setToImperial}>
                    ℉
                  </a>
                </span>
              </div>
            </div>

            <div className="col" id="more-detailed-info">
              <div className="container">
                <div className="row" id="more-detailed-info-center">
                  <div className="col-12">
                    <span id="humidity"> <i className="fas fa-tint"></i> <i className="fas fa-percentage"></i> Humidity: <br /> {props.humidity}% </span>
                  </div>

                  <div className="col-12">
                    <span id="wind"> <i className="fas fa-wind"></i> Wind: <br /> {wind} </span>
                  </div>

                  <div className="col-12">
                    <span id="sunrise"> <i className="fas fa-sun"></i> <i className="fas fa-arrow-up"></i> Sunrise: <br /> {props.sunrise}</span>
                  </div>

                  <div className="col-12">
                    <span id="sunset"> <i className="fas fa-sun"></i> <i className="fas fa-arrow-down"></i> Sunset: <br /> {props.sunset}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ThreeHoursForecastOneDay
          city={props.city}
          unit={unit}
          lat={props.lat}
          lon={props.lon}
        />

<FiveDaysForecast lat={props.lat} lon={props.lon} unit={unit} />
        
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    let mph = Math.round(props.wind * 0.6213727);
    let displaymph = `${mph} mph`;

    return (
      <div>
        <div id="current-info">
          <div className="row">
            <div className="col" id="city-current-info">
              <h2 className="city">{props.city}</h2>

              <div className="current-time-weather">
                <span className="current-day-and-time">{props.date}</span>
                <br />
                <span id="description"> {props.description} </span>{" "}
                <WeatherIcon iconCode={props.icon} />
              </div>

              <div id="current-temperture">
                <span id="tempe">{fahrenheit}</span>{" "}
                <span id="celsius-farenheit-smaller-size">
                  <a href="/" id="celsius" onClick={setToMetric}>
                    °C
                  </a>{" "}
                  |
                  <span href="/" id="fahrenheit" className="active">
                    ℉
                  </span>
                </span>
              </div>
            </div>

            <div className="col" id="more-detailed-info">
              <div className="container">
                <div className="row" id="more-detailed-info-center">
                  <div className="col-12">
                    <span id="humidity"> <i className="fas fa-tint"></i> <i className="fas fa-percentage"></i> Humidity: <br /> {props.humidity}% </span>
                  </div>

                  <div className="col-12">
                    <span id="wind"> <i className="fas fa-wind"></i> Wind: <br /> {displaymph} </span>
                  </div>

                  <div className="col-12">
                    <span id="sunrise"> <i className="fas fa-sun"></i> <i className="fas fa-arrow-up"></i> Sunrise: <br /> {props.sunrise} </span>
                  </div>

                  <div className="col-12">
                    <span id="sunset"> <i className="fas fa-sun"></i> <i className="fas fa-arrow-down"></i> Sunset: <br /> {props.sunset} </span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ThreeHoursForecastOneDay
          city={props.city}
          unit={unit}
          lat={props.lat}
          lon={props.lon}
        />

<FiveDaysForecast lat={props.lat} lon={props.lon} unit={unit} />

      </div>
    );
  }
}