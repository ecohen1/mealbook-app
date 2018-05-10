import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

import Chart from 'chart.js'

const styles = {
  container: {
      display: 'block',
      fontFamily: 'sans-serif',
      maxWidth: '1000px',
      margin: 'auto'
  },
  metricArea: {
      display: 'block',
      margin: '1rem',
      padding: '0rem 1rem 1rem 1rem',
      /* outline: 1px solid red; */
      border: '1px  rgba(0, 0, 0, 1) solid',
      backgroundColor: 'rgba(207, 218, 255, .1)'
  },
  // metricAreaImg: {
      // width: '24px',
      // height: '24px',
      // marginLeft: '10px',
      // marginTop: '4.5px',
  // },
  row1: {
      display: 'flex',
      justifyContent: 'space-between',
  },
  row1Div: {
      margin: '19.2px',
      display: 'flex',
      justifyContent: 'flex-end',
  },
  number: {
      fontSize: '2rem',
  },
  chartContainer: {
      width: '100%',
      height: '11rem',
      position: 'relative',
  },
  chartContainerCanvas: {
      // height: '100px',
      height: '100%',
      width: '100%'
  },
  deltaPos: {
      content: 'url("up.png")',
      width: '24px',
      height: '24px',
      marginLeft: '10px',
      marginTop: '4.5px',
  },
  deltaNeg: {
      content: 'url("down.png")',
      width: '24px',
      height: '24px',
      marginLeft: '10px',
      marginTop: '4.5px',
  }
};

class TestGraphs extends React.Component {
  state = {
  };

  componentDidMount() {
    var ctx = document.getElementById("metric1-graph");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["5/2", "5/3", "5/4", "5/5", "5/6", "5/7"],
            datasets: [{
                data: [110, 109, 110, 109, 109, 108],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(255, 159, 64, 0.1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            legend: {
                display: false
            }
        }
    });

    var ctx = document.getElementById("metric2-graph");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["5/2", "5/3", "5/4", "5/5", "5/6", "5/7"],
            datasets: [{
                data: [140, 145, 142, 137, 140, 134],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(255, 159, 64, 0.1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            legend: {
                display: false
            }
        }
    });

    var ctx = document.getElementById("metric3-graph");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["5/2", "5/3", "5/4", "5/5", "5/6", "5/7"],
            datasets: [{
                data: [175, 174, 174, 174.5, 173.5, 173],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.1)',
                    'rgba(255, 206, 86, 0.1)',
                    'rgba(75, 192, 192, 0.1)',
                    'rgba(153, 102, 255, 0.1)',
                    'rgba(255, 159, 64, 0.1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            title: {
                display: false
            },
            legend: {
                display: false
            }
        }
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <section style={styles.metricArea} id="metric3">
            <div style={styles.row1}>
                <h1 className="title">Weight</h1>
                <div style={styles.row1Div}>
                    <span style={styles.number}> 173 lbs </span>
                    <img style={styles.deltaNeg} alt="triangle" />
                </div>
            </div>
            <div style={styles.chartContainer}>
                <canvas style={styles.chartContainerCanvas} id="metric3-graph"></canvas>
            </div>
        </section>
        <section style={styles.metricArea} id="metric1">
            <div style={styles.row1}>
                <h1 className="title">Fasting Blood Sugar</h1>
                <div style={styles.row1Div}>
                    <span style={styles.number}> 108 mg/dL </span>
                    <img style={styles.deltaNeg} alt="triangle" />
                </div>
            </div>
            <div style={styles.chartContainer}>
                <canvas style={styles.chartContainerCanvas} id="metric1-graph"></canvas>
            </div>
        </section>
        <section style={styles.metricArea} id="metric2">
            <div style={styles.row1}>
                <h1 className="title">Daily Average Blood Sugar</h1>
                <div style={styles.row1Div}>
                    <span style={styles.number}> 134 mg/dL </span>
                    <img style={styles.deltaNeg} alt="triangle" />
                </div>
            </div>
            <div style={styles.chartContainer}>
                <canvas style={styles.chartContainerCanvas} id="metric2-graph"></canvas>
            </div>
        </section>
      </div>
    )
  }
}

export default TestGraphs;
