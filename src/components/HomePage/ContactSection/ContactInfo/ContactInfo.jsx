import React from 'react';
import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <div className="contact__info">
            <h5 className="contact__info-title">CONTACTEZ-NOUS</h5>
            <ul className="contact__info-list">
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-location-dot"></i> 22, rue de la moisson<br />54000 MUIZON
                </li>
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-envelope"></i> cueillette-oharvest@mail.com
                </li>
                <li className="contact__info-list-item">
                    <i className="fa-solid fa-phone"></i> 00 00 00 00 00
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;