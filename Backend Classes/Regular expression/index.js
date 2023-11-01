const regularexp = /xa*by/
//frist find ab and then it will see single character
// const reularrexp2 = new RegExp(".");
const string = "xby"

//testing partt
// .  means any single character
// .. any two character in the string 
//a..b ab. .bc 
// zero or more repetiions of previous character
// /xa*by/
// + 1 or more repretions of *preivious character
// /xa+by*/ x hai, a hai 1 ya jyda bar, b hai, y hai zero ya jyda bar
// xb => /x..*b*y/ true 1 . to star ke sath hi add hai
// ^ -> start if a character
// /^b/ b se string start hogi 
// /^xb+y*/ = 'xbbyyyyyy'
// $ => string end with the character
// xbbmmmmmmyy /x+b*.*y$/

const result = regularexp.test(string)
        console.log(result);

// .match method - metched_value or null

   const match = string.match(regularexp)
     console.log(match);

     //its justufy that why test is true because dd in the string it will
// .................................star ...........
