function checkRegex(pattern, input) {
  let regex = new RegExp(pattern);
  return regex.test(input);
}
console.log(checkRegex(/[a-z]+/, "hello"));
console.log(checkRegex(/[A-Z]+/, "hello"));
console.log(checkRegex(/\w+@\w+\.\w+/, "example@example.com"));
console.log(checkRegex(/\d{2}\/\d{2}\/\d{4}/, "12/31/2022"));
console.log(checkRegex(/\d+/, "123"));
