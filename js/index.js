function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }

var stars = [70.78, 96, 78, 73.75, 89, 70.78, 96, 66, 78.75, 70, 72, 68, 78.98, 73.75, 89.98];
var frameworks = ['1', '2', '3', '4', '5', "6", '7', '8', '9', '10', '11', '12', '13', "14", '15']; 

var ctx = document.getElementById('myChart');

Chart.defaults.font.size = 10;
var myChart = new Chart(ctx, { 
 type: 'line',
 data: {
    labels: frameworks, 
        font: {
            size: 10
        },
    datasets: [{
        label: 'Warmte water gebruik',
        data: stars, 

        borderRadius: [
            30,
        ],

        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)" 
        ], 

        borderColor: [
            "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,  
        
    }]
 }
})