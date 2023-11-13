// how to declaring a variable
// let a = 10;

let a :number = 10; 
// its autometic take it type;
// a = true
// in norml js its ok but not in TS;
 let b : string = "masai";
 let c : boolean = true;
//Arrays
 let d:number[]=[1,2,3];
 // if give another type in the array it will give me an array
//  String and string are not same
// String for js and string for TS

////////////////////////////////////////////////////////

//Tuples(Not part of JS)
//RGB colors
//RGB (100,200,100)
let RGB: [number,number,string]= [100,200,"300"];
// if i add 900,800 , now we are break the rule of the RGB 
// with that we can fix the number of element in the array 
// if i add more value it will show me an arror


///////////////////////////////////////////
// enum
enum Roles {
    super_admin ="Super Admin",
    admin ="admin",
    user = "user"
}
// its just normal object
// we cant change the value
// enum have generate autometic index for the roles
// we use this when dont want change assigned value



console.log(Roles.admin);
const greet = "good morning";
console.log(   greet," bhabhi ji")
console.log( greet, " bhabhi ji")

// object created
// normal way
let h :{
    name : string,
    age :  number,
    isMarried : boolean
} = {
    name : "mona ",
    age : 40,
    isMarried : true
}

//

//
// let type ={
//     name : string,
//     age :  number,
//     isMarried : boolean
// }
// we cant do this

 type obj ={
    name : string,
    age :  number,
    isMarried : boolean
}
// throgh this we modify the object and we can define types and use it again and agian

let g :obj = {
    name : "mona ",
    age : 40,
    isMarried : true
}


