function rand() {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  }
  
  // variables
  let units = [];
  let totalCost = 0;
  let brokenTubesCount = 0;
  
  // Inicializamos units as a 4x4 matrix
  for (let i = 0; i < 4; i++) {
    units[i] = [];
    for (let j = 0; j < 4; j++) {
      units[i][j] = rand();
    }
  }
  
  // Initialize totalCost with the firt 16 tubes of the year
  totalCost = 16 * 7;
  
  // Loop for hours in a year (15 hours a day * 5 days a week * 9 months a year)
  for (let hour = 1; hour <= 2700 ; hour++) {
    for (let i = 0; i < units.length; i++) {
      let brokenInUnit = 0;
      for (let j = 0; j < units[i].length; j++) {
        units[i][j]--;
        if (units[i][j] === 0) {
          brokenTubesCount++;
          brokenInUnit++;
          if (brokenInUnit === 2) {
            units[i] = [];
            for (let k = 0; k < 4; k++) {
              units[i][k] = rand();
            }
            totalCost += 4 * 7;
          }
        }
      }
    }
  }
  // Result
  console.log("Broken Tubes Count: " + brokenTubesCount);
  console.log("Total Cost: " + totalCost + " U$D");
  
  //Sometimes the number generated is the same, only replay it multiple times
