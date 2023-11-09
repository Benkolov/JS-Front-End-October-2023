function calculateTicketPrice(day, age) {
    let price;
  
    if (age >= 0 && age <= 18) {
      switch (day) {
        case 'Weekday':
          price = 12;
          break;
        case 'Weekend':
          price = 15;
          break;
        case 'Holiday':
          price = 5;
          break;
        default:
          price = 'Error!';
          break;
      }
    } else if (age > 18 && age <= 64) {
      switch (day) {
        case 'Weekday':
          price = 18;
          break;
        case 'Weekend':
          price = 20;
          break;
        case 'Holiday':
          price = 12;
          break;
        default:
          price = 'Error!';
          break;
      }
    } else if (age > 64 && age <= 122) {
      switch (day) {
        case 'Weekday':
          price = 12;
          break;
        case 'Weekend':
          price = 15;
          break;
        case 'Holiday':
          price = 10;
          break;
        default:
          price = 'Error!';
          break;
      }
    } else {
      price = 'Error!';
    }
    
    if (price !== 'Error!') {
      console.log(`${price}$`);
    } else {
      console.log('Error!')
    }
    
  }
  
  // Example usage:
  calculateTicketPrice('Weekday', 42); // Output: 18$
  calculateTicketPrice('Holiday', -12); // Output: Error!
  calculateTicketPrice('Holiday', 15); // Output: 5$
  