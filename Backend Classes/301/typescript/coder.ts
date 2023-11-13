type User = {
    name : string,
    age : number;
    email? : string
}

const u1 : User ={
    name : "mandeep",
    age : 4,
    email : "mandeep@gmail.com"
}

//if i romove anything now it will so me arror,
// everythign is required
// use ? now it will become optional
// it can be there or not be there will not show any error
 
let users: User[]=[];
// define array of object
