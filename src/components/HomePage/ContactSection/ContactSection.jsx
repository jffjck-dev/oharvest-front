import React from 'react';
import Map from './Map/Map';
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
            <Map />
        </section>
    );
};

export default ContactSection;