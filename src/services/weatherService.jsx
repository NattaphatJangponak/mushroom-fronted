import axios from 'axios';

const getWeatherData = async ({ lat, lon }) => {
    try {
        const apiKey = 'e13e248ba58a789dbfacad81dd150a7e';  
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const response = await axios.get(url);

       
        if (response.data && response.data.list) {
            console.log("Weather Data: ", response.data);  
            return response.data;
        } else {
            throw new Error("Invalid API response");
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
};

export { getWeatherData };
