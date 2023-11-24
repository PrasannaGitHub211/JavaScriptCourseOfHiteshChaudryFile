// import User from "./37JSCass";
const obj1 = require("./37JSCass")

const user1 = new obj1("Prasanna","prasanna@gmail.com");

console.log(user1.getInfo());
console.log(user1.getInfo().email);

user1.enrollCourse("React JS Boot camp");
user1.enrollCourse("Angular JS Boot camp");
user1.enrollCourse("Vue JS Boot camp");
console.log(user1.getCourseList());

let courses = user1.getCourseList();
courses.forEach(c=>console.log(c))
