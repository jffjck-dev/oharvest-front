import React, { useState, useEffect } from 'react';
import './Loading.scss';

const Loading = () => {
    // to avoid code repetition on intervals
    const loadingTexts = ['chargement', 'chargement.', 'chargement..', 'chargement...'];
    // to avoid multiple timers and handling stop
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
        }, 250);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <h1 className="loading"><span className="spinner">🌀</span> {loadingTexts[textIndex]}</h1>
    );
};

export default Loading;