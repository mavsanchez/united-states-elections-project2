let trace1 = {
    x: [.41, .54],
    y: ['Male', 'Female'],
    name: 'Clinton %',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'blue',
      width: 1
    }
  };
  let trace2 = {
    x: [.52, .41],
    y: ['Male', 'Female'],
    name: 'Trump %',
    orientation: 'h',
    marker: {
      color: 'red',
      width: 1
    },
    type: 'bar'
  };

  let trace3 = {
    x: [.07, .05,],
    y: ['Male', 'Female'],
    name: 'Other/Unknown %',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'Grey',
      width: 1
    }
  };
  
  let gender = [trace1, trace2, trace3];

  let layout = {
    height: 350,
    width: 1000,
    title: 'Gender',
    barmode: 'stack',
    xaxis: {
        tickformat: ',.0%'
    }
  };
  
  Plotly.newPlot('bar', gender, layout);

