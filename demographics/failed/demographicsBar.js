function init() {
    let chartData = [{
        values: gender,
        labels: Object.keys(data.gender),
        type: "bar"
    }];

    let layout = {
        height: 600,
        width: 800,
        barmode: 'stack'
    };

    Plotly.newPlot('bar', chartData, layout);
}

function getData(value){
    let data = gender;

    if (value === 'age') {
        data = age;
    } else if (value === 'education') {
        data = education;
    } else if (value === 'income') {
        data = income;
    }
    Plotly.restyle('bar', 'values', [data]);
}

init();

