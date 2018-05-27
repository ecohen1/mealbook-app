import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

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
  },
  addButton: {
    marginLeft: '90%'
  },
};

class TestGraphs extends React.Component {
  state = {
  };

  componentDidMount() {
    var ctx1 = document.getElementById("metric1-graph");
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ["5/9", "5/10", "5/11", "5/12", "5/13", "5/14"],
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

    var ctx2 = document.getElementById("metric2-graph");
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["5/9", "5/10", "5/11", "5/12", "5/13", "5/14"],
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

    var ctx3 = document.getElementById("metric3-graph");
    var myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ["5/9", "5/10", "5/11", "5/12", "5/13", "5/14"],
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
          <Button variant="fab" color="primary" aria-label="add" style={styles.addButton}>
          <AddIcon />
          </Button>
        </section>

        <Divider />

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
          <Button variant="fab" color="primary" aria-label="add" style={styles.addButton}>
          <AddIcon />
          </Button>
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
          <Button variant="fab" color="primary" aria-label="add" style={styles.addButton}>
          <AddIcon />
          </Button>
        </section>
      </div>
    )
  }
}

export default TestGraphs;
