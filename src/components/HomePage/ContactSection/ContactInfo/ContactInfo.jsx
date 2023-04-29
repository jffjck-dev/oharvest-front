import React from 'react';

import './ContactInfo.scss';

/**
 * Contact information containing address, mail and phone
 * @returns {JSX.Element}
 */
const ContactInfo = () => {
    return (
        <div className="contact__info">
            <h5 className="contact__info-title">CONTACTEZ-NOUS</h5>
            <ul className="contact__info-list">
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-location-dot"></i> 27, rue du Lièvre 01940 ACME
                </li>
                <li className="contact__info-list-item">
                    <a href="mailto:accueil@oharvest.fr"><i className="fa-solid fa-envelope"></i> accueil@oharvest.fr</a>
                </li>
                <li className="contact__info-list-item">
                    <a href="tel:0891650605"><i className="fa-solid fa-phone"></i> 08 91 650 605</a>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;