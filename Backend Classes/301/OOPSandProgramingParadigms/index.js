function isValid(sec){
    if(sec > 84600){
        for(let i = 0; i<=sec; i++){
             console.log(i);
        }
    }
}
// nothing is wrong in this code 
// how you can make it more readable
const sec_in_day = 84600;
function isValid(sec){
    if(sec > sec_in_day){
        for(let i = 0; i<=sec; i++){
             console.log(i);
        }
    }
}

//22222
//class and constructer

class Person {
    constructor (name, gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    isMarriageble(){
        if(this.age < 21) return false;
        return true
    }
}

const p = new Person("a", "M");
// p is intent of class
console.log(p);
p.isMarriageble();





