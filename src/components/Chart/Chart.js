import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  let valueArray = props.dataPoints.map((item) => item.value);
  const maxChartValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxChartValue}
        />
      ))}
    </div>
  );
}

export default Chart;
