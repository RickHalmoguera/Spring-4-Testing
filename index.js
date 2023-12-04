class Room {
    constructor(name, rate, discount, bookings) {
        this.name = name
        this.rate = rate
        this.discount = discount
        this.bookings = bookings
    }

    isOccupied(date) {
        const [day, month, year] = date.split('/').map(Number)
        const inputDate = new Date(year, month - 1, day)

        return this.bookings.some(booking => {
            const [checkInDay, checkInMonth, checkInYear] = booking.checkIn.split('/').map(Number)
            const [checkOutDay, checkOutMonth, checkOutYear] = booking.checkOut.split('/').map(Number)

            const checkInDate = new Date(checkInYear, checkInMonth - 1, checkInDay)
            const checkOutDate = new Date(checkOutYear, checkOutMonth - 1, checkOutDay)

            return checkInDate <= inputDate && inputDate <= checkOutDate
        })
    }
    
}

class Booking {
    constructor(name, email, checkIn, checkOut, rooms, discount) {
        this.name = name
        this.email = email
        this.checkIn = checkIn
        this.checkOut = checkOut
        this.rooms = rooms
        this.discount = discount
    }
}

module.exports = { Room, Booking }
