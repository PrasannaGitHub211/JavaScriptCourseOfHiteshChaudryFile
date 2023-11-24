// var num1=5;
// var num2=7;

// console.log(num1+num2);

// var result = num1>num2;
// console.log(result);

var sellingPrice=199;
var listingPrice=799;
var discount=((listingPrice-sellingPrice)/listingPrice)*100;
console.log("discount percentage is "+ discount);
displayDiscountPercentage=Math.round(discount);
console.log("discount percentage is "+ displayDiscountPercentage+" % Off");

var result=listingPrice>sellingPrice;
console.log(typeof result);
console.log(typeof displayDiscountPercentage);