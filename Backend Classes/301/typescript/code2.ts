// let gender : string = "male";
// i have to manual write the male part 
type GenderType = "Male" | "Female" | "Other"
let gender : GenderType = "Male";
 //   | it working like OR .... unions
function IsFemale (a: GenderType){
    if(a === "Female") return true;
    return false;
}
IsFemale("Male");

const z : string | number ="";
//  || for JS+TS | for TS

// if(z === "p" || z===10){
//     console.log("ehlo")
// }
// if also in the js, 


