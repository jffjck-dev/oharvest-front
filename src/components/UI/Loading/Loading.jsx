import React, { useState, useEffect} from 'react';

import './Loading.scss';

const Loading = () => {
    const [text, setText] = useState('chargement');

    useEffect(() => {
        setTimeout(() => {
            setText('chargement.');
            setInterval(() => {
                setText('chargement.');
            }, 2000);
        }, 500);
        setTimeout(() => {
            setText('chargement..');
            setInterval(() => {
                setText('chargement..');
            }, 2000);
        }, 1000);
        setTimeout(() => {
            setText('chargement...');
            setInterval(() => {
                setText('chargement...');
            }, 2000);
        }, 1500);
        setInterval(() => {
            setText('chargement');
        }, 2000);
    }, []);

    return (
        <h1 className="loading">🌀{text}</h1>
    );
};

export default Loading;