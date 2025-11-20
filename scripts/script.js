function Vehicle(owner, image, group, regNumber) {
  this.owner = owner,
    this.image = image,
    this.group = group,
    this.regNumber = regNumber
}

let groupArray = ["Cars", "Motorcycles", "Bicycles", "Scooters"];

let vehicleGroup = Vehicle.group = groupArray;

