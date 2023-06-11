document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY';
    const city = 'CITY_NAME';
    const apiUrl = `https://beingzero-mern-bootcamp.cyclic.app/weather-3https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=eb7a2d4a5a9b284fe54b7bb547238443&units=metric`;
  
    // Fetch weather data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Update the HTML elements with weather information
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  });
  
  