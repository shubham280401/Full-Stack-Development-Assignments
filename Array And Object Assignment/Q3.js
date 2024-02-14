"use strict";
let student = [
  {
    Name1: "Shubham",
    hobby1: "webdev",
  },
  {
    Name2: "Sanket",
    hobby2: "Coding",
  },
  {
    Name3: "Shrey",
    hobby3: "devOps",
  },
];
Object.preventExtensions(student);
// student.age = 23; it will trow an error 'TypeError: Cannot add property age, object is not extensible'
console.log(student.age); // thus it is not able to add new property;
const extensibleStatus = Object.isExtensible(student); //returns false as it is not extensible

let teacher = {
  subject: "Math",
};
Object.seal(teacher);
let sealedStatus = Object.isSealed(teacher);
console.log(
  "Extensible status is",
  extensibleStatus,
  "Sealed status is",
  sealedStatus
);
