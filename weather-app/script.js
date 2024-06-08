document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
document.getElementById("getWeatherBtn").addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        getWeather;
    }
});

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("City Not Found");
        }
        const data = await response.json();
        displayWeather(data)
    } catch (e) {
        document.getElementById("weatherResult").innerHTML = `<p>${e.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherResult = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherResult;
}