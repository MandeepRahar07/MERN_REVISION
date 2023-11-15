// One instance of a class => Signleton pattern

class database {
    url : string;
    static instance : database | null = null; // dif one is type null andother is value null
    private constructor(url : string){
        this.url = url;
    }
    //use private so now we can use consructer outside the class but we can use it in he class
    // now i can create zero instance

    create(){
        console.log("ok")
    }
    static connect(url: string){
        if(database.instance !== null){
            return database.instance;
        }
        database.instance = new database(url);
        return database.instance;

    }
    // at here i am able to crreate new bcz its in the class
}

// const db = new database("helo");
// constructer code run when we use new
// so i am able to do new bcz of constructer

const db = database.connect("");
// so now we can create many connect so control this we use count and track

// factory pattern do own 

// students
// apply pagination
//? Students.find().skip().limit().exec();
//Students.find().skip().exec(); this we can also use
function skip(){
    return{
        limit(){}
    };
}
 skip().limit(); // both are same

 class person{
    name? : string;
    age? : number;
    constructor(){
    // this.name = name;
    // this.age = age 
    }
    setname(name : string){
        this.name = name;
        return this;
    }
    setage (age:number){
        this.age = age;
        return this;
    }
 }
 const p1 = new person().setage(20).setname("a")
/// order of param should be same 


//facade pattren

//its powerplant ,, ,, lot of things going here
// if i am going on door and take my package and go to home


//observation pattern 
// tweet
// youtube

class Channel{
 
    subscriber : user[];
    name : string;
    constructor(name : string){
        this.name = name;
        this.subscriber = [];
    }
    subscribe (user : user)
}

class user{
      name : string;
      email : string;
      notifications : string[];

      constructor(name : string, email : string){
        this.name = name;
        this.email = string;
        this.notifications = string[]
      }
}