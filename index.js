function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// El aula se usa 15 horas al día, 5 días a la semana, durante 9 meses al año.
// un mes en promedio tiene 4.34524 semanas
const horasTrabajo = Math.floor(15 * 5 * 9 * 4.34524);
let tubosRotos = [0, 0, 0, 0];

for (let i = 0; i < 4; i++) {
    let tubosRotosUnit = [0, 0, 0, 0];
    for (let j = 0; j < 4; j++) {
        let horasDeVida = rand(100,200);
        tubosRotosUnit[j] = Math.ceil(horasTrabajo / horasDeVida);
    }
    tubosRotosUnit.sort(function(a, b) {
        return a - b;
    });;
    tubosRotos[i] = tubosRotosUnit[1]; // como se debe reemplazar desde que se averien dos tubos, se ordena el arreglo y se toma el segundo numero mas alto.
}

const costoTotal = tubosRotos.reduce((a, b) => a + b, 0) * 7;
const totalTubosRotos = tubosRotos.reduce((a, b) => a + b, 0);
console.log(`Total de tubos fluorescentes rotos en un año: ${totalTubosRotos}`);
console.log(`Costo total de reemplazar los tubos fluorescentes en un año: ${costoTotal} USD`);
