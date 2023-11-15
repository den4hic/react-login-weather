import React from 'react';

import '../styles/Weather.css';

const Weather = (weatherData) => {
    const data = weatherData.data.element

    function makeDate(dt_txt) {
        const date = new Date(dt_txt);
        return date.toDateString().slice(0, 10);
    }

    return (
        <div className="weather">
            <h2>{weatherData.data.date === "" ? makeDate(data.dt_txt) : weatherData.data.date}</h2>
            <p><b>Clouds</b> {data.weather[0].description}</p>
            <p><b>Min temp</b> {data.main.temp_max}°C</p>
            <p><b>Max temp</b> {data.main.temp_min}°C</p>
            <p><b>Pressure</b> {data.main.pressure}</p>
            <p><b>Wind</b> {data.wind.speed}</p>
        </div>
    );
};

export default Weather;
