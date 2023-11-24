var countryies = ["India","USA","Switzerland","Australia"];
var states = new Array("Karnataka","Rajastan","Maharastra","Kerala");
console.log(states);
console.log(states[0]);
console.log(states.length);
states[1] = "Punjab";
console.log(states);

var user = ["Prasanna","prasanna@gmail.com",3,35,true]
console.log(user);
user.pop();
console.log(user);
user.push(true)
console.log(user);
console.log(user.indexOf(35));
console.log(user.indexOf(39));

//converting String into array
console.log(Array.from("Introduction to Array in javascript"));