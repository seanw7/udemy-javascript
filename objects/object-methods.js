let restaurant = {
    name: "Coco's Diner",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        console.log(this.guestCapacity - this.guestCount + " Free Seats")
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }

}

restaurant.seatParty(65)

console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)

console.log(restaurant.checkAvailability(4))

restaurant.seatParty(1)

console.log(restaurant.checkAvailability(4))