//define a function that can answer the role of user
//A user can be on following role.
//Admin - get full access
//sub admin - get access to create/delete course
//testprep - get acess to create/delete test
//user  - get access to course or consume content
//other- trail user
//Input: getUserRole(name,role)

function getUserRole(name,role){
    switch (role) {
        case "admin":
           return`${name} get full access`;    
            break;// this is not necessary
        case "sub admin":
           return`${name}  get access to create/delete course`;
            break;
        case "testprep":
           return`${name} get acess to create/delete test`;
            break;
        case "user":
           return`${name} get access to course or consume content `;
        default:
            return`${name} trail user`;
            break;
    }
}

console.log(getUserRole("Prasanna"));
var getRoleVar = getUserRole("Deepak","sub admin");
console.log(getRoleVar);

//function in variable
var getUserRoles =  function (name,role){
    switch (role) {
        case "admin":
           return`${name} get full access`;    
            // break;// this is not necessary
        case "sub admin":
           return`${name}  get access to create/delete course`;
            // break;
        case "testprep":
           return`${name} get acess to create/delete test`;
            // break;
        case "user":
           return`${name} get access to course or consume content `;
        default:
            return`${name} trail user`;
            // break;
    }
}
console.log(getUserRoles("Prasanna"));
var getRoleVar = getUserRoles("Deepak","sub admin");
console.log(getRoleVar);