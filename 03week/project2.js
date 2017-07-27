'use strict';

var carInReverse = ['Acura', 'Toyota', 'Honda', 'Lexus', 'Infiniti', 'BMW', 'Porsche', 'Mazda'];

for (var i = 0; i < carInReverse.length; i++) {
  console.log(carInReverse[i]);
}
var persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
};
for (var x in persons) {
  console.log(x);
}

for (x in persons) {
  if (x === 'birthDate') {
    console.log(persons[x]);
  }
}

var num = 1;
while (num <= 1000) {
  console.log(num);
  num++;
}

var num2 = 1;
do {
  console.log(num2);
  num2++;
} while (num2 <= 1000);
