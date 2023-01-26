function rand() {
  return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
}

let workHours = Math.floor(15 * 5 * 9 * 4);
//console.log(workHours);

let tubesFluorecent = [0, 0, 0, 0];
let tubesBroken = 0;
let contsTubes;
let money = 24;
for (let unit = 0; unit < 4; unit++) {
  workHours = 2700;
  for (let i = 0; i <= workHours; i++) {
    tubesFluorecent = [rand(), rand(), rand(), rand()];
    tubesFluorecent.sort();
    let firtValor = tubesFluorecent[0];
    let secundValor = tubesFluorecent[1];

    if (workHours >= 0) {
      workHours = workHours - firtValor;
      contsTubes += 1;
    }
    if (workHours >= 0) {
      workHours = workHours - secundValor;
      contsTubes = contsTubes + 1;
    }
    if ((contsTubes = 2)) {
      tubesBroken = tubesBroken + 2;
      contsTubes = 0;
    }
    if (workHours <= firtValor) {
      workHours = 0;
      tubesBroken = tubesBroken + 1;
    }
    if (workHours <= secundValor) {
      workHours = 0;
    }

    //   console.log(tubesFluorecent);
    //   console.log(firtValor);
    //   console.log(secundValor);
    //   console.log(workHours);
  }
}


console.log(`fluorescent tubes were broken in 1 year are: ${tubesBroken}`);
console.log(
  `the money that fluorescent tubes cost the University per year per classroom is :${tubesBroken * 7} USD`
);

