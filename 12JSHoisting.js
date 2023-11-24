//global context we call it as window object available in browser console
//global context available in node means in editor like vs code but with difffernet name. empty object

//function declaration are scanned and made available means we can call function befor declaring that function
//variable declaration are scanned and made undefined 


function tipper(a){
    var bill = a;
    console.log(bill+5);
}
tipper(7);

function tipper2(a){
    var bill = a;
    console.log(bill+5);
}
tipper2("7");

function tipper3(a){
    var bill = parseInt(a);
    console.log(bill+5);
}
tipper3("7");


bigTipper(200);
 function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill+15);
    
}

//variable declaration are scanned and made undefined --here function declared in variable
// bigTipper2(200);
// var bigTipper2 = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+15);
    
// }

//variable declaration are scanned and made undefined 
console.log(name);
var name = "Prasanna";

//-------------------------------------------------------------------------------------------

function sayMyName(){
    var name = "Deepak";//this name is in its  own context that sayMyName() context
    console.log(name);
}
sayMyName();

console.log(name);