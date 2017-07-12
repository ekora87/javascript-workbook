function getDates () {
  return new Date();
}

function convertToString (num) {
  return num.toString();
}

function convertToNumber (str) {
   return parseInt(str);
};



function addNumber (x, y) {
  return x + y;
};

function twoTrue (num1, num2) {
  if (num1 > 10 && num2 < 10){
    return "Both are true";
  };
};

function oneTrue(num1, num2){
  if ((num1 % 2 == 0) || (num2 % 2 == 0)){
     return "One number is an even number";
  };
};

function notTrue(num1, num2){
  if ((num1 % 2 != 0) && (num2 % 2 != 0)){
    return "Both are not true";
  };
};

function dataTypes(value){
  return typeof value;
};

getDates();
convertToString(5);
convertToNumber("test");
addNumber(3,4);
twoTrue(12, 6);
oneTrue(1, 1);
notTrue(1,1);
dataTypes(12345);
