import React from 'react';
import Location from './Location/Location.jsx';
import Horaire from './Horaire/Horaire';
import ContactInfo from './ContactInfo/ContactInfo';

import './ContactSection.scss';

/* Contient la googleMap, les horaires, ainsi que les contacts */
const ContactSection = () => {
    return (
        <section className="contact">
            <div className="container-flex">
                <Horaire />
                <ContactInfo />
            </div>
            <Location />
        </section>
    );
};

export default ContactSection;