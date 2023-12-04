const { Room, Booking } = require('./index')
const roomsList = require('./JSON/rooms.json')
const bookingsList = require('./JSON/bookings.json')


describe ('Check room availability', ()=>{
    
    test("Check the availability of a room in 01/01/2023", () => {
        const room1 = new Room(roomsList[0].name, roomsList[0].rate, roomsList[0].discount, [...bookingsList])
        expect(room1.isOccupied('01/01/2023')).toBeFalsy()
    })
    
    test("Check the availability of a room in 11/01/2023", () => {
        const room1 = new Room(roomsList[0].name, roomsList[0].rate, roomsList[0].discount, [...bookingsList])
        expect(room1.isOccupied('11/01/2023')).toBeTruthy()
    })
})