var valueStatistics = $("#valueStatistics");
var vsChart = new Chart(valueStatistics, {
    type: 'line',
    data: {
        labels: ['2020/10', '2020/11', '2020/12', '2021/01', '2021/02', '2021/03'],
        datasets: [{
            label: '',
            data: [60, 40, 20, 30, 50, 22],
            backgroundColor: "#F39935",
            borderColor: "#F39935",
            borderWidth: 2,
        }]
    },
    options: {
        legend: {
			display: false,
		},
        scales: {
            y: {
                // beginAtZero: true,
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

var valueProportion = $("#valueProportion");
var vrChart = new Chart(valueProportion, {
    type: 'pie',
    data: {
        labels: ['基金', '現金', '股票'],
        datasets: [{
            // label: false,
            data: [26, 37, 37],
            backgroundColor: ["#F9E3C9","#EF922E","#FFBD76"],
            // borderColor: "#F39935",
            borderWidth: 2,
        }]
    },
});

var proportionReport = $("#proportionReport");
var vrChart = new Chart(proportionReport, {
    type: 'scatter',
    data: {
        labels: ['0.00', '5.00', '10.00','15.00','20.00','25.00'],
        datasets: [{
            // label: false,
            data: [
                {
                    x:4.32,
                    y:3.26
                },
                {
                    x:7.33,
                    y:8.60
                },
                {
                    x:10.17,
                    y:4.12
                },
                {
                    x:17.10,
                    y:2.30
                },
                {
                    x:18.52,
                    y:5.4
                },
                {
                    x:18.80,
                    y:7.19
                },
                {
                    x:23.76,
                    y:1.30
                }
            ],
            backgroundColor: ["#F9E3C9","#EF922E","#FFBD76"],
            // borderColor: "#F39935",
            borderWidth: 2,
        }]
    },
});