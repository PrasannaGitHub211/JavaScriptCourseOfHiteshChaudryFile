
function init() {
    
   

    var firstName = "Prasanna Naik";

    function syaFirstName() {
        console.log(firstName);
    }

   return  syaFirstName;
}

var value = init();
value();// this is now closure 


//if we declare var variableName = init() means storing function inside  variable 
// and return sayFirstName which is refference of function i.e, return sayFirstName; inside of init()
// then we can access firstName variable outside of init() that is closure
// i.e., var variableName = init();     
//variableName();
//we will learnabout that closure after this lexical scoping


//-----------------------------------------------------------------------------------------
function doAdd(x) {
    return function (y) {
        return x+y;
    }
}

var addOne = doAdd(7);
console.log(addOne(8));//taddOne() is now closure

console.log(doAdd(12)(13));// this is called currying

