import React, {useEffect, useState} from 'react';
import axios from "axios";
import WeathersBlock from "../components/WeathersBlock";

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '8563faa480bf7a89865730f5aabd3145';
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=${API_KEY}&cnt=5&units=metric`);

                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            {weatherData ? (
                <div>
                    <WeathersBlock data={weatherData.list}/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
