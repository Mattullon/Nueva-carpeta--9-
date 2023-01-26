function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const workHours = Math.floor(15 * 5 * 9 * 4);
console.log(typeof workHours)
let tubesFluorecent = [0, 0, 0, 0];

for (let i = 0; i < 4; i++) {
  let tubesUnitBroken = [0, 0, 0, 0];
  for (let j = 0; j < 4; j++) {
    let housOfLife = rand(100, 200);
    tubesUnitBroken[j] = Math.ceil(workHours / housOfLife);
  }
  tubesUnitBroken.sort(function (a, b) {
    return a - b;
  });
  tubesFluorecent[i] = tubesUnitBroken[1]; // como se debe reemplazar desde que se averien dos tubos, se ordena el arreglo y se toma el segundo numero mas alto.
}

const totalCost = tubesFluorecent.reduce((a, b) => a + b, 0) * 7;
const totalTubesBroken = tubesFluorecent.reduce((a, b) => a + b, 0);
const initialCost = 28;
console.log(
  `Total de tubos fluorescentes rotos en un año: ${totalTubesBroken}`
);
console.log(
  `Costo total de reemplazar los tubos fluorescentes en un año: 
  ${totalCost + initialCost} USD`
);
