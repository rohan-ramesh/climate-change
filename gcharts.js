google.charts.load('current', {
  'packages': [
    'corechart',
    'table'
  ]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("date", "Year");
  data.addColumn("number", "Sea ice (million km\u00B2)"); // Superscript 2
  data.addRows([
    [new Date(1979, 8), 7.19],
    [new Date(1980, 8), 7.83],
    [new Date(1981, 8), 7.24],
    [new Date(1982, 8), 7.44],
    [new Date(1983, 8), 7.51],
    [new Date(1984, 8), 7.1],
    [new Date(1985, 8), 6.91],
    [new Date(1986, 8), 7.53],
    [new Date(1987, 8), 7.47],
    [new Date(1988, 8), 7.48],
    [new Date(1989, 8), 7.03],
    [new Date(1990, 8), 6.23],
    [new Date(1991, 8), 6.54],
    [new Date(1992, 8), 7.54],
    [new Date(1993, 8), 6.5],
    [new Date(1994, 8), 7.18],
    [new Date(1995, 8), 6.12],
    [new Date(1996, 8), 7.87],
    [new Date(1997, 8), 6.73],
    [new Date(1998, 8), 6.55],
    [new Date(1999, 8), 6.23],
    [new Date(2000, 8), 6.31],
    [new Date(2001, 8), 6.74],
    [new Date(2002, 8), 5.95],
    [new Date(2003, 8), 6.13],
    [new Date(2004, 8), 6.04],
    [new Date(2005, 8), 5.56],
    [new Date(2006, 8), 5.91],
    [new Date(2007, 8), 4.29],
    [new Date(2008, 8), 4.72],
    [new Date(2009, 8), 5.38],
    [new Date(2010, 8), 4.92],
    [new Date(2011, 8), 4.61],
    [new Date(2012, 8), 3.62],
    [new Date(2013, 8), 5.35],
    [new Date(2014, 8), 5.28],
    [new Date(2015, 8), 4.63],
    [new Date(2016, 8), 4.72]
  ]);
  // Would've formatted the x-axis too, but couldn't find anything for that
  // in the Google Charts API.
  var formatter = new google.visualization.DateFormat({
    pattern: 'MMMM yyyy'
  });
  formatter.format(data, 0);
  var chartOpt = {
    title: 'Sea ice per year',
    titleTextStyle: {
      color: 'white'
    },
    width: '100%',
    height: 500,
    backgroundColor: 'transparent',
    hAxis: {
      textStyle: {
        color: 'white'
      },
      title: 'Year',
      titleTextStyle: {
        color: 'white'
      }
    },
    vAxis: {
      textStyle: {
        color: 'white'
      },
      title: 'Sea ice (million km\u00B2)',
      titleTextStyle: {
        color: 'white'
      }
    },
    legend: {
      position: 'none'
    }
  };
  var tableOpt = {
    title: 'Sea ice per year',
    width: '100%',
    textStyle: {
      color: 'black'
    }
  };
  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );
  var table = new google.visualization.Table(
    document.getElementById("table_div")
  );
  chart.draw(data, chartOpt);
  table.draw(data, chartOpt);
}
