// let gender : string = "male";
// i have to manual write the male part 
// type GenderType = "Male" | "Female" | "Other"
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
//////////////////////ops and programing
type GenderType = "Male" | "Female" | "Other"
// type eliyaas         unions type   
interface PersonType{
    name : string;
    age? : number;
}

// when create multipal classes wih same sturcture
// only use with object interface
const p: PersonType ={
    name : "",
    age : 20
}

class Person implements PersonType {
    name: string;
    gender: GenderType;
    
    constructor (name :string, gender: GenderType,age: number){
        this.name = name;
        this.gender = gender;
        
    }
    // isMarriageble(){
    //     if(this.age < 21) return false;
    //     return true
    // }
}


//  4) ENCAPSULATION
 ////////////

// let id_counter = 1;
// its outside the constructer show it will no effect by constructer
// implyment same things in the construct we use  private word before the id_counter
// but we want when one constructer increase the count and we 
// again call the constructer then it will take increase value 

class students{
    name: string;
    age : number
   private id : number;
   a : number;
   static id_counter:number = 1;
    constructor(name : string, age : number){
      this.name = name;
      this.age = age;
      this.a = 1;
      this.id = students.id_counter
    //    this.id = id_counter;
       //we cant access this id if use static 
       students.id_counter++;
    }
    get ID(){
        return this.id;
    }

    // get always return something
}


const s= new students("a", 20);
s.age = 10; //its allowed
// s.id = 12; // its allowed but it will be not
// for this we use private 

console.log(s.ID); // no error
// s.ID = 10; /// now error show

s.a = 10
console.log(s.a); // 10
const t = new students("B",30);
console.log(t.a); // 30 output everytime when new students use it will change
