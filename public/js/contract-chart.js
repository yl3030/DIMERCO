var peopleNum = $("#peopleNum");
var pnChart = new Chart(peopleNum, {
    type: 'line',
    data: {
        labels: ['2020/10', '2020/11', '2020/12', '2021/01', '2021/02', '2021/03'],
        datasets: [{
            // label: false,
            data: [60, 40, 20, 30, 50, 22],
            backgroundColor: "#6F9FEE",
            borderColor: "#6F9FEE",
            borderWidth: 2,
        }]
    },
    options: {
        legend: {
			display: false,
		},
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    min: 0,
                    max: 60,
                    stepSize: 30,
                    callback: function (value) {
                        return value + "人";
                    },
                },
            },
        }
    }
});

var peopleNum = $("#peopleLength");
var plChart = new Chart(peopleLength, {
    type: 'bar',
    data: {
        labels: ['不到1年', '1年~2年', '2年~3年', '3年~4年', '4年~5年', '5年以上'],
        datasets: [{
            // label: '# of Votes',
            data: [60, 40, 20, 30, 50, 22],
            backgroundColor: "#6F9FEE",
            borderColor: "#6F9FEE",
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    min: 0,
                    max: 60,
                    stepSize: 30,
                    callback: function (value) {
                        return value + "人";
                    },
                },
            }
        }
    }
});

var valueStatistics = $("#valueStatistics");
var vsChart = new Chart(valueStatistics, {
    type: 'line',
    data: {
        labels: ['2020/10', '2020/11', '2020/12', '2021/01', '2021/02', '2021/03'],
        datasets: [{
            // label: false,
            data: [60, 40, 20, 30, 50, 22],
            backgroundColor: "F19A34",
            borderColor: "F19A34",
            borderWidth: 2,
        }]
    },
    options: {
        legend: {
			display: false,
		},
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    min: 20,
                    max: 60,
                    stepSize: 20,
                    callback: function (value) {
                        return value + "人";
                    },
                },
            },
        }
    }
});