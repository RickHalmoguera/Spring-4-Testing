const rooms = require('./JSON/rooms.json')
class Room {
    constructor(name, rate, discount,booking) {
        this.name = name; // Deluxe A
        this.rate = rate;  //200
        this.discount = discount; //20%
        this.bookings = booking;  
    }

    isOccupied(date) {
        return this.bookings.some(booking => booking.checkIn <= date && date <= booking.checkOut);
    }
    
}

class Booking {
    constructor(name, email, checkIn, checkOut, rooms, discount ) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.rooms = rooms
        this.discount = discount;
    }
 
}


