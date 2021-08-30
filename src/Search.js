import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Search() {
  displayForcast(`sydney`);

  function handleResponse(response) {
    alert(`it is ${Math.round(response.data.main.temp)}`);
  }

  function displayForcast(city) {
    let apiKey = `3fb188379e6ffcf616e7cdbd010c6434`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
