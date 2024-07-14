var email = true;
var facebook = true;
var google = false;

if (email && (facebook || google)) {
    console.log("Login Successful");
}