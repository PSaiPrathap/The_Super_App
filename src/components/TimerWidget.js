import React, { useEffect, useState } from "react";
import "./TimerWidget.css";

const TimerWidget = () => {
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          setRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, hours, minutes, seconds]);

  const increase = (type) => {
    if (type === "hours") setHours(hours + 1);
    if (type === "minutes") setMinutes(minutes + 1);
    if (type === "seconds") setSeconds(seconds + 1);
  };

  const decrease = (type) => {
    if (type === "hours" && hours > 0) setHours(hours - 1);
    if (type === "minutes" && minutes > 0) setMinutes(minutes - 1);
    if (type === "seconds" && seconds > 0) setSeconds(seconds - 1);
  };

  return (
    <div className="timer-card">

      <div className="circle-wrapper">

        <div className="circle">
          <span>
            {String(hours).padStart(2, "0")}:
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
        </div>

      </div>

      <div className="timer-controls">

        <div className="time-box">
          <p>Hours</p>
          <button onClick={() => increase("hours")}>▲</button>
          <h1>{String(hours).padStart(2, "0")}</h1>
          <button onClick={() => decrease("hours")}>▼</button>
        </div>

        <div className="colon">:</div>

        <div className="time-box">
          <p>Minutes</p>
          <button onClick={() => increase("minutes")}>▲</button>
          <h1>{String(minutes).padStart(2, "0")}</h1>
          <button onClick={() => decrease("minutes")}>▼</button>
        </div>

        <div className="colon">:</div>

        <div className="time-box">
          <p>Seconds</p>
          <button onClick={() => increase("seconds")}>▲</button>
          <h1>{String(seconds).padStart(2, "0")}</h1>
          <button onClick={() => decrease("seconds")}>▼</button>
        </div>

      </div>

      <button
        className="start-btn"
        onClick={() => setRunning(!running)}
      >
        {running ? "Pause" : "Start"}
      </button>

    </div>
  );
};

export default TimerWidget;