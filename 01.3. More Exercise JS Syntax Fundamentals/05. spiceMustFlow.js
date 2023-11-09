function spiceMustFlow(startingYield) {
    let totalSpiceExtracted = 0;
    let days = 0;
  
    while (startingYield >= 100) {
      totalSpiceExtracted += startingYield - 26;
      startingYield -= 10;
      days++;
    }
  
    if (totalSpiceExtracted >= 26) {
      totalSpiceExtracted -= 26;
    }
  
    console.log(days);
    console.log(totalSpiceExtracted);
  }
  

spiceMustFlow(111);
spiceMustFlow(450);
