let race1 = {
    x: [.37, .89, .66, .65, .56],
    y: ['White', 'Black', 'Latino', 'Asian', 'Other Race'],
    name: 'Clinton',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: "#000080",
      width: 1
    }
  };

let race2 = {
    x: [.57, .08, .28, .27, .36],
    y: ['White', 'Black', 'Latino', 'Asian', 'Other Race'],
    name: 'Trump',
    orientation: 'h',
    marker: {
      color: "#800000",
      width: 1
    },
    type: 'bar'
  };

  let race3 = {
    x: [.06, .03, .06, .08, .08],
    y: ['White', 'Black', 'Latino', 'Asian', 'Other Race'],
    name: 'Other/Unknown',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let race = [race1, race2, race3];
  
  let layoutRace = {
    title: 'Race',
    barmode: 'stack',
    height: 520,
    width: 1000,
    xaxis: {
        tickformat: ',.0%'
    }
  };
  Plotly.newPlot('bar3', race, layoutRace);