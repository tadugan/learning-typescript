// defining object types
// let car: {
//     make: string
//     model: string
//     year: number
// }
// Optional properties
function printCar(car) {
    let str = `${car.make} ${car.model} (${car.year})`;
    car.chargeVoltage;
    //    ^?
    if (typeof car.chargeVoltage !== "undefined")
        str += `// ${car.chargeVoltage}v`;
    //                 ^?
    console.log(str);
}
const timsCar = {
    make: 'Honda',
    model: 'Accord',
    year: 2010
};
printCar({ make: 'Honda', model: 'Accord', year: 2010 });
printCar(timsCar);
// Typescript does not like extra/undeclared properties
// printCar({make: 'Buick', model: 'Electro', year: 2020, color: 'Red'});
