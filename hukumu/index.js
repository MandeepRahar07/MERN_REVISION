function abc(number){
    return function(numl2){
        console.log(number*numl2);
    }
}
const data = abc(5);
data(6);