// S -> single responsibility
        //    > one class one responsibility
// O => open close principle
        // 
// L=> liscov substitution PRinciple
// when ever a child class, you should be able to replace the child with the parent class
// I +> interface  Segrigation principle
// D=> dependancy inversion principle



// single responsibility
class Student{
    constructor(){
        //define the keys here
    }
    register(){

    }
    sendEmail(){

    }
    Assignemnt(){

    }
}
//one class have many responsbility
// issue with that become complex 
// sending email is not specific,, we also send email employee 


// O => open close principle
// your code should be open for extension but 
// closed for modification
class player{
    constructor(){
        // define thekeys here
    }
slash(){};
snipe(){};
poison(){};
}

//we start with these class now we wanna add more class
//we cant modify the class
 // sowe do like this
 class player1{
    constructor(){
        // define thekeys here
    }
}

class swordman extends player1{
    constructor(){
        super();
        // define thekeys here
    }
    slash(){}
}

// L=> liskov substitution PRinciple
//

class rectangle{
    w : number;
    h : number
    constructor(w : number,h : number)
        {
            this.w = w;
            this.h = h 
        }
         setwidth(w : number){
            this.w =w;
         } 
 
         sethight(h : number){
            this.h =h;
         } 

        area(){
            return  this.w *this.h
        }
}     



class square extends rectangle{
    constructor(w : number){
        super(w,w);
    }
    setwidth(w: number): void {
        this.w = w;
        this.h = w;
    }

    setheight(h: number): void {
        this.h = h;
        this.w = h;
    }
}
// square and reactangle some are same
const sq = new square(5);
sq.setwidth(6);
console.log(sq.area()); //36

const rec = new rectangle(5,5);
rec.setwidth(6);
console.log(rec.area()); //30
// if you can replace the child class with the parend class you should not make that inheritance

// I +> interface  Segrigation principle
 interface Ientity{
     level : number;
     attack : number;
    //  levelup?: Function;
    //  followplayer ?: Function;
 }
 // we also can extends interface also
 interface Iplayer extends Ientity{
    levelup(): void;
 }

 interface IEnemy extends Ientity{
followplayer():void;
 }
 class player11 implements Ientity{
    level : number;
    attack : number;
    constructor(){
        this.level = 1;
        this.attack = 10;
    }
    levelup(){

    }
 }
 class Enemies implements Ientity{
    level : number;
    attack : number;
    constructor(){
        this.level = 1;
        this.attack = 10;
    }
    followplayer(){

    }
 }

 // D=> dependancy inversion principle
 // higher level modules shouldnt depend on lover 
// lover level modules they should depend on abstractions) 
 //http module => fetch data using this 
//  class Store{
//     product : number;
//     payment : rezopay
//     constructor(){
//         this.product = 100;
//         this.payment = new rezopay();
//     }
//  }
// /oooooooo/
 class razorpaymanage {
    razopay : Rezopay;
    constructor(){
     this.razopay = new Rezopay();
    }
    pay(rs : number){
        this.razopay.paywihtus(rs);
    }
 }
// stripe(global)
// rezopay (india)
class Rezopay{
    constructor(){
    }
    paywihtus(rs: number){
        console.log(rs);
    }
}

class stripe{
    constructor(){

    }
    paywithease (usd : number){
        console.log(usd);
    }
}

   