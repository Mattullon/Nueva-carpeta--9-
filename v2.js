function rand() {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  }
  
  const units = Array(4)
    .fill(0)
    .map(() => Array(4).fill(0).map(rand));
  
  let totalCost = 16 * 7;
  let brokenTubesCount = 0;
  const brokenInUnit = Array(4).fill(0);
  
  for (let hour = 1; hour <= 2700; hour++) {
    for (let i = 0; i < units.length; i++) {
      for (let j = 0; j < units[i].length; j++) {
        units[i][j]--;
        if (units[i][j] === 0) {
          brokenTubesCount++;
          brokenInUnit[i]++;
          if (brokenInUnit[i] === 2) {
            units[i] = Array(4).fill(0).map(rand);
            brokenInUnit[i] = 0;
            totalCost += 4 * 7;
          }
        }
      }
    }
  }
  
  console.log(`Broken Tubes Count: ${brokenTubesCount}`);
  console.log(`Total Cost: ${totalCost} U$D`);
  