export async function getBookings() {
    const url = import.meta.env.VITE_HARVEST_API_URL;

    try {
        const response = await fetch(url + '/bookings');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const bookingDates = [];
        const excludeDays = [];
        let currentVisitDate = null;
        let hasBothSlots = false;

        data.forEach(item => {
            if (currentVisitDate === item.visitAt) {
                hasBothSlots = true;
            } else {
                if (hasBothSlots) {
                    excludeDays.push(new Date(currentVisitDate));
                }
                currentVisitDate = item.visitAt;
                hasBothSlots = false;
            }

            bookingDates.push({ date: new Date(item.visitAt), timeSlot: item.slot });
        });

        return { bookingDates, excludeDays };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}