import "./styles.css";
import React from "react";
import { useBattery } from "react-use";

export default function App() {
  const battery = useBattery();
  console.log(battery);
  const { isSupported, fetched, level, charging, dischargingTime } = battery;

  return (
    <div>
      {/* {/* <div className="App"> */}
      <div> batterylevel= {isSupported}</div>
      <div> battery support={fetched}</div>
      <div> batteryfetched={level}</div>
      <div> batterycharging={charging}</div>
      <div> batterydischarging={dischargingTime}</div>
    </div>
  );
}
