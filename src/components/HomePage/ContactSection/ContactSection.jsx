import React from 'react';
import Location from './Location/Location.jsx';
import OpeningHours from './OpeningHours/OpeningHours.jsx';
import ContactInfo from './ContactInfo/ContactInfo';

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