import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import './ReservationCalendar.scss';

/* ---------------------------------------
Hook
--------------------------------------- */
const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(); // stock the date choosen by user
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(); // stock the time slot choosen by user
    const [reservedSlots, setReservedSlots] = useState([]); // stock time slot already booked
    const [excludeDays, setExcludeDays] = useState([]); // days to disable on the calendar

    useEffect(() => {
        const url = 'http://kevin-hesse-server.eddi.cloud/api';
        axios.get(url + '/bookings')
            .then((response) => {     
                
                /**
                 * array used to push days to disable in the calendar
                 */
                const formatData = [];
                // exemple : un array de 5 elements <== response.data.length = 5
                // [0] = {visitAt: 23/06/2023, slot: afternoon}; <== we are here / index equal 0 / 1st iteration
                // [1] = {visitAt: 24/06/2023, slot: afternoon}; <== we are here / index equal 1 / 2nd iteration
                // [2] = {visitAt: 24/06/2023, slot: morning};  <== we are here / index equal 2 / 2nd iteration
                // [3] = {visitAt: 26/06/2023, slot: afternoon};  <== we are here / index equal 3 / 3rd iteration
                // [4] = {visitAt: 27/06/2023, slot: afternoon}; <== we are here / index equal 4 / 4th iteration
                for(let index=0; index < response.data.length; index++){
                    if(index !== response.data.length - 1 && response.data[index].visitAt === response.data[index+1].visitAt){
                        delete response.data[index].slot;
                        formatData.push(response.data[index]);
                        index++;
                    } else {
                        formatData.push(response.data[index]);
                    }
                }

                /**
                 * formating attributes name
                 */
                const bookingDates = formatData.map((item) => ({ date: new Date(item.visitAt), timeSlot: item.slot }));
            
                setReservedSlots(bookingDates);
                
                /**
                 * keep only the day where morning and afternoon are booked (the day is not available on the calendar)
                 */
                const lists = bookingDates
                    .filter(item => item.timeSlot !== 'morning' && item.timeSlot !== 'afternoon')
                    .map((item) => item.date);

                setExcludeDays(lists);
            })
            .catch((error) => console.log(error));
    }, []);


    /* ----------------------------------
Event function
--------------------------------------- */
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
--------------------------------------- */

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
     * Check if a day is out of week-end & not totally booked (morning & afternoon)
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
        <div className="calendar">
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
                    <div className='container_reservation'>
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
        </div>
    );
};

export default ReservationCalendar;