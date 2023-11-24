const student = {
    age:26,
    name:{
        firstName:"Prasanna",
        lastName:"Naik",
    },

};

student.age = 12;
console.log(student);

Object.freeze(student);

student.age = 20;

console.log(student);

student.name.firstName = "Not a Prasanna";

console.log(student);

Object.freeze(student);

student.name.firstName = "Prasanna again";

console.log(student);