// var user = ["Prasanna",3,"Admin"];
//instead of writing this-----
// var name = user[0];
// var role = user[2];

//writing this
// var [name, courseCount, role] = user;
// console.log(name);
// console.log(role);
// console.log(courseCount);



const myUser = {
    name:"Prasanna",
    courseCount:3,
    role:"Admin",
};


const {name,courseCount,role} = myUser;
console.log(name);
console.log(courseCount);
console.log(role);
