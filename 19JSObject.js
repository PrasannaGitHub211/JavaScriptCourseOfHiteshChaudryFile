//object in JS

var users = {
    firstName : "Prasanna",
    lastName : "Naik",
    role: "Admin",
    loginCount: 34,
    signInWithFacebook: true
};

console.log(users.firstName);
console.log(users["role"]);

users.loginCount = 45;
console.log(users.loginCount);

console.log(users);
console.table(users);


//-----------------------Objects Part 2 --------------------------------------------
var users2 = {
    firstName : "Prasanna",
    lastName : "Naik",
    role: "Admin",
    loginCount: 34,
    signInWithFacebook: true,
    courseList :[],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);   //here this keyword reffers to users2 context
    },
    getCourseCount : function (params) {
        return`${this.firstName} is enrolled in total cousre of ${this.courseList.length}`
    },
    info: function (params) {
        return`Whole info of user as follows firstName is ${this.firstName} lastName is ${this.lastName}
        role of him/her is ${this.role} loginCount is ${this.loginCount} and he/she signInWithFacebook is 
        ${this.signInWithFacebook}`
        
    }
};

console.log(users2.getCourseCount());

users2.buyCourse("ReactJs");
users2.buyCourse("AngularJs");
console.log(users2.getCourseCount());


console.log(users2.info());