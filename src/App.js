import "./App.css";
import React, { useState } from "react";
import axios from "axios";
// import WeeklyForcast from "./WeeklyForcast";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function App() {
  const [timestamp, setTimestamp] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("sydney");
  // const [forcast, setForcast] = useState("");

  function formatDay(timeStamp) {
    let time = new Date(timeStamp);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    setTimestamp({
      minutes:
        time.getMinutes() > 10 ? time.getMinutes() : `0${time.getMinutes()}`,
      hours: time.getHours() > 10 ? time.getHours() : `0${time.getHours()}`,
      day: days[time.getDay()],
      date: time.getDate(),
      month: months[time.getMonth()],
      year: time.getFullYear(),
    });
  }

  function handleResponse(response) {
    setCity(response.data.name);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      description: response.data.weather.description,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
    });
    setLoading(true);
    // console.log(response.data);
    formatDay(response.data.dt * 1000);
  }
  // function handleForcastResponse(response) {
  //   setForcast({
  //     maxTemp: Math.round(response.data.list[0])
  //   });
  //   console.log(response.data);
  // }
  function handleSubmit(event) {
    event.preventDefault();
    searchWeather(city);
  }
  function searchWeather(city) {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (loading) {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="Search">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-7 search">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Enter a city..."
                        autoFocus
                        onChange={changeCity}
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
                {timestamp.day}
                <span className="time">
                  {" "}
                  {timestamp.hours}:{timestamp.minutes}
                </span>
              </div>
              <div className="date">
                {timestamp.date} {timestamp.month} {timestamp.year}
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-4">
              <div className="MaxMinTemps">
                <div className="maxTemp">Max Temp: {weather.maxTemp}°C</div>
                <div className="minTemp">Min Temp: {weather.minTemp}°C</div>
              </div>
            </div>
          </div>
          <div className="Forcast">
            <div className="cityName">{city}</div>
            <div className="forcastDescription">{weather.description}</div>
            <div className="temperature">
              {weather.temperature}°
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
                  {weather.humidity}%
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
                  {weather.feelsLike}°
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
                  {weather.wind} km/h
                </div>
              </label>
            </div>
          </div>
          <hr />
          <div className="row">
            {/* <WeeklyForcast city={city} loaded={true} /> */}
            <div className="col-2  ps-4">
              <span className="maxTemp forcast">25°</span>
              <span className="minTemp forcast">20°</span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="current weather icon"
              />
              <div className="forcastDay">Tue</div>
            </div>
            <div className="col-2  ps-4">
              <span className="maxTemp forcast">25°</span>
              <span className="minTemp forcast">20°</span>
              <img
                className="forcastIcon"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="current weather icon"
              />
              <div className="forcastDay">Wed</div>
            </div>
            <div className="col-2  ps-4">
              <span className="maxTemp forcast">25°</span>
              <span className="minTemp forcast">20°</span>
              <img
                className="forcastIcon"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="current weather icon"
              />
              <div className="forcastDay">Thu</div>
            </div>
            <div className="col-2  ps-4">
              <span className="maxTemp forcast">25°</span>
              <span className="minTemp forcast">20°</span>
              <img
                className="forcastIcon"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="current weather icon"
              />
              <div className="forcastDay">Fri</div>
            </div>
            <div className="col-2  ps-4">
              <span className="maxTemp forcast">25°</span>
              <span className="minTemp forcast">20°</span>
              <img
                className="forcastIcon"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="current weather icon"
              />
              <div className="forcastDay">Sat</div>
            </div>
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
  } else {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // let apiForcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    // axios.get(apiForcastUrl).then(handleForcastResponse);
    return (
      <div className="container row">
        <div className="col-5"></div>
        <div className="col-4">
          <Loader
            type="Puff"
            color="#757a79"
            height={200}
            width={200}
            timeout={4000}
          />
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}
