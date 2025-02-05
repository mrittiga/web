const apiKey = 'f11bb4c14d81ec02c4eefc12794c6b8e'; // Replace with your OpenWeather API key

document.getElementById('searchButton').addEventListener('click', function() {
    const cities = document.getElementById('cityInput').value.split(',').map(city => city.trim());
    fetchWeatherForCities(cities);
});

function fetchWeatherForCities(cities) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = ''; // Clear previous results

    cities.forEach(city => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`City not found: ${city}`);
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                weatherResult.innerHTML += `<p>${error.message}</p>`;
            });
    });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherCondition = data.weather[0].description;

    weatherResult.innerHTML += `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Humidity: ${humidity} %</p>
            <p>Condition: ${weatherCondition}</p>
        </div>
    `;
}