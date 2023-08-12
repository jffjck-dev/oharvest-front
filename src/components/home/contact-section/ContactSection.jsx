import React from 'react';
import Location from './location/Location.jsx';
import OpeningHours from './opening-hours/OpeningHours.jsx';
import ContactInfo from './contact-info/ContactInfo.jsx';

import './ContactSection.scss';

/**
 * Element holding location map, opening hours and contact infos
 * @returns {JSX.Element}
 */
const ContactSection = () => {
    return (
        <section className="contact">
            <div className="container-flex">
                <OpeningHours />
                <ContactInfo />
            </div>
            <Location />
        </section>
    );
};

export default ContactSection;