import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import WeeklyForcast from "./WeeklyForcast";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  // const [timestamp, setTimestamp] = useState("");
  const [conditions, setConditions] = useState("");

  // function formatDay() {
  //   let time = new Date();
  //   let days = [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];
  //   setTimestamp({
  //     minutes: time.getMinutes,
  //     //  < 10 ? time.getMinutes : `0${time.getMinutes}`,
  //     hours: time.getHours,
  //     // < 10 ? time.getHours : `0${time.getHours}`,
  //     day: days[time.getDay],
  //   });
  //   // setDay(days[time.getDay]);
  //   console.log(time);
  // }
  displayForcast(`sydney`);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setCity(response.data.name);
    setConditions({
      wind: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.main.description,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
    console.log(response.data);
    // formatDay(response.data.main);
  }

  function displayForcast(city) {
    let apiKey = `2f5ed0987c11d8af0a71b4472673fde7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="Search">
              <form>
                <div className="row">
                  <div className="col-7 search">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Enter a city..."
                      autoFocus
                    ></input>
                  </div>
                  <div className="col-5 search">
                    <button
                      className="btn searchButton  btn-control"
                      value="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-2 search">
            <div className="CurrentLocation ">
              <button className="btn btn-control">Current</button>
            </div>
          </div>
          <div className="col-sm-3 search icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="current weather icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 TimeDate">
            Last updated:
            <div className="day">
              {/* {timestamp.day} */}
              <span className="time">
                {/* {timestamp.hours}:{timestamp.minutes} */}
              </span>
            </div>
            <div className="date">16 August 2021</div>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <div className="MaxMinTemps">
              <div className="maxTemp">Max Temp: {conditions.maxTemp}°C</div>
              <div className="minTemp">Min Temp: {conditions.minTemp}°C</div>
            </div>
          </div>
        </div>
        <div className="Forcast">
          <div className="cityName">{city}</div>
          <div className="forcastDescription">{conditions.description}</div>
          <div className="temperature">
            {temperature}°
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
                {conditions.humidity}%
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
                {conditions.feelsLike}°
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
                {conditions.wind} km/h
              </div>
            </label>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <WeeklyForcast />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="gitHubLink">
        <a href="https://github.com/TreeLife8/Banana-Weather-App-">
          Open-source code
        </a>
        , by Regina Maher
      </div>
    </div>
  );
}
