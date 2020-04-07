let gender1 = {
    x: [52, 41],
    y: ['Male', 'Female'],
    name: 'Trump Percent',
    orientation: 'h',
    marker: {
      color: 'red',
      width: 1
    },
    type: 'bar'
  };
  
  let gender2 = {
    x: [41, 54],
    y: ['Male', 'Female'],
    name: 'Clinton Percent',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'blue',
      width: 1
    }
  };

  let gender3 = {
    x: [7, 5,],
    y: ['Male', 'Female'],
    name: 'Other/Unknown Percent',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let data1 = [gender1, gender2, gender3];

  let layoutGender = {
    title: 'Gender',
    barmode: 'stack'
  };
  
  let gender = Plotly.newPlot('myDiv', data1, layoutGender);

let age1 = {
    x: [34, 38, 39, 49, 52, 52],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Trump Percent',
    orientation: 'h',
    marker: {
      color: 'red',
      width: 1
    },
    type: 'bar'
  };
  
  let age2 = {
    x: [56, 54, 51, 46, 44, 45],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Clinton Percent',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'blue',
      width: 1
    }
  };

  let age3 = {
    x: [10, 8, 10, 5, 4, 3],
    y: ['18-24', '25-29', '30-39', '40-49', '50-64', '65 and older'],
    name: 'Other/Unknown Percent',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'grey',
      width: 1
    }
  };
  
  let data2 = [age1, age2, age3];
  
  let layoutAge = {
    title: 'Age Range',
    barmode: 'stack'
  };
  
  let age = Plotly.newPlot('myDiv', data2, layout);