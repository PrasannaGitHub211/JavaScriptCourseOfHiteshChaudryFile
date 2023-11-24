//fill
const testArray = [2,1,3,6,9,4,7,8];
// console.log(testArray.fill('p'));
// console.log(testArray.fill('v',3));
console.log(testArray.fill('s',3,6));


//filter
const myNumber = [12,34,43,56,74,85,97];
const result = myNumber.filter((num)=>num!=56);
console.log(result);
const result2 = myNumber.filter((num)=>num%2==0);
console.log(result2);