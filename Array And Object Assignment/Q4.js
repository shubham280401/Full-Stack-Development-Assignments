"use strict";
const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    grade: "B",
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 19,
    grade: "A",
  },
];

//a. Adding a new student
let addNewStudent = function (id, firstName, lastName, age, grade) {
  students.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    age: age,
    grade: grade,
  });
  return students;
};
let result = addNewStudent(4, "Sam", "Musk", 23, "A");
console.log(result);
//b. update student info by id

function updateStudentInfoById(id, studentInfo) {
  const index = students.findIndex((student) => student.id === id);

  if (index !== -1) {
    return (students[index] = { ...students[index], ...studentInfo }); //Using the spread operator we can The spread operator (...) is used to create a new object that merges the existing properties of the found student (students[index]) with the new properties provided in studentInfo.
  }
  return "Invalid input";
}
let result2 = updateStudentInfoById(4, { age: 24, grade: "A" });

//c. Delete a student
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    return students.splice(index, 1);
  }
  return "Invalid input";
}
let result3 = deleteStudent(1);

//d. List of all students
function listOfAllStudents() {
  return students;
}

//e. Find students by grade

function findStudentsByGrade(grade) {
  return students.filter((student) => student.grade === grade);
}

//f.Calculate average age

function calculateAverageAge() {
  let sumOfAge = students.reduce((acc, student) => acc + student.age, 0);
  let averageAge = Math.round(sumOfAge / students.length);
  return averageAge;
}

console.log("The updated student array is", result);
console.log("The updated info is", result2);
console.log("List off all students", listOfAllStudents());
console.log("The student with grade A is", findStudentsByGrade("A"));
console.log("The average age is", calculateAverageAge());
