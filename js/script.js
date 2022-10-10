//stampare numeri da 1 a 100


for (let n = 1; n <= 100; n++){
    

    let mulTre = "";
    let mulCinque = "";
    let mulTop = "";

    if (n % 3 === 0 & n % 5 === 0){
        mulTop = "FizBuzz";
        console.log(mulTop);
    } else if ( n % 3 === 0) {
        mulTre = "Fizz"
        console.log(mulTre);
    } else if ( n % 5 === 0) {
        mulCinque = "Buzz";
        console.log(mulCinque);
    } 

    console.log(n);

  

    
   
    

}
//SE il numero è multiplo di 3 stampare fizz
//ALTRIMENTI SE il numero è multiplo di 5 stampare buzz
//ALTRIMENTI stampare numero
//per i multipli di 3 e 5 stampare FizzBuzz