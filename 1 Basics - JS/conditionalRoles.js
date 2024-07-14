var user = "admin";

switch (user) {
    case "admin":
        console.log("You Gain Full Access");
        break;

    case "subadmin":
        console.log("Access to Create/Delete Data");
        break;

    case "testprep":
        console.log("Access to Create/Delete/Manage Tests");
        break;

    case "user":
        console.log("Only Frontend Access");
        break;

    default:
        console.log("Visitor:- No Access to Comments and Courses-Detailed-View");
        break;
}