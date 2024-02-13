function outerFunction(num) {
  let a = 4;
  console.log("Variable a is", a);
  return function innerFunction() {
    let c = a + num;
    console.log(
      "This is a return function inside outer function has access of variable a due to lexical scoping and sum is",
      c
    );
  };
}

const innerAccess = outerFunction(5);
innerAccess();
//The variable which are created inside the outer function keeps the access to the variable outside it's scope if the variable is not present in that particular scope where it is being used then it steps one scope out
