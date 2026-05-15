const left = document.querySelector('.left');
        const right = document.querySelector('.right');
        // const lower = document.querySelector('.lower');

        const weatherData = {
            location: "New York",
            temperature: 25,
            condition: "Sunny",
            humidity: 60,
            windSpeed: "15 Km/h"
        };

        left.innerHTML = `<h1>${weatherData.location}</h1><h2>${weatherData.temperature}°C</h2>`;
        right.innerHTML = `<p>condition: ${weatherData.condition}</p><p>Humidity: ${weatherData.humidity}%</p><p>Wind Speed: ${weatherData.windSpeed}</p>`;
        // lower.innerHTML = `<p>Humidity: ${weatherData.humidity}%</p><p>Wind Speed: ${weatherData.windSpeed}</p>`;