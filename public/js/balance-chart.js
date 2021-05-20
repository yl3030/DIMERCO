var valueStatistics = $('#valueStatistics');
var vsChart = new Chart(valueStatistics, {
  type: 'line',
  data: {
    labels: ['2020/10', '2020/11', '2020/12', '2021/01', '2021/02', '2021/03'],
    datasets: [
      {
        label: '',
        data: [60, 40, 20, 30, 50, 22],
        backgroundColor: '#F39935',
        borderColor: '#F39935',
        borderWidth: 2,
      },
    ],
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
            return value + '人';
          },
        },
      },
    },
  },
});

var valueProportion = $('#valueProportion');
var vrChart = new Chart(valueProportion, {
  type: 'pie',
  data: {
    labels: ['基金', '現金', '股票'],
    datasets: [
      {
        data: [26, 37, 37],
        backgroundColor: ['#F9E3C9', '#EF922E', '#FFBD76'],
        borderWidth: 2,
      },
    ],
  },
});

// var proportionReport = $('#proportionReport');
// var vrChart = new Chart(proportionReport, {
//   type: 'scatter',
//   data: {
//     datasets: [
//       {
//         label: 'test',
//         data: [
//           {
//             x: 4.12,
//             y: 3.26,
//             name: '聯電',
//           },
//           {
//             x:7.33,
//             y:8.60,
//             name: '中油'
//           },
//           {
//             x:10.17,
//             y:4.12,
//             name: '大立光'
//           },
//           {
//               x:17.10,
//               y:2.30,
//               name: '台積電'
//           },
//           {
//               x:18.52,
//               y:5.4,
//               name: '中鋼'
//           },
//           {
//               x:18.80,
//               y:7.19,
//               name: '中菲'
//           },
//           {
//               x:23.76,
//               y:1.30,
//               name: '台泥'
//           }
//         ],
//         backgroundColor: ['#F9E3C9', '#EF922E', '#FFBD76'],
//         borderColor: ['#F9E3C9', '#EF922E', '#FFBD76'],
//         borderWidth: 2,
//         pointRadius: 5,
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       tooltip: {
//         callbacks: {
//           title(item) {
//             return item[0].raw.name;
//           },
//             label(item) {
//                 return `(${item.label}%, ${item.formattedValue}%)`;
//             }
//         },
//       },
//     },
//     scales: {
//       y: {
//         ticks: {
//             min: 1, 
//             stepSize: 2, 
//             steps: 1, 
//             stepValue: 1,
//           callback: function (value) {
//             return `${value}.00%`;
//           },
//         },
//       },
//       x: {
//         ticks: {
//             min: 1, 
//             stepSize: 2, 
//             steps: 1,  
//             stepValue: 1,
//           callback: function (value) {
//             return `${value}.00%`;
//           },
//         },
//       },
//     },
//   },
// });

