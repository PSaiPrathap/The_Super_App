import React from "react";
import "./WeatherWidget.css";

import { FaCloudShowersHeavy, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsThermometerHalf } from "react-icons/bs";

const WeatherWidget = () => {
  return (
    <div className="weather-card">

      <div className="weather-header">
        <h3>2-20-2023</h3>
        <h3>07:35 PM</h3>
      </div>

      <div className="weather-body">

        <div className="weather-left">
          <FaCloudShowersHeavy className="weather-icon" />
          <p>Heavy rain</p>
        </div>

        <div className="divider"></div>

        <div className="weather-center">
          <h1>24°C</h1>
        </div>

        <div className="divider"></div>

        <div className="weather-right">

          <div className="weather-info">
            <FaWind />
            <div>
              <small>3.7 km/h</small>
              <p>Wind</p>
            </div>
          </div>

          <div className="weather-info">
            <BsThermometerHalf />
            <div>
              <small>1010 mbar</small>
              <p>Pressure</p>
            </div>
          </div>

          <div className="weather-info">
            <WiHumidity />
            <div>
              <small>83%</small>
              <p>Humidity</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default WeatherWidget;