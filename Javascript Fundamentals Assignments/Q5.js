function deliveryTimeCalculator(packageType) {
  switch (packageType) {
    case "standard":
      return "estimated delivery time is 3-5 days";
      break;
    case "express":
      return "estimated delivery time is 1-2 days";
      break;
    case "overnight":
      return "estimated delivery time is next day";
    default:
      return "Invalid Input";
  }
}
console.log(deliveryTimeCalculator("overnight"));
console.log(deliveryTimeCalculator("standard"));
console.log(deliveryTimeCalculator("express"));
console.log(deliveryTimeCalculator("osuperfast"));
