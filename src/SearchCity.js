import React, { useState } from "react";
import "./SearchCity.css";
import SpecificCities from "./SpecificCities";
import CurrentInfo from "./CurrentInfo";
import ChangeBackground from "./ChangeBackground";


import axios from "axios";

export default function SearchCity(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({});
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

  function convertDtToCurrentHour(dt) {
    let day = new Date(dt * 1000);
    let dayHour = day.getUTCHours();
    return dayHour;
  }


  function convertDtToCurrentDate(dt) {
    let dateFunc = new Date(dt * 1000); // to get the DateTime.

    let monthFunc = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let daysFunc = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let month = monthFunc[dateFunc.getUTCMonth()]; // It will give month index, and based on index we can get month name from the array.
    let day = daysFunc[dateFunc.getUTCDay()]; // It will give day index, and based on index we can get day name from the array.
    let date = dateFunc.getUTCDate();
    let hour = dateFunc.getUTCHours();
    if (hour < 10) {
      hour = `0${hour}`;
    } else {
      hour = `${hour}`;
    }
    let minutes = dateFunc.getUTCMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    } else {
      minutes = `${minutes}`;
    }
    let currentDateFunc = (
      <span>
        Last Updated: {month}, {date}.
        <br />
        {day}, {hour}:{minutes}
      </span>
    );
    return currentDateFunc;
  }

  function updteCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    SearchCityInfoCelsius(city);
  }

  function getApiLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayCityInfo);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getApiLocation);
  }

  function SearchCityInfoCelsius(place) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayCityInfo);
  }

  function displayCityInfo(response) {
    setWeather({
      date: convertDtToCurrentDate(response.data.dt + response.data.timezone),
      hour: convertDtToCurrentHour(response.data.dt + response.data.timezone),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      main: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      sunrise: convertDtToHours(
        response.data.sys.sunrise + response.data.timezone
      ),
      sunset: convertDtToHours(
        response.data.sys.sunset + response.data.timezone
      ),
      sunriseHour:convertDtToCurrentHour(
        response.data.sys.sunrise + response.data.timezone
      ),
      sunsetHour: convertDtToCurrentHour(
        response.data.sys.sunset + response.data.timezone
      ),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon
    });
    setLoaded(true);
  }

  //transform:"scale(2,4)",
  /*<video autoPlay loop muted 
     src="/Raindrops_Videvo.mp4" type="video/mp4"/>
     few clouds
     {weather.description} === "few clouds"
     if(){
<video autoPlay loop muted 
     src="/cloudy.mp4" type="video/mp4"/>
}
     
     */ 

  if (loaded)
    return (
      <div className="Weather-App"> 

<ChangeBackground description={weather.description}  main={weather.main} hour={weather.hour} sunriseHour={weather.sunriseHour}
          sunsetHour={weather.sunsetHour} />

<h1 className="HeaderMainTitle">Real Time - Weather Report</h1>

      <div className="row">
        <div className="col-1">
          <i className="fas fa-city"></i>
        </div>

        <div className="col-8">
          <form id="submit-city" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a City"
              id="enter-city"
              autoComplete="off"
              autoFocus="on"
              onChange={updteCity}
            />

            <input type="submit" value="Search" id="search-button" />
          </form>
        </div>

        <div className="col-sm-3 col-1">
          <i
            className="fas fa-street-view"
            id="location-button"
            onClick={getLocation}
          >
            {" "}
          </i>
        </div>

        <br />
        <br />

        <SpecificCities searchCity={SearchCityInfoCelsius} />
        <CurrentInfo
          city={weather.city}
          date={weather.date}
          hour={weather.hour}
          temperature={weather.temperature}
          description={weather.description}
          humidity={weather.humidity}
          wind={weather.wind}
          icon={weather.icon}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
          sunriseHour={weather.sunriseHour}
          sunsetHour={weather.sunsetHour}
          lat={weather.lat}
          lon={weather.lon}
        />
      </div>
     
      </div>
    );
  else {
    SearchCityInfoCelsius(city);
    return "";
  }
}
