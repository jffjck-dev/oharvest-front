import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

import './ReservationCalendar.scss';

/* ---------------------------------------
Hook
--------------------------------------- */
const ReservationCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(); //stock the date choosen by user
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(); //stock the time slot choosen by user
    const [reservedSlots, setReservedSlots] = useState({}); //stock time slot already booked

    /* ----------------------------------
Event function
--------------------------------------- */
    const handleDateChange = (date) => { // -> Event: click on a day date 
        setSelectedDate(date); //-> Update state: date choosen by user
    };

    const handleTimeSlotChange = (event) => { // -> Event: click on time slot 
        setSelectedTimeSlot(event.target.value); //-> Update state: time slot choosen by user
    };

    const handleReserve = () => { // -> Event: click on button "reservation" 
        if (selectedTimeSlot) { //-> Check if slot already booked & Update state: time slot already booked
            console.log(
                `Date et créneau réservés: ${format(
                    selectedDate,
                    'dd-MM-yyyy'
                )} - ${selectedTimeSlot}`
            );

            const dateString = format(selectedDate, 'dd-MM-yyyy');
            const updatedReservedSlots = {
                ...reservedSlots,
                [dateString]: reservedSlots[dateString]
                    ? [...reservedSlots[dateString], selectedTimeSlot]
                    : [selectedTimeSlot],
            };
            setReservedSlots(updatedReservedSlots);
            setSelectedDate();
            setSelectedTimeSlot();
        } else {
            console.log('Veuillez sélectionner un créneau horaire');
        }
    };

    /* ---------------------------------
Utility function
--------------------------------------- */
    const isDateReserved = (date) => { // Check if a day is totally booked (morning & afternoon)
        const dateString = format(date, 'dd-MM-yyyy');
        return (
            reservedSlots[dateString] &&
        reservedSlots[dateString].includes('morning') &&
        reservedSlots[dateString].includes('afternoon')
        );
    };

    const isWeekday = (date) => { // Check if a day is out of week-end & not totally booked (morning & afternoon)
        const day = date.getDay();
        return day !== 0 && day !== 6 && !isDateReserved(date);
    };

    const isTimeSlotReserved = (date, timeSlot) => { // Check if a time slot is booked
        const dateString = format(date, 'dd-MM-yyyy');
        return (
            reservedSlots[dateString] && reservedSlots[dateString].includes(timeSlot)
        );
    };

    registerLocale('fr', fr);

    return (
        <div className="calendar">
            <h1 className="calendar__title">Calendrier de réservations</h1>
            <h2 className='calendar__description'>Choisissez la date de votre visite</h2>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                locale="fr"
                filterDate={isWeekday}
            />
            {selectedDate && (
                <>
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
                        <Link to="#">
                            <button className="calendar__button" onClick={handleReserve}>
                                Réserver la date et le créneau sélectionnés
                            </button>
                        </Link>
                    )}
                </>
            )}
        </div>
    );
};

export default ReservationCalendar;