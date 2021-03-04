import React from "react";
import SearchCity from "./SearchCity";
import GitHubLink from "./GitHubLink.js";

import './WeatherApp.css';

function WeatherApp() {

  return (
    <div className="container">
     
      <div className="WeatherApp">
    
        <SearchCity defaultCity="caracas" />
  
      </div>
      <GitHubLink />
    </div>
  );
}

export default WeatherApp;
