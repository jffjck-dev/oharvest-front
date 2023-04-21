import React from 'react';

import ReservationHeader from './ReservationHeader/ReservationHeader';
import ReservationModality from './ReservationModality/ReservationModality';
import ReservationTheme from './ReservationTheme/ReservationTheme';
import ReservationCalendar from './ReservationCalendar/ReservationCalendar';


//Container ReservationPage (Header/Theme/Modality/Calendar)

const ReservationPage = () => {
    
    return (
        <>
            <ReservationHeader />
            <ReservationModality />
            <ReservationTheme />
            <ReservationCalendar />
        </>
    );
};

export default ReservationPage;