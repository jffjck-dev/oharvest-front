import React from 'react';
import PropTypes from 'prop-types';

import ReservationHeader from './ReservationHeader/ReservationHeader';
import ReservationModality from './ReservationModality/ReservationModality';
import ReservationTheme from './ReservationTheme/ReservationTheme';
import ReservationCalendar from './ReservationCalendar/ReservationCalendar';

/**
 * Page element for school trip containing headers, theme, modality and calendar component
 * @param url {string} API url
 * @param config {object} config headers authorization
 * @returns {JSX.Element}
 */
const ReservationPage = ({url, config}) => {
    
    return (
        <>
            <h2 className="crop-page__page-title">Modalités des visites scolaires</h2>
            <ReservationHeader />
            <ReservationModality />
            <ReservationTheme />
            <ReservationCalendar url={url} config={config} />
        </>
    );
};

ReservationPage.propTypes = {
    url : PropTypes.string.isRequired,
    config: PropTypes.object.isRequired
};

export default ReservationPage;