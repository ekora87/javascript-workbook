'use strict';
var car = ['Ford', 'Chevy', 'Jeep', 'Dodge'];
console.log('Length of car array: ' + car.length);

//Concat
var moreCars = ['Acura', 'Nissan', 'Infiniti', 'Honda'];
var totalCars = car.concat(moreCars);
console.log('Total Cars Array: ' + totalCars);

//indexOf
console.log('Index Of Honda: ' + moreCars.indexOf('Honda'));

//lastIndexOf
console.log('Last Index Of Ford: ' + car.lastIndexOf('Ford'));

//Join method
var stringOfCars = totalCars.join();
console.log('String Of Cars: ' + stringOfCars);

//Split method
totalCars = stringOfCars.split(',');
console.log('Split Method: ' + totalCars);

//Reverse method
var carInReverse = totalCars.reverse();
console.log('Reverse: ' + carInReverse);

//Sort method
var sortCars = carInReverse.sort();
console.log('Sorted Cars: ' + sortCars);

//Slice method
var removedCars = carInReverse.slice(3, 5);
console.log('Slice Cars: ' + removedCars);

//Splice method
var spliceCars = carInReverse.splice(1, 2, 'Ford', 'Honda');
console.log('Splice Cars: ' + spliceCars);

//Push Method
var pushCars = carInReverse.push('Chevy', 'Dodge');
console.log('Push Method: ' + pushCars);

//Pop Method
var popCars = carInReverse.pop();
console.log('Pop Method: ' + popCars);

//Shift Method
var shiftCars = carInReverse.shift();
console.log('Shift Car: ' + shiftCars);

//Unshift Method
var unShiftCars = carInReverse.unshift('BMW');
console.log('Unshift Car: ' + unShiftCars);

//forEach Method
var numbers = [23, 45, 0, 2];
numbers.forEach(function (element) {
  element = element + 2;
  console.log('forEach Method: ' + element);
});
