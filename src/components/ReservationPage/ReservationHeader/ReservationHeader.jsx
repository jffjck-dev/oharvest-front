import React from 'react';
import image from '../../../assets/children_img.png';

import './ReservationHeader.scss';


//Reservation image and title inside it
const ReservationHeader = () => {
    return (
        <div className="reservation-header">
            <div className="reservation-header__img-container">
                <img className="reservation-header__img" src={image} alt="reservation"></img>
                <div className="reservation-header__title-container">
                    <h2 className="reservation-header__title">Les visites scolaires</h2>
                </div>
            </div>
        </div>
    );
};


export default ReservationHeader;