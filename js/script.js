//stampare numeri da 1 a 100


for (let n = 1; n <= 100; n++){
    

    let mulTre = "";
    let mulCinque = "";
    let mulTop = "";
    if (n % 3 === 0){
        mulTre = "mtre";
    } 

    if (n % 5 === 0) {
        mulCinque = "mcinque";
    } 

    if (n % 3 === 0 & n % 5 ===0){
        mulTop = "mtop";
    }
    console.log(n, mulTre, mulCinque, mulTop);
   
    

}
//SE il numero è multiplo di 3 stampare fizz
//ALTRIMENTI SE il numero è multiplo di 5 stampare buzz
//ALTRIMENTI stampare numero
//per i multipli di 3 e 5 stampare FizzBuzz