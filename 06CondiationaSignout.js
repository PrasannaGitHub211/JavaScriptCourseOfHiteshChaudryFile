//Show user a sign out button if user is authenticated
//other wise show him of option signin/signup

var authenticated=true;

if(authenticated){
    console.log("Show sign out button");
}else{
    console.log("Show signIn/signOut button");
}

//ternary operator
authenticated?console.log("Show sign out button"):console.log("Show signIn/signOut button");