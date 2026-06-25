import React from "react";
import{ useNavigate } from "react-router-dom";

import "./index.css";

import WeatherWidget from "../../components/WeatherWidget";
import NotesWidget from "../../components/NotesWidget";
import NewsWidget from "../../components/NewsWidget";
import TimerWidget from "../../components/TimerWidget";


const Dashboard = () => {
    const navigate = useNavigate();

    const handleBrowse = () => {
        navigate("/movies");
    };


  return (
    <div className="dashboard">

      <div className="dash-left-section">

        <div className="top-row">

          <div className="profile-card">
            <div className="profile-top">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbhDRXfLP1DEyfzmNPpnLawFK4d00AsgWiOId_Y9-PvPfS8nQv8GUZtxj&s=10"
                alt="profile"
              />

              <div>
                <p>SAI PRATHAP P</p>
                <p>sai01@gmail.com</p>

                <h1>Saiprathap01</h1>

                <div className="chips">
                  <span>Horror</span>
                  <span>Thriller</span>
                  <span>Action</span>
                  <span>Fantasy</span>
                </div>

              </div>

            </div>
          </div>

          <NotesWidget />

        </div>

        <WeatherWidget />

        <TimerWidget />

      </div>

      <div className="right-section">
        <NewsWidget />

        <button className="browse-btn" onClick={handleBrowse}>
          Browse
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
