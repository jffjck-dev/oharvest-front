import React from 'react';

import ReservationHeader from '../../components/visit/reservation-header/ReservationHeader.jsx';
import ReservationModality from '../../components/visit/reservation-modality/ReservationModality.jsx';
import ReservationTheme from '../../components/visit/reservation-theme/ReservationTheme.jsx';
import ReservationCalendar from '../../components/visit/reservation-calendar/ReservationCalendar.jsx';

/**
 * Page element for school trip containing headers, theme, modality and calendar component
 * @returns {JSX.Element}
 */
const ReservationPage = () => {
    return (
        <>
            <h2 className="crop-page__page-title">Modalités des visites scolaires</h2>
            <ReservationHeader />
            <ReservationModality />
            <ReservationTheme />
            <ReservationCalendar />
        </>
    );
};

export default ReservationPage;