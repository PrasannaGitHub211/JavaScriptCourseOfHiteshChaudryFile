const uid="abc123";
var fullName="Prasanna Gajanan Niak";
var email="prasanna@gmail.com";
var password="password";
var confirmPassword="password";
var courseCount=0;
var isLoggedInFromGoogle= false;

//fullName = prompt("Enter your full name");
console.log(uid);
console.log("full name is "+ fullName);
console.log(email);

//interpolation
console.log(`
User full name is : ${fullName},
his user id is: ${uid},
his email is : ${email},
his password is : ${password}
`)