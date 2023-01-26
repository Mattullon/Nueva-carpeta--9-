function rand() {
  return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
}

let workHours = Math.floor(15 * 5 * 9 * 4); //all hours of the year
//console.log(workHours);

let tubesFluorecent = [0, 0, 0, 0];
let tubesBroken = 0;
let contsTubes;
let money = 28; // 7 * 4 initial money of the year
//for (let unit = 0; unit < 4; unit++) {
  //simulation of the 4 units
  //workHours = 2700;
  for (let i = 0; i <= workHours; i++) {
    // simulation of a unit
    tubesFluorecent = [rand(), rand(), rand(), rand()];
    tubesFluorecent.sort(); // we sort the array
    let firtFlu = tubesFluorecent[0]; 
    let secundFlu = tubesFluorecent[1];

    if (workHours > 99) {
      workHours = workHours - firtFlu;
      contsTubes += 1;
    }
    if (workHours > 99) {
      workHours = workHours - secundFlu;
      contsTubes += 1;
    }
    if ((contsTubes = 2)) {
      tubesBroken += 2;
      contsTubes = 0;
    }
    if (workHours > 100) {
      if (workHours < firtFlu) {
        workHours = 0;
        tubesBroken += 1;
        console.log(`aca sumo entra`)
  
      }
    }
    if (workHours <= 99) {
      workHours = 0;
    }

    console.log(tubesFluorecent);
    console.log(firtFlu);
    console.log(secundFlu);
    console.log(workHours);
  }
//}

money = money + tubesBroken * 7;
console.log(`fluorescent tubes were broken in 1 year are: ${tubesBroken}`);
console.log(
  `the money that fluorescent tubes cost the University per year per classroom is :${money} USD`
);
