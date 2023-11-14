import React from 'react';
import Weather from "./Weather";

const WeathersBlock = (data) => {
        return (
            <div className='weather-div'>
                <Weather data={data.data[0]}/>
                <Weather data={data.data[1]}/>
                <Weather data={data.data[2]}/>
                <Weather data={data.data[3]}/>
                <Weather data={data.data[4]}/>
            </div>
        );
};

export default WeathersBlock;
