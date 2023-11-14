import React from 'react';

const Weather = ({data}) => {
    return (
        <div>
            <p>Data: {data.dt_txt}</p>
            <p>Clouds: {data.weather[0].description}</p>
            <p>Min temp: {data.main.temp_max}</p>
            <p>Max temp: {data.main.temp_min}</p>
            <p>Pressure: {data.main.pressure}</p>
            <p>Wind: {data.wind.speed}</p>
        </div>
    );
};

export default Weather;
