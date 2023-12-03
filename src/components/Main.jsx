import React from 'react';
import './Main.css';
import Chart from 'react-apexcharts';

import StarRating from './StarRating';

function Main() {
  const options = {
    chart: {
      id: 'apexchart-example',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    colors: ['#ffc007'],
    grid: {
      show: true,
      borderColor: '#ebebeb',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['0', '10', '20', '30', '40'],
      labels: {
        style: {
          colors: ['#000000'], // alterado para um array de cores
        },
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    fill: {
      type: 'solid',
      colors: ['#ffc007']
    },
    tooltip: {
      enabled: false
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [36, 20, 15, 10, 20, 2]
    }
  ];

  return (
    <div className="container-main">
      <div className="title">
        <h2>99 Avaliações</h2>
      </div>
      <div className="avaliacoes">
        <div className="info-avaliacoes">
          <StarRating />
        </div>
      </div>
      <div className="graphic">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={700}
          height={320}
        />
      </div>
    </div>
  );
}

export default Main;