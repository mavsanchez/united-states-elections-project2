let education1 = {
    x: [.46, .43, .49, .58],
    y: ['High school or less', 'Some college', 'College graduate', 'Postgraduate'],
    name: 'Clinton',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: "#000080",
      width: 1
    }
  };

let education2 = {
    x: [.51, .51, .44, .37],
    y: ['High school or less', 'Some college', 'College graduate', 'Postgraduate'],
    name: 'Trump',
    orientation: 'h',
    marker: {
      color: "#800000",
      width: 1
    },
    type: 'bar'
  };

  let education3 = {
    x: [.03, .06, .07, .05],
    y: ['High school or less', 'Some college', 'College graduate', 'Postgraduate'],
    name: 'Other/Unknown',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let education = [education1, education2, education3];
  
  let layoutEducation = {
    title: 'Education',
    barmode: 'stack',
    height: 450,
    width: 1000,
    xaxis: {
        tickformat: ',.0%'
    }
  };
  Plotly.newPlot('bar4', education, layoutEducation);