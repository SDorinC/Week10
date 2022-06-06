function CarFleet() {
    this.carList = [];
}

CarFleet.prototype.addCar = function (car) {
    this.carList.push(car);
};

CarFleet.prototype.showCarList = function () {
    console.log(this.carList);
};

function MotoFleet() {
    this.motoList = [];
}

MotoFleet.prototype.addMoto = function (moto) {
    this.motoList.push(moto);
};

MotoFleet.prototype.showMotoList = function () {
    console.log(this.motoList);
};

function Vehicle(name, color, engine, fuel, wheels) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
}

Vehicle.prototype.drive = function () {
    console.log("Vehicle in drive mode");
};
Vehicle.prototype.park = function () {
    console.log("Vehicle in park mode");
};

function Car(name, color, engine, fuel) {
    Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}

Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);

function Motorcycle(name, color, engine, fuel) {
    Vehicle.call(this, name, color, engine, fuel, Motorcycle.WHEELS);
}

Motorcycle.WHEELS = 2;
Motorcycle.prototype = Object.create(Vehicle.prototype);

car1 = new Car("car1", "blue", "2.0", "gasoline");
car2 = new Car("car2", "red", "2.5", "diesel");
car3 = new Car("car3", "yellow", "1.4", "gasoline");
moto1 = new Motorcycle("moto1", "red", "0.5", "gasoline");
moto2 = new Motorcycle("moto2", "black", "1.0", "gasoline");


carList = new CarFleet();
carList.addCar(car1);
carList.addCar(car2);
carList.addCar(car3);
carList.showCarList();

motoList = new MotoFleet();
motoList.addMoto(moto1);
motoList.addMoto(moto2);
motoList.showMotoList();