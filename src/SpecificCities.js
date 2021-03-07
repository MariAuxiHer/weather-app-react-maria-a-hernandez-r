import React from "react";
import "./SpecificCities.css";

export default function SpecificCities(props) {
  function handleClickCaracas(event) {
    event.preventDefault();
    props.searchCity("Caracas");
  }

  function handleClickNashville(event) {
    event.preventDefault();
    props.searchCity("Nashville");
  }

  function handleClickNairobi(event) {
    event.preventDefault();
    props.searchCity("Nairobi");
  }

  function handleClickTokyo(event) {
    event.preventDefault();
    props.searchCity("Tokyo");
  }

  function handleClickMadrid(event) {
    event.preventDefault();
    props.searchCity("Madrid");
  }

  function handleClickFiji(event) {
    event.preventDefault();
    props.searchCity("Fiji");
  }

  return (
    <div className="container">
      <div className="row extra-space">
        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Caracas"
            value="Caracas"
            onClick={handleClickCaracas}
          >
            {" "}
            Caracas{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            type="button"
            className="city-per-continent-buttons"
            id="Nashville"
            value="Nashville"
            onClick={handleClickNashville}
          >
            {" "}
            Nashville{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Nairobi"
            onClick={handleClickNairobi}
          >
            {" "}
            Nairobi{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Tokyo"
            onClick={handleClickTokyo}
          >
            {" "}
            Tokyo{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Madrid"
            onClick={handleClickMadrid}
          >
            {" "}
            Madrid{" "}
          </button>
        </div>

        <div className="col-xl-2 col-lg-4 col-md-4 col-4">
          <button
            className="city-per-continent-buttons"
            id="Fiji"
            onClick={handleClickFiji}
          >
            {" "}
            Fiji{" "}
          </button>
        </div>
      </div>
    </div>
  );
}