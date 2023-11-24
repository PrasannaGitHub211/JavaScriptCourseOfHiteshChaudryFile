//scope chaining mean in below code function can access the variable outside of that function but outside code
//- cannot access the varible in specific function or in that function

var name="Prasanna";
console.log("line number 2 "+name);

function sayMyName(){

    console.log("My name is "+name);
}
sayMyName();

function sayMyNameAgain(){
    var name="Deepak";
    console.log("My name is "+name);
}
sayMyNameAgain();


function sayMyName2(){
    console.log("My name is line 21 as  "+name);
    
    sayMyName2Again();
    function sayMyName2Again(){
        console.log("My name is at line 25 as "+name);
    }
}

sayMyName2();