import React from "react";
import "./ChartBar.css";
import "./Chart.css";
import CharBar from "./ChartBar";

export default function Chart(props) {
  const dataPointValue = props.dataPoints.map((item) => item.value);
  const maxDataValue = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <CharBar
          key={data.label}
          value={data.value}
          maxValue={maxDataValue}
          label={data.label}
        />
      ))}
    </div>
  );
}
