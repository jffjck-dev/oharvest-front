import React, { useState, useEffect } from 'react';
import { getWeatherReport } from '../../utils/get-weather.js';

import './Notification.scss';

/**
 * Element notifying user if the store is open or close and weather report
 * @returns {JSX.Element}
 */
const Notification = () => {
    const [isHarvestOpen, setIsHarvestOpen] = useState(false);
    const [weatherReport, setWeatherReport] = useState(undefined);

    useEffect(() => {
        const currentTime = new Date();
        (currentTime.getHours() >= 9 && currentTime.getHours() < 18) && setIsHarvestOpen(true);
        getWeatherReport()
            .then((data) => {
                setWeatherReport(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={isHarvestOpen ? 'notification --open' : 'notification --close'}>
            {weatherReport && <img src={`https://openweathermap.org/img/wn/${weatherReport.icon}@2x.png`} alt={`${weatherReport.description}`} />}
            <p className={isHarvestOpen ? 'notification__content --open' : 'notification__content --close'}>{isHarvestOpen ? 'La cueillette est actuellement OUVERTE !' : 'La cueillette est actuellement FERMÉ !'} </p>
        </div>
    );
};

export default Notification;
