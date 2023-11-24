//for all regular function calls, this keyword reffers to window object

console.log(this);

const user = {
    name: 'Prasanna',
    courseCount: 5,
    getCourseCount: function(){
       console.log("Line 7",this);
    }
}
user.getCourseCount(); //this is not regular function cal this is 
//though object so it reffers to "user" object context


function sayHello(params) {
    console.log("Hello"); //  this regular function
}

sayHello();// this is regular function call and it reffers to {}in editor console and 
            //it will reffer to window object in browser console


            
 const user2 = {
    name: 'Prasanna',
    courseCount: 5,
    getCourseCount: function(){
       console.log("Line 7",this);
       function sayHii(params) {
        console.log("line 31",this);
       }
       sayHii();// here sayHII() is regular fuction not object function so it will reffer to window object means global 
                //  but sayHII() regular function inside object function 
    }
}           
user2.getCourseCount();