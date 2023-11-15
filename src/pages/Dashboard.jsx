import React, {useEffect, useState} from 'react';
import axios from "axios";
import WeathersBlock from "../components/WeathersBlock";

const Dashboard = ({onExit}) => {
    const [weatherData, setWeatherData] = useState(null);
    // const [weatherData1, setWeatherData1] = useState(null);

    useEffect(() => {
        const fetchData = async (url, setWeather) => {
            try {
                const response = await axios.get(url);

                console.log(response.data)

                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        const makeRequest = (location) => {
            const latitude = location.coords.latitude;
            const longitude = location.coords.longitude;
            const API_KEY = '8563faa480bf7a89865730f5aabd3145';
            fetchData(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`, setWeatherData)
            // fetchData(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`, setWeatherData1)
        };

        navigator.geolocation.getCurrentPosition(makeRequest);
    }, [])

    return (
        <div>
            {weatherData ? (
                <div className="weathers-block">
                    <WeathersBlock data={{data: weatherData.list, location: weatherData.city.name}}/>
                    {/*<WeathersBlock data={{data: weatherData1.list, location: weatherData1.city.name}}/>*/}
                    {/*<WeathersBlock data={{data: weatherData1.list, location: weatherData1.city.name}}/>*/}
                    <button className="exit-button" onClick={onExit}>Exit</button>
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
