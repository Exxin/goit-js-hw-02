function getShippingCost(country) {
  switch (country.toLowerCase()) {
    case "china":
      return "Shipping to China will cost 100 credits";
    case "chile":
      return "Shipping to Chile will cost 250 credits";
    case "australia":
      return "Shipping to Australia will cost 170 credits";
    case "jamaica":
      return "Shipping to Jamaica will cost 120 credits";
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
