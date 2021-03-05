import React from "react";
import "./GitHubLink.css";

export default function GitHubLink() {
  return (
    <div>
      <span id="link-github">
        {" "}
        <a
          href="https://github.com/MariAuxiHer/weather-app-react-maria-a-hernandez-r"
          rel="noreferrer"
          target="_blank"
        >
          Open source-code
        </a>{" "}

        <span className="name-maria">by <strong> Maria Hernandez</strong></span>
        
      </span>
    </div>
  );
}