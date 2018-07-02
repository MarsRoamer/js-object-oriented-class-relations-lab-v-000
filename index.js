let driverId = 0;
let store = {drivers: [], passengers: [], trips: []};
let passengerId = 0;
let tripId = 0;

class Driver {
	constructor(driver) {
		this.name = driver;
		this.id = ++driverId;
		store.drivers.push(this);
	}

	trips() {return store.trips.filter(element => element.driverId === this.id)}
	passengers() {return this.trips().map(trip => {return trip.passenger()});}

}

class Passenger {
	constructor(passenger) {
		this.name = passenger;
		this.id = ++passengerId;

		store.passengers.push(this);
	}
	trips() {return store.trips.filter(element => element.passengerId === this.id)}
	drivers() {return this.trips().map(trip => {return trip.driver()})
		
	}
	
	// passenger() {return placeHolder.map(element => driver)}
}

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;
		this.driverId = driver.id;
		this.passengerId = passenger.id;
		

		
		
		store.trips.push(this);
		
	}
	// passenger() {return store.trips.filter(element => element.passengerId === passenger.id)}
	passenger() {return store.passengers.find(passenger => {return passenger.id === this.passengerId})}

	driver() {return store.drivers.find(driver => {return driver.id === this.driverId})}
	

}

