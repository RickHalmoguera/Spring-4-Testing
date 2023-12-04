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


const room1= new Room("suite",150,8)

const booking1= new Booking("Ricardo","ricardo@ricardo.com", new Date(2023,12,12), new Date(2024,1,1),rooms[2], 10)

console.log(booking1)
