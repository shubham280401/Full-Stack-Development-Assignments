"use strict";
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//SOrting the array
ages.sort();
console.log("Sorted array: ", ages);
let min = ages[0]; // Min of an array
let max = ages[ages.length - 1]; //Max of an array
console.log("Max is", max, "Min is", min);

//Calculating Median
let median;
let middleElementIndex = Math.round(ages.length / 2);
if (ages.length % 2 === 0) {
  median = (ages[middleElementIndex - 1] + ages[middleElementIndex]) / 2;
} else {
  median = ages[middleElementIndex] / 2;
}
console.log("Median is: ", median);

//Calculating average age
let sumOfAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumOfAges / ages.length;
console.log("Average age is: ", averageAge);
/*
function averageAge(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  return sum / ages.length;
}
console.log(averageAge(ages));
*/

//Finding range
let range = max - min;
console.log("Range is: ", range);

//Compare values
let maxDifference = Math.abs(max - averageAge);
let minDifference = Math.abs(min - averageAge);
let comparision = maxDifference > minDifference ? "max-average" : "min-average";
console.log(`The ${comparision} has higher value.`);
