import React from "react";
import "./App.css";

export default function Forcast() {
  return (
    <div className="Forcast">
      <div className="cityName">SYDNEY</div>
      <div className="forcastDescription">Clear Skys</div>
      <div className="temperature">
        22°
        <span className="unit">
          <a className=" celcius" href="/">
            C
          </a>
          {""}|{""}
          <a className="active fehren" href="/">
            F
          </a>
        </span>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
        />
        <label className="btn btn-outline-secondary" for="btnradio1">
          HUMIDITY
          <div className="humidity" id="humidity">
            58%
          </div>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
        />
        <label className="btn btn-outline-secondary" for="btnradio2">
          FEELS LIKE
          <div className="feelsLike" id="feels-like">
            12°
          </div>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
        />
        <label className="btn btn-outline-secondary" for="btnradio3">
          WINDSPEED
          <div className="windspeed" id="windspeed">
            1.2 km/h
          </div>
        </label>
      </div>
    </div>
  );
}
