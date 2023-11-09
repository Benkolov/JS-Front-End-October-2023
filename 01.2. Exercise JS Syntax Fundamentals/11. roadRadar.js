function checkSpeed(speed, area) {

    function getSpeedLimit(area) {
        switch (area) {
          case 'motorway':
            return 130;
          case 'interstate':
            return 90;
          case 'city':
            return 50;
          case 'residential':
            return 20;
          default:
            return 0;
        }
      }

    const speedLimit = getSpeedLimit(area);
    const difference = speed - speedLimit;
    let status;
  
    if (difference <= 0) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      if (difference <= 20) {
        status = 'speeding';
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
  
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
  }
  
  
checkSpeed(40, 'city');
checkSpeed(21, 'residential');
checkSpeed(120, 'interstate');
