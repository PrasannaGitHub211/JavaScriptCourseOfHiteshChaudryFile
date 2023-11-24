var User2 = function (firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (params) {
        console.log(`Course count is ${this.courseCount}`);
    };
};

//this below code snippet is Proto means we are not defining getFirstName inside user2 Object
//but outside of User2 object we are injecting getFirstName method to User2 object
User2.prototype.getFirstName = function (params) {
    console.log(`Your first name is: ${this.firstName}`);
}

var prasanna = new User2("Prasanna",3);
var deepak = new User2("Deepak",2);

prasanna.getCourseCount();
//console.log(prasanna.firstName);

//caling injected method getFirstName of User2 object using concept of Proto i.e., User2.prototype.getFirstName
prasanna.getFirstName();
deepak.getFirstName();


//------------------------------------------------------------------------------------------------------
//Suppose in aboue code snippet there are chances of error for example 
//getFirstName inside object User2 but while inecting getFirstName() to User2 object in that getFirstName()
//we may give getFirstNameee which is spelling mistake which cause output undefined when we eecute the code
//i.e.,  console.log(`Your first name is: ${this.firstNamee}`);
//to over come this we use below hasOwnProperty() 
if(prasanna.hasOwnProperty("firstName")){
    prasanna.getFirstName();
}

//instead of calling like this injected method directly
//prasanna.getFirstName();
//deepak.getFirstName();