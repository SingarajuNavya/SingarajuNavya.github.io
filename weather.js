
// weather.js

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '272533ba3f9cd98218b65be8083b14a9';
    const searchBtn = document.getElementById('searchBtn');
  
    searchBtn.addEventListener('click', function() {
      const city = document.getElementById('location-select').value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      // Fetch weather data from the API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Update the HTML elements with weather information
          document.getElementById('location').textContent = data.name;
          document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
  
          // Update weather icon
          const weatherIcon = document.getElementById('weatherIcon');
          weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });
    });
  });
  
  