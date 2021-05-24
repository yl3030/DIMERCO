var peopleLength = $("#peopleLength");
var plChart = new Chart(peopleLength, {
    type: 'bar',
    // x、y軸資料、顏色
    data: {
        labels: ['不到1年', '1年~2年', '2年~3年', '3年~4年', '4年~5年', '5年以上'],
        datasets: [{
            data: [60, 40, 20, 30, 50, 22],
            backgroundColor: "#6F9FEE",
            borderColor: "#6F9FEE",
        }]
    },
    options: {
        animation: false,
        scales: {
            y: {
                // 最大值、最小值、間隔大小、回傳值
                beginAtZero: true,
                ticks: {
                    min: 0,
                    max: 60,
                    stepSize: 30,
                    callback: function (value) {
                        return value + "人";
                    },
                },
                // 無網格
                grid: {
                    display: false,
                  },
            },
            x: {
                // 無網格
                grid: {
                  display: false,
                },
              },
        }
    }
});