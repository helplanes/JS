var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        
        case "subadmin":
            return `${name} is sub-admin with minor access`;
        
        case "testprep":
            return `${name} is test preper`;
        
        case "user":
            return `${name} had consuming access`;

        default:
            return `${name} is a visitor`;
    }
}

console.log(getUserRole("Krish", "user"));