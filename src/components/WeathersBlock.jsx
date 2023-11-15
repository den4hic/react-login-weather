import React from 'react';
import Weather from "./Weather";

import '../styles/WeathersBlock.css'

const WeathersBlock = (data) => {
    const weatherList = data.data.data;
    const everyEighthElement = [];

    for (let i = 0; i < weatherList.length; i += 8) {
        everyEighthElement.push(weatherList[i]);
    }

    return (
            <div>
                    <h1 className="location">{data.data.location}</h1>
                    <div className='weather-div'>
                            <Weather data={{element: everyEighthElement[0], date: "Today"}}/>
                            <Weather data={{element: everyEighthElement[1], date: "Tomorrow"}}/>
                            <Weather data={{element: everyEighthElement[2], date: ""}}/>
                            <Weather data={{element: everyEighthElement[3], date: ""}}/>
                            <Weather data={{element: everyEighthElement[4], date: ""}}/>
                    </div>
            </div>
        );
};

export default WeathersBlock;
