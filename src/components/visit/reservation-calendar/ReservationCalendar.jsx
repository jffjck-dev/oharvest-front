import React, { useState, useEffect } from 'react';
import {getBookings} from '../../../utils/get-bookings.js';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

import 'react-datepicker/dist/react-datepicker.css';
import './ReservationCalendar.scss';

/**
 * Calendar Element for selecting day and moment for school trip
 * @returns {JSX.Element}
 */
const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(); // stock the date choosen by user
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(); // stock the time slot choosen by user
    const [reservedSlots, setReservedSlots] = useState([]); // stock time slot already booked
    const [excludeDays, setExcludeDays] = useState([]); // days to disable on the calendar

    // TODO: fix issue booking slot not importing properly
    useEffect(() => {
        getBookings()
            .then(({ bookingDates, excludeDays }) => {
                setReservedSlots(bookingDates);
                setExcludeDays(excludeDays);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    /* ----------------------------------
    Event function
    ----------------------------------- */
    /**
     * on click on the day date, update the date choosen by the user
     */
    const handleDateChange = (date) => { // -> Event: click on a day date 
        setSelectedDate(date); //-> Update state: date choosen by user
    };

    /**
     * on click event on the select timeslot, update the timeslot selected by user
     */
    const handleTimeSlotChange = (event) => { // -> Event: click on time slot 
        setSelectedTimeSlot(event.target.value); //-> Update state: time slot choosen by user
    };

    /* ---------------------------------
    Utility function
    ----------------------------------- */

    /**
     * check if a day is totally booked (morning and afternoon slots)
     */
    const isDateReserved = (date) => {
        const dateString = format(date, 'yyyy-MM-dd');
        return (
            reservedSlots[dateString] &&
            reservedSlots[dateString].includes('morning') &&
            reservedSlots[dateString].includes('afternoon')
        );
    };

    /**
     * Check if a day is out of weekend & not totally booked (morning & afternoon)
     */
    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6 && !isDateReserved(date);
    };

    /**
     * Check if a time slot is booked
     */
    const isTimeSlotReserved = (date, timeSlot) => {
        const selectedDate = reservedSlots.find((reserved) => reserved.date.toDateString() === date.toDateString());
        return (
            selectedDate && selectedDate.timeSlot === timeSlot
        );
    };
        
    /**
     * set the calendar presentation on french format
     */
    registerLocale('fr', fr);

    return (
        <>
            <h1 className="calendar__title">Calendrier de réservations</h1>
            <div className='container__desktop'>
                <div className='calendar__container'>
                    <h2 className='calendar__description'>Choisissez la date de votre visite</h2>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        locale="fr"
                        excludeDates={excludeDays}
                        excludeDateIntervals={[{start: new Date(2023), end: Date.now()}]}
                        filterDate={isWeekday}
                    />
                </div>
                {selectedDate && (
                    <div className='container__reservation'>
                        <h2 className="calendar__description">Sélectionnez un créneau horaire</h2>
                        <select
                            value={selectedTimeSlot}
                            onChange={handleTimeSlotChange}
                            className="calendar__select"
                        >
                            <option value="">Choisissez un créneau horaire</option>
                            <option
                                value="morning"
                                disabled={isTimeSlotReserved(selectedDate, 'morning')}
                            >
                                Matin
                            </option>
                            <option
                                value="afternoon"
                                disabled={isTimeSlotReserved(selectedDate, 'afternoon')}
                            >
                                Après-midi
                            </option>
                        </select>
                        {selectedTimeSlot && (
                            <Link to={`/reservation/inscription?date=${selectedDate}&&slot=${selectedTimeSlot}`}>
                                <button className="calendar__button">
                                    Réserver la date et le créneau sélectionnés
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ReservationCalendar;