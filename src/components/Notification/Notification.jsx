import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Notification.scss';

/**
 * Element notifying user if the store is open or close and weather report
 * @returns {JSX.Element}
 */
const Notification = () => {
    const [isHarvestOpen, setIsHarvestOpen] = useState(false);
    const [weatherReport, setWeatherReport] = useState({});

    const position = {lat: 48.5771821, lon: 7.7488522};
    const apiKey = import.meta.env.VITE_WEATHER_API_TOKEN;
    const url = import.meta.env.VITE_WEATHER_API_URL;
    const weatherAPIUrl = `${url}?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}`;

    useEffect(() => {
        const currentTime = new Date();
        (currentTime.getHours() >= 9 && currentTime.getHours() < 18) && setIsHarvestOpen(true);
        axios.get(weatherAPIUrl)
            .then((response) => {
                console.log(response.data);
                setWeatherReport(response.data.weather[0]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={isHarvestOpen ? 'notification --open' : 'notification --close'}>
            {weatherReport && <img src={`https://openweathermap.org/img/wn/${weatherReport.icon}@2x.png`} alt={`${weatherReport.description}`} />}
            <p className={ isHarvestOpen ? 'notification__content --open' : 'notification__content --close'}>{isHarvestOpen ? 'La cueillette est actuellement OUVERTE !' : 'La cueillette est actuellement FERMÉ !'} </p>
        </div>
    );
};

export default Notification;
