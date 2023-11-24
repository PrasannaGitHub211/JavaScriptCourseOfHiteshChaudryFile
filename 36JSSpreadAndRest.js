
// var returnedValue = Math.max(1,4,2,7,9,6);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj,{a:1,c:7,d:5},{z:8,x:5,l:6});

// console.log(myObj);


function sumOne(a,b) {
    return a+b;
    
}

console.log(sumOne(4,5));
console.log(sumOne(1,6,3));

var myA = [7,8];
console.log(sumOne(myA));
console.log(sumOne(...myA));//...spread operator



function sumTwo(...args) {  //...spread operator
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(1,2,3,4,5,6,7,8,9));



function multiplyAndSum(a,b,...args){
    console.log(args);
    let mult = a*b;
    let sum = 0;
    for(const arg of args){
        sum = sum+arg;
    }

    return [mult,sum];
}


console.log(multiplyAndSum(2,3,4,5,6,7));
