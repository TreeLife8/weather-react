import React from "react";
import "./App.css";
import axios from "axios";

export default function Search() {
  displayForcast(`sydney`);

  function handleResponse(response) {
    // alert(`it is ${Math.round(response.data.main.temp)}`);
  }

  function displayForcast(city) {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
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
            <button className="btn searchButton  btn-control" value="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
