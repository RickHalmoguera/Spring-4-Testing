const { Room, Booking } = require('./index')
const roomsList = require('./JSON/rooms.json')
const bookingsList = require('./JSON/bookings.json')
const roomsWithBookings = require('./JSON/roomsWithBookings.json')

describe ('Check the room occupancy on a specific date', ()=>{
    
    test('Check whether the booking from 10/01/2023 to 12/01/2023 is occupied on 01/01/2023', () => {
        const room1 = new Room(
            roomsList[0].name, 
            bookingsList[0], 
            roomsList[0].rate,
            roomsList[0].discount
        )
        expect(room1.isOccupied('01/01/2023')).toBeFalsy()
    })

    test('Check whether the booking from 10/01/2023 to 12/01/2023 is occupied on 10/01/2023', () => {
        const room1 = new Room(
            roomsList[0].name, 
            bookingsList[0], 
            roomsList[0].rate, 
            roomsList[0].discount
        )
        expect(room1.isOccupied('10/01/2023')).toBeTruthy()
    })

    test('Check whether the booking from 10/01/2023 to 12/01/2023 is occupied on 12/01/2023', () => {
        const room1 = new Room(
            roomsList[0].name, 
            bookingsList[0], 
            roomsList[0].rate, 
            roomsList[0].discount
        )
        expect(room1.isOccupied('12/01/2023')).toBeTruthy()
    })
   
    test('Check whether the booking from 10/01/2023 to 12/01/2023 is occupied on 11/01/2023', () => {
        const room1 = new Room(
            roomsList[0].name, 
            bookingsList[0], 
            roomsList[0].rate, 
            roomsList[0].discount
        )
        expect(room1.isOccupied('11/01/2023')).toBeTruthy()
    })

    test('Check whether the booking from 10/01/2023 to 12/01/2023 is occupied on 15/01/2023', () => {
        const room1 = new Room(
            roomsList[0].name, 
            bookingsList[0], 
            roomsList[0].rate, 
            roomsList[0].discount
        )
        expect(room1.isOccupied('15/01/2023')).toBeFalsy()
    })


})


describe ('Check the percentage of room occupancy on a specific range', ()=>{
    test('Check the percentage of occupancy between 01/01/2022 and 31/12/2022 of the Room 0', ()=>{
        const room1 = new Room(roomsList[0].name,[...bookingsList], roomsList[0].rate, roomsList[0].discount )
        expect(room1.occupancyPercentage("01/01/2022","31/12/2022")).toBe(0)
    })

    test('Check the percentage of occupancy between 01/01/2023 and 31/12/2023 of the Room 0', ()=>{
        const room1 = new Room(roomsList[0].name,[bookingsList[0],bookingsList[1]], roomsList[0].rate, roomsList[0].discount)
        expect(room1.occupancyPercentage("01/01/2023","31/12/2023")).toBe(2.47)
    })

    test('Check the percentage of occupancy between 10/01/2023 and 12/01/2023 of the Room 0', ()=>{
        const room1 = new Room(roomsList[0].name,[bookingsList[0],bookingsList[1]], roomsList[0].rate, roomsList[0].discount)
        expect(room1.occupancyPercentage("10/01/2023","12/01/2023")).toBe(100)
    })
})

describe('Check the total occupancy of the hotel in a time period', ()=>{
    test('Check the percentage of the occupancy between 01/01/2022 and 31/12/2022 of the whole hotel',()=>{
    
        expect(Room.totalOccupancyPercentage(roomsWithBookings,"01/01/2022","31/12/2022")).toBe(0)
    })

    test('Check the percentage of the occupancy between 01/01/2023 and 31/12/2023 of the whole hotel',()=>{
    
        expect(Room.totalOccupancyPercentage(roomsWithBookings,"01/01/2023","31/12/2023")).toBe(4.71)
    })

    test('Check the percentage of the occupancy between 09/09/2023 and 16/09/2023 of the whole hotel',()=>{
        
        const rooms100 =[
            {
              "name": "habitacion1",
              "rate": 1524,
              "discount": 14,
              "bookings": [
                {
                  "name": "Cliente67",
                  "email": "cliente67@example.com",
                  "checkIn": "09/09/2023",
                  "checkOut": "16/09/2023",
                  "discount": 6
                }
              ]
            },
            {
                "name": "habitacion2",
                "rate": 1524,
                "discount": 14,
                "bookings": [
                  {
                    "name": "Cliente67",
                    "email": "cliente67@example.com",
                    "checkIn": "09/09/2023",
                    "checkOut": "16/09/2023",
                    "discount": 6
                  }
                ]
              }
            ]
        expect(Room.totalOccupancyPercentage(rooms100,"09/09/2023","16/09/2023")).toBe(100)
    })
})
/*
describe('Check the availables rooms between 01/01/2022 and 31/12/2023', ()=>{
    expect(Room.availableRooms(roomsWithBookings,"01/01/2022", "31/12/2022")).toBe(5)
})*/

describe('Check fee ',()=>{
    test('Check that room 0 have a total fee of 12.42 ',()=>{
        const booking1= new Booking(
            bookingsList[0].name, 
            bookingsList[0].email, 
            bookingsList[0].checkIn, 
            bookingsList[0].checkOut,
            bookingsList[0].discount,
            roomsList[0]
        )
        expect(booking1.getFee(booking1.rooms.rate, booking1.rooms.discount, booking1.discount)).toBe(12.42)
    })
})