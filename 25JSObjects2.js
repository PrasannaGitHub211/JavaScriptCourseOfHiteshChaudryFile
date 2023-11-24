var User = function(firstName,courseCount) {                //when we are creating prototype its recomended to use uppercase her for example User
    this.firstName = firstName;         //this is one of the way of defining objects
    this.courseCount = courseCount; 
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    };
};

var prasanna = new User("Prasanna",2);   //here new keyword is responsible invoking a constructor and creating
                                        //unique instance everytime
console.log(prasanna);
var deepak = new User("Deepak",3);
console.log(deepak);