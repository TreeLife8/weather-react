import React, { useState } from "react";
import axios from "axios";

export default function WeeklyForcast(promps) {
  return (
    <div className="WeeklyForcast row">
      {props.forcast.map((forcast, index) => {
        <div className="col-2" key={index}></div>;
      })}
    </div>
  );
}
