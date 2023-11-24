//Allow user to access course if he/she:
//logged in from email
//logged in from facebook
//logged in from Google
var email=true;
var facebook=false;
var google=false;

if(email||facebook||google)
{
    console.log("Logged in successfull");
}