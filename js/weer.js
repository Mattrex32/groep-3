let weather = {
    apiKey: "3f86fd884115db21c8576e710de9bd6c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");


// van ochtend tot met avond  
// ochtend
$(document).ready(function() {
    function dateTime() {
      var ndate = new Date();
      var h = ndate.getHours() % 12;
      var format = h >= 12 ? 'PM' : 'AM';
      var m = ndate.getMinutes().toString();
      var s = ndate.getSeconds().toString();
  
      if (h < 12) {
        h = "0" + h;
        $("h3.day-message").html("Good Morning");
      } else if (h < 18) {
        $("h3.day-message").html("Good Afternoon");
      } else {
        $("h3.day-message").html("Good Evening");
      }
  
      if (s < 10) {
        s = "0" + s;
      }
  
      if (m < 10) {
        m = "0" + m;
      }
  
      $('.date').html(h + ":" + m + ":" + s + format);
    }
  
    setInterval(dateTime, 1000);
  });

// 