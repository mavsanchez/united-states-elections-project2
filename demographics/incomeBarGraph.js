let income1 = {
    x: [.53, .46, .47],
    y: ['Under $50k', '$50k-$100k', '$100k or more'],
    name: 'Clinton',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'blue',
      width: 1
    }
  };

let income2 = {
    x: [.41, .49, .47],
    y: ['Under $50k', '$50k-$100k', '$100k or more'],
    name: 'Trump',
    orientation: 'h',
    marker: {
      color: 'red',
      width: 1
    },
    type: 'bar'
  };

  let income3 = {
    x: [.06, .05, .06],
    y: ['Under $50k', '$50k-$100k', '$100k or more'],
    name: 'Other/Unknown',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let income = [income1, income2, income3];
  
  let layoutIncome = {
    title: 'Income',
    barmode: 'stack',
    height: 400,
    width: 1000,
    xaxis: {
        tickformat: ',.0%'
    }
  };
  Plotly.newPlot('bar5', income, layoutIncome);