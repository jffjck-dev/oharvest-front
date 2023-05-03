import React from 'react';

import './OpeningHours.scss';

/**
 * Element displaying opening hours
 * @returns {JSX.Element}
 */
const OpeningHours = () => {
    const days = [
        {day: 'Dimanche'},
        {day: 'Lundi'},
        {day: 'Mardi'},
        {day: 'Mercredi'},
        {day: 'Jeudi'},
        {day: 'Vendredi'},
        {day: 'Samedi'},
    ];

    const today = new Date().getDay();

    return (
        <div className="contact-card">
            <h5 className="contact-card__title"><i className="fa-solid fa-clock"></i>NOS HORAIRES</h5>
            <ul className="contact-card__list">
                {days.map((item, index) => (
                    <li key={item.day} className={`contact-card__list-item ${today === index ? 'today' : ''}`}>
                        <span className="contact-card__list-day">{item.day}</span>
                        <span className="contact-card__list-hour">{index === 0 ? 'Fermé' : '9h00-12h00'}</span>
                        <span className="contact-card__list-hour">{index === 0 ? '13h00-18h00' : '13h00-18h00'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OpeningHours;