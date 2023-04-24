import React from 'react';
import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <div className="contact__info">
            <h5 className="contact__info-title">CONTACTEZ-NOUS</h5>
            <ul className="contact__info-list">
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-location-dot"></i> 27, rue du Lièvre 01940 ACME
                </li>
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-envelope"></i> accueil@oharvest.fr
                </li>
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-phone"></i> 08 91 650 605
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;