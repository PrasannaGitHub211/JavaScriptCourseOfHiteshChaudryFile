//Create an  aweb application with following roles:
//Admin - get full access
//sub admin - get access to create/delete course
//testprep - get acess to create/delete test
//user  - get access to course or consume content
var user="testprep";

switch (user) {
    case "Admin":console.log("You get full access");
        
        break;
    case "sub admin":
        console.log("You get access to create/delete course");
    break;
    case "testprep": 
    console.log("You get acess to create/delete test");
    break;
    case "user":
        console.log("You get access to course or consume content ");
    break;
    default: 
    console.log("Trail user");
        break;
}