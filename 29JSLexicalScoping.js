//lexical scoping is about writing JS in a classical way
//here below code snippet firstName variable scope is inside init function
// and it can be accessed by sayFirstName() also which is inside init()
// but firstName cant be accessed outside of that init()
//as we see console.log(firstName) will give firstName is undefined once we execute the code


function init() {
    
    var firstName = "Prasanna Naik";
    function sayFirstName(paras) {
        console.log(firstName);
    }
    sayFirstName();
}

init();

console.log(firstName);


//but if we declare var variableName = init() means storing function inside  variable 
// and return sayFirstName which is refference of function i.e, return sayFirstName; inside of init()
// then we can access firstName variable outside of init() that is closure
// i.e., var variableName = init();     
//variableName();
//we will learnabout that closure after this lexical scoping
