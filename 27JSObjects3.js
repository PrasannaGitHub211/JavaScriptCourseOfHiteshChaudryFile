var User = {
    name:"",
    getUserName: function (params) {
        console.log(`User name is: ${this.name}`);
    },
};

var prasanna = Object.create(User);
console.log(prasanna);

prasanna.name = "Prasanna Naik";
prasanna.getUserName();

//------------------------------------------------------------------------
// another way of creating object
var deepak = Object.create(User,{
    name:{value:"Deepak"},
    courseCount:{value:4},
});

deepak.getUserName();


