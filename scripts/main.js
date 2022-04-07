google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawEnglishChat);
google.charts.setOnLoadCallback(drwaFrench);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Language', 'Knowlage'],
    ['Spanish',     100],
    ['',     1],

  ]);

  var options = {
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none',
    slices: {
        0: { color: 'white' },
        1: { color: 'transparent' }
      },
      backgroundColor: 'none',
      chartArea:{left:0,top:0,bottom:0,width:'100%',height:'100%'}
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}
function drawEnglishChat(){
    var  englishData = google.visualization.arrayToDataTable([
        ['Language', 'Knowlage'],
        ['English',     85],
        ['',     15],
      ]) ;
      var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: 'black',
        },
        legend: 'none',
        slices: {
            0: { color: 'white' },
            1: { color: 'transparent' }
          },
          backgroundColor: 'none',
      chartArea:{left:0,top:0,bottom:0,width:'100%',height:'100%'}

      };
      var chart = new google.visualization.PieChart(document.getElementById('donut_eng'));
      chart.draw(englishData, options);
}

function drwaFrench(){
    var  englishData = google.visualization.arrayToDataTable([
        ['Language', 'Knowlage'],
        ['French',     50], 
        ['',     50],
      ]) ;
      var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
          color: 'black',
        },
        legend: 'none',
        slices: {
            0: { color: 'white'},
            1: { color: 'transparent' }
          },
          backgroundColor: 'none',
      chartArea:{left:0,top:0,bottom:0,width:'100%',height:'100%'}

      };
      var chart = new google.visualization.PieChart(document.getElementById('donut_fre'));
      chart.draw(englishData, options);
}
