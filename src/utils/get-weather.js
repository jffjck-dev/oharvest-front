export async function getWeatherReport() {
    const position = {lat: 48.5771821, lon: 7.7488522};
    const apiKey = import.meta.env.VITE_WEATHER_API_TOKEN;
    const url = import.meta.env.VITE_WEATHER_API_URL;
    const weatherAPIUrl = `${url}?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}`;

    try {
        const response = await fetch(weatherAPIUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        return data.weather[0];
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}