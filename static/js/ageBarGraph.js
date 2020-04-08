let age1 = {
    x: [0.56, 0.54, 0.51, 0.46, 0.44, 0.45],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Clinton',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: "#000080",
      width: 1
    }
  };

let age2 = {
    x: [0.34, 0.38, 0.39, 0.49, 0.52, 0.52],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Trump',
    orientation: 'h',
    marker: {
      color: "#800000",
      width: 1
    },
    type: 'bar'
  };

  let age3 = {
    x: [0.10, 0.08, 0.10, 0.05, 0.04, 0.03],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Other/Unknown',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let age = [age1, age2, age3];
  
  let layoutAge = {
    title: 'Age Range',
    barmode: 'stack',
    height: 600,
    width: 1000,
    xaxis: {
        tickformat: ',.0%'
    }
  };
  Plotly.newPlot('bar2', age, layoutAge);