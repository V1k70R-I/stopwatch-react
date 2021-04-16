import React, { useState } from "react";
import DisplayComponent from "./Components/DisplayComponent";
import BtnComponent from "./Components/BtnComponent";
import "./App.css";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  // Not started = 0
  // started (after "Start" click) = 1
  // stopped (after "Stop" click) = 2
  // paused (after "Wait" click) = 3

  let updateS = time.s,
    updateM = time.m,
    updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    updateS++;
    return setTime({ s: updateS, m: updateM, h: updateH });
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
    console.log("Start of the countdown.");
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    console.log(`End of countdown.\nTime on the stopwatch - ${updateH} hours ${updateM} minutes ${updateS} seconds`);
  };

  let clickCount = 0

  const wait = () => {
    clickCount++;
    setTimeout(() => {
        if (clickCount === 2) {
          clearInterval(interv);
          setStatus(3); 
          console.log(`Timeout pause.\nTime on the stopwatch - ${updateH} hours ${updateM} minutes ${updateS} seconds`); 
        } 
        clickCount = 0;
    }, 300)
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
    console.log(`Reseted stopwatch.\nTime on the stopwatch - 0 hours 0 minutes 0 seconds`);
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent status={status} start={start} stop={stop} wait={wait} reset={reset}/>
        </div>
      </div>
    </div>
  );
}

export default App;
