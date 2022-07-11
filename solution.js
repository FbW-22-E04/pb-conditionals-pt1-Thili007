// Exercise - 01

var int1 = 30;
var int2 = 20;

if (int1 >= 50 && int1 <= 99) {
  console.log(true);
} else if (int2 >= 50 && int2 <= 99) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise - 02

var int3 = 90;
if (int3 >= 50 && int3 <= 99) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise - 03

var a = 50;
var b = 800;
var c = 100;

if (Math.max(a, b, c)) {
  console.log(Math.max(a, b, c));
}

if (Math.max(int1, int2, int3)) {
  console.log(Math.max(int1, int2, int3));
}

// Exercise - 04

let str = "thon";

if (str == "Py") {
  console.log(str);
} else {
  console.log("Py" + str);
}

// Exercise - 05

let intTotal = int1 + int2;

if (intTotal >= 50 && intTotal <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// Exercise - 06

let int4 = 10;
let int5 = 5;

let intTotal2 = int4 + int5;

if (intTotal2 == 8) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise - 07

if (int4 == 15 || int5 == 15 || intTotal2 == 15) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise - 08

if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise - 09

if (int4 === int5) {
  console.log(int4 + int5 * 3);
} else {
  console.log(int4 + int5);
}

// Exercise - 10

let intTotal3 = int5 - 19;

if (intTotal3 > 19) {
  console.log(intTotal3 * 2);
} else {
  console.log(intTotal3);
}

// Exercise - 11

var firstName = "Thili";
var age = 30;

if (age < 13) {
  console.log("firstName is a child");
} else if (age >= 13 && age < 20) {
  console.log("firstName is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("firstName is a young adult");
} else {
  console.log("firstName is a adult");
}
