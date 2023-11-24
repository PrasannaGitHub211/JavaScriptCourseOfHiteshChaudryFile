const prasanna = {
    firstName:"Prasanna",
    lastName:"Naik",
    role:"Admin",
    courseCount:3,
    getFullInfo:function(){
        console.log(`
        His first name is: ${this.firstName}
        His last name is: ${this.lastName}
        His role is : ${this.role}
        and he is studying total course of :${this.courseCount}
        `);
    }
}


const dj = {
    firstName:"Rock",
    lastName:"Dj",
    role:"Sub-Admin",
    courseCount:4,

}

prasanna.getFullInfo();

//here getFullInfo() method is available in prasanna object but not in dj object
//for that instead of rewriting getFullInfo() in dj object again
// we use borrow method using bind as below
prasanna.getFullInfo.bind(dj)();  

//or as below
//var djInfo = prasanna.getFullInfo.bind(dj)
//djInfo()

