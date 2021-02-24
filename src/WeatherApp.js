import React from "react";

import GitHubLink from "./GitHubLink.js";

import './WeatherApp.css';

function WeatherApp() {
  return (
    <div className="container">
      <div className="WeatherApp">
        <h1 className="HeaderMainTitle">Real Time - Weather Report</h1>


        <span id="Weather-app">Weather-App</span>
      </div>
      <GitHubLink />
    </div>
  );
}

export default WeatherApp;
