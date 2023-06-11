document.addEventListener('DOMContentLoaded', function() {
    // Fetch weather data from the provided link
    fetch('https://beingzero-mern-bootcamp.cyclic.app/weather-3https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=eb7a2d4a5a9b284fe54b7bb547238443&units=metric')
      .then(response => response.json())
      .then(data => {
        // Update the HTML elements with weather information
        document.getElementById('location').textContent = data.location;
        document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
        document.getElementById('description').textContent = `Description: ${data.description}`;
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  });
  