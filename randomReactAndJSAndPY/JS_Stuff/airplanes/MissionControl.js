import {planes, flightReqs, staffReqs} from './airplane';


function displayFuelCapacity() {
    planes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus(){
    planes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + staffReqs(element.availableStaff, flightReqs.requiredStaff));
  });//forEach
}

function displaySpeedRangeStatus(){
    planes.forEach(function(element){
    console.log(element.name + 'meets speed range requirements: ' + speedReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange))
  });

  }

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();