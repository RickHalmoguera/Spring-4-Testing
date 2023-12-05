class Room {
    constructor(name,bookings, rate, discount ) {
        this.name = name
        this.bookings = bookings
        this.rate = rate
        this.discount = discount
    }

    isOccupied(date) {
        const [day, month, year] = date.split('/').map(Number)
        const [checkInDay, checkInMonth,checkInYear] =this.bookings.checkIn.split('/').map(Number)
        const [checkOutDay, checkOutMonth,checkOutYear] =this.bookings.checkOut.split('/').map(Number)
        const inputDate = new Date(Date.UTC(year, month - 1, day))
        const checkInDateFormatted= new Date(Date.UTC(checkInYear, checkInMonth -1,checkInDay))
        const checkOutDateFormatted= new Date(Date.UTC(checkOutYear, checkOutMonth -1,checkOutDay))

        
        return inputDate >= checkInDateFormatted && inputDate <= checkOutDateFormatted

    }
    
    

    occupancyPercentage(startDate, endDate) {
        const [startDateDay, startDateMonth, startDateYear] = startDate.split('/').map(Number);
        const [endDateDay, endDateMonth, endDateYear] = endDate.split('/').map(Number);
        const startDateFormatted = new Date(startDateYear, startDateMonth - 1, startDateDay);
        const endDateFormatted = new Date(endDateYear, endDateMonth - 1, endDateDay);
        const totalDays = (endDateFormatted - startDateFormatted) / (1000 * 60 * 60 * 24) + 1;
        let roomOccupiedDays = 0;

        this.bookings.forEach(booking => {
            const [checkInDay, checkInMonth, checkInYear] = booking.checkIn.split('/').map(Number);
            const [checkOutDay, checkOutMonth, checkOutYear] = booking.checkOut.split('/').map(Number);

            const checkInDate = new Date(checkInYear, checkInMonth - 1, checkInDay);
            const checkOutDate = new Date(checkOutYear, checkOutMonth - 1, checkOutDay);

            if (checkInDate <= endDateFormatted && checkOutDate >= startDateFormatted) {
                const overlapStartDate = Math.max(startDateFormatted, checkInDate);
                const overlapEndDate = Math.min(endDateFormatted, checkOutDate);
                const days = (overlapEndDate - overlapStartDate) / (1000 * 60 * 60 * 24) + 1;
                roomOccupiedDays += days;
            }
        });

        return (roomOccupiedDays * 100) / totalDays;
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {
        return rooms
    }
    
}

class Booking {
    constructor(name, email, checkIn, checkOut, discount,rooms) {
        this.name = name
        this.email = email
        this.checkIn = checkIn
        this.checkOut = checkOut
        this.discount = discount
        this.rooms = rooms
    }

    getFee(rate,roomDiscount,bookingDiscount){
        const rateInEuros = rate/100
        const rateRoom = rateInEuros -(rateInEuros*roomDiscount/100)
        const fullFee = rateRoom - ( rateRoom*bookingDiscount/100)
        return Number(fullFee.toFixed(2))
    }
}

module.exports = { Room, Booking }
