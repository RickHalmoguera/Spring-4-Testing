const { Room, Booking } = require('./index')
const roomsList = require('./JSON/rooms.json')
const bookingsList = require('./JSON/bookings.json')


describe ('Check room availability', ()=>{
    
    test('Check the availability of a room in 01/01/2023', () => {
        const room1 = new Room(roomsList[0].name, [bookingsList[0]], roomsList[0].rate, roomsList[0].discount)
        expect(room1.isOccupied('01/01/2023')).toBeFalsy()
    })
    
    test('Check the availability of a room in 11/01/2023', () => {
        const room1 = new Room(roomsList[0].name, [bookingsList[0]], roomsList[0].rate, roomsList[0].discount)
        expect(room1.isOccupied('11/01/2023')).toBeTruthy()
    })

    test('Check the availability of a room in 15/01/2023', () => {
        const room1 = new Room(roomsList[0].name, [bookingsList[0]], roomsList[0].rate, roomsList[0].discount)
        expect(room1.isOccupied('15/01/2023')).toBeFalsy()
    })


})

describe ('Check the percentage of occupancy a room', ()=>{
    test('Check the percentage of occupancy between 01/01/2022 and 31/12/2022', ()=>{
        const room1 = new Room(roomsList[0].name,[...bookingsList], roomsList[0].rate, roomsList[0].discount )
        expect(room1.occupancyPercentage("01/01/2022","31/12/2022")).toBe(0)
    })

    test('Check the percentage of occupancy between 01/01/2023 and 31/12/2023', ()=>{
        const room1 = new Room(roomsList[0].name,[...bookingsList], roomsList[0].rate, roomsList[0].discount)
        expect(room1.occupancyPercentage("01/01/2023","31/12/2023")).toBeGreaterThan(0)
    })
})