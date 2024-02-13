function checkRegex(pattern, str) {
  let match = str.match(pattern);
  if (match) {
    let day = match[1];
    let month = match[2];
    let year = match[3];

    return {
      day: day,
      month: month,
      year: year,
    };
  } else {
    return "No match found";
  }
}

let result = checkRegex(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, "01/04/2023");
console.log(result);
