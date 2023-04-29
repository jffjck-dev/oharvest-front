import React from 'react';
import PropTypes from 'prop-types';

import './CalendarHarvest.scss';

/**
 * Harvesting calendar of a product
 * @param startingDate {number} starting month index
 * @param endingDate {number} ending month index
 * @returns {JSX.Element}
 */
const CalendarHarvest = ({startingDate, endingDate}) => {
    const calendar = [];

    for (let index = 1; index <= 12; index++) {
        if(index >= startingDate && index <= endingDate){
            calendar.push({id: index, status: 'available'});
        } else {
            calendar.push({id: index, status: 'unavailable'});
        }
    }

    return (
        <div className='calendar'>
            <table className='availability-table'>
                <thead>
                    <tr>
                        <th>Jan</th>
                        <th>Fév</th>
                        <th>Mar</th>
                        <th>Avr</th>
                        <th>Mai</th>
                        <th>Juin</th>
                        <th>Juil</th>
                        <th>Août</th>
                        <th>Sep</th>
                        <th>Oct</th>
                        <th>Nov</th>
                        <th>Déc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {calendar.map(item => (<td key={item.id} className={item.status}></td>))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

CalendarHarvest.propTypes = {
    startingDate: PropTypes.number.isRequired,
    endingDate: PropTypes.number.isRequired,
};

export default CalendarHarvest;