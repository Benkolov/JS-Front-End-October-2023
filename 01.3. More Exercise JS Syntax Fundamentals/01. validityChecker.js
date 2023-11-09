function distanceBetweenPoints(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
  
    function isDistanceValid(x1, y1, x2, y2) {
      const distance = calculateDistance(x1, y1, x2, y2);
      return Number.isInteger(distance);
    }
  
    const isDistance1Valid = isDistanceValid(x1, y1, 0, 0);
    const isDistance2Valid = isDistanceValid(x2, y2, 0, 0);
    const isDistance12Valid = isDistanceValid(x1, y1, x2, y2);
  
    function printResult(x1, y1, x2, y2, isValid) {
      const points1 = `{${x1}, ${y1}}`;
      const points2 = `{${x2}, ${y2}}`;
      const validity = isValid ? 'valid' : 'invalid';
      console.log(`${points1} to ${points2} is ${validity}`);
    }
  
    printResult(x1, y1, 0, 0, isDistance1Valid);
    printResult(x2, y2, 0, 0, isDistance2Valid);
    printResult(x1, y1, x2, y2, isDistance12Valid);
  }
  
  // Example usage:
  distanceBetweenPoints(3, 0, 0, 4);
  distanceBetweenPoints(2, 1, 1, 1);
  