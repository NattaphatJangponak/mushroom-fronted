import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getWeatherData } from '../services/weatherService';

function WeatherCard({ data }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center m-2 w-60 ">
            <h2 className="font-semibold">{new Date(data.dt * 1000).toLocaleDateString()}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                className="mx-auto w-16 h-16"
            />
            <p className="text-md capitalize">{data.weather[0].description}</p>
            <p className="text-lg font-bold">
                {data.main.temp_min.toFixed(1)}°C / {data.main.temp_max.toFixed(1)}°C
            </p>
            <p className="text-sm text-gray-500">Humidity: {data.main.humidity}%</p>
        </div>
    );
}

function HomePage() {
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState('Unknown Location');

    const filterWeatherData = (list) => list.filter((_, index) => !(index % 8)).slice(0, 5);

    useEffect(() => {
        const fetchData = async () => {
            try {

                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const data = await getWeatherData({ lat: latitude, lon: longitude });
                    setLocation(data.city.name);
                    setWeatherData(filterWeatherData(data.list));
                }, (error) => {
                    console.error('Error fetching location:', error);
                    alert('Unable to retrieve location.');
                    setLocation('Unable to retrieve location');
                });
            } catch (error) {
                console.error('Failed to fetch weather data:', error);
            }
        };

        fetchData();
    }, []);





    return (
        <div>
            <div className="bg-gray-100 py-6 min-h-screen">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-5">   Weather Forecast for {location}</h1>
                    {weatherData.length > 0 ? (
                        <div className="flex justify-center items-center flex-wrap">
                            {weatherData.map((item, index) => (
                                <WeatherCard key={index} data={item} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-lg">Loading weather data...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
