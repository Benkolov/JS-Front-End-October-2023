function calculateFruitCost(fruit, weightGrams, pricePerKilogram) {
    const weightKilograms = weightGrams / 1000;
    const totalCost = weightKilograms * pricePerKilogram;
  
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightKilograms.toFixed(2)} kilograms ${fruit}.`);
  }
  
  
  calculateFruitCost('apples', 1563, 2.35);
  calculateFruitCost('orange', 2500, 1.80);
  