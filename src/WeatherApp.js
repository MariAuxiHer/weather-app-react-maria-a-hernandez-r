import React from "react";
import SearchCity from "./SearchCity";
import GitHubLink from "./GitHubLink.js";

import './WeatherApp.css';

function WeatherApp() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <h1 className="HeaderMainTitle">Real Time - Weather Report</h1>

        <SearchCity defaultCity="caracas" />
        <span id="Weather-app">Weather-App</span>
      </div>
      <GitHubLink />
    </div>
  );
}

export default WeatherApp;
