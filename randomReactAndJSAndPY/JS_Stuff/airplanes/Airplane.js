
let availableAirplanes = [
    {
      name: 'AeroJet',
      availableStaff: [
        'pilots',
        'filghtAttendants',
        'engineers',
        'medicalAssistance',
        'sensorOperators'
      ],
      maxSpeed: 1200,
      minSpeed: 300,
      fuelCapacity: 800
     }, 
     {
      name: 'SkyJet',
      availableStaff: [
        'pilots',
        'filghtAttendants'
      ],
      maxSpeed: 800,
      minSpeed: 200,
      fuelCapacity: 500
     }
    ];
    
     let flightRequirements = {
      requiredStaff: 4,
      requiredSpeedRange: 700
    
    };
    
    
     function meetsStaffRequirements(availableStaff, requiredStaff){
      if(availableStaff.length >= requiredStaff){
        return true;
      } else{
        return false;
      }
    }
    
    function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
      var range = maxSpeed - minSpeed;
    
      if(range > requiredSpeedRange){
        return true;
      } else {
        return false;
      }
    }
    
    export  {availableAirplanes as planes, flightRequirements as flightReqs, meetsStaffRequirements as staffReqs, meetsSpeedRangeRequirements as speedReqs};
    