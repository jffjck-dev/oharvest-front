import React from 'react';

import './ReservationHeader.scss';


//Reservation image and title inside it
const ReservationHeader = () => {
    return (
        <div className="reservation-header">
            <div className="reservation-header__img-container">
                <img className="reservation-header__img" src='https://cdn.pixabay.com/photo/2022/01/27/19/14/flowers-6972916_960_720.jpg' alt="reservation"></img>
                <div className="reservation-header__title-container">
                    <h2 className="reservation-header__title">Les visites scolaires</h2>
                </div>
            </div>
        </div>
    );
};


export default ReservationHeader;