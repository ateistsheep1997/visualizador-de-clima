// Constante que contiene la URL de la API de clima
const API_URL = 'https://api.open-meteo.com/v1/forecast?';

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    // Aquí iría la lógica para llamar a la API y procesar los datos
    console.log(`Fetching weather data for ${city}`);
    // Ejemplo de llamada con axios
    // Se corrige el parámetro de consulta para la ciudad
    axios.get(`${API_URL}city=${city}&hourly=temperature_2m`)  // Se agregó un parámetro adicional para la API
        .then(response => {
            console.log(response.data);
            // Procesar y mostrar datos en gráficos
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });
}