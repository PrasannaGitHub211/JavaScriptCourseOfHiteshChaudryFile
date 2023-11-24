function isEven(element) {
    // if(element%2==0){
    //     return true;
    // }
    // return false;
    return element%2==0;
    
}
console.log(isEven(7));

//arrow funation
var isEven2 = (element)=>{
    return element%2==0;
}

console.log(isEven2(9));


//call back function are the function that dont have any name but they are very helpful as below
//Here every is callback function and here we did not call the isEven() as function but we pass isEven as a refference
var result = [2,10,8,6,12].every(isEven); 
console.log(result);

var result2 = [2,4,6,8,10].every((e)=>{
    return e%2===0;
}
)
console.log(result2);

var result3 = [2,4,6,8,10].every((e)=> e%2===0);
console.log(result3);