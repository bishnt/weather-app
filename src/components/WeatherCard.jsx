import React from "react";
import "./WeatherCard.css";

export default function WeatherCard({ data }) {
  const { name, main, weather } = data;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weather[0].description}</p>
    </div>
  );
}
