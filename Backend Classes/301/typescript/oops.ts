 // ! task find limitation of polyfil
 
 abstract class vedicle{
    engine : string;
    wheel : number;
    constructor (engine:string, wheel: number){
        this.engine = engine;
        this.wheel = wheel
    }
    startEngine(){
        console.log(this.engine, "Strated");
    }
}    // we di=ont buy alone single engine and wheel 
// so we restrict that so we cant create instance 
// so we use befor class abstract



class car extends vedicle{
    isAc : boolean;
    price : number;
    constructor(engine:string, wheel: number, isAC : boolean, price : number){
        super(engine, wheel);
        //super is the part of the 
        this.isAc = isAC;
         this.price = price
    }
};
class bus extends vedicle{
    no_of_seat : number;
    ticket : number;
    constructor(engine:string,wheel: number,ticket : number,  no_of_seat: number){
        super(engine, wheel);
        //super method
        this.no_of_seat = no_of_seat;
         this.ticket = ticket
    }
    startEngine():void{
        // it can be totally new complex code
        alert(this.engine + "Strated");
    }
    //void means this functtion will not return anything
};
// both engine and wheel are common 
// this extends vala part is inheritance

const C = new car("ii",4,true,300);
