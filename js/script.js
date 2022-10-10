//stampare numeri da 1 a 100

const row = document.querySelector(".row");
console.log(row);

for (let n = 1; n <= 100; n++){
    

    let mulTre = "";
    let mulCinque = "";
    let mulTop = "";
    const col = document.createElement("div");
    col.innerHTML = n;
    
    if (n % 3 === 0 & n % 5 === 0){
        mulTop = "fizBuzz";
        col.innerHTML = mulTop;
        col.classList.add(mulTop);

    } else if ( n % 3 === 0) {
        mulTre = "fizz"
        col.innerHTML = mulTre;
        col.classList.add(mulTre);
    } else if ( n % 5 === 0) {
        mulCinque = "buzz";
        col.innerHTML = mulCinque;
        col.classList.add(mulCinque);
    } 
    
    
    col.classList.add("col");
    
   
    row.append(col);
    console.log(n);

  

    
   
    

}
//SE il numero è multiplo di 3 stampare fizz
//ALTRIMENTI SE il numero è multiplo di 5 stampare buzz
//ALTRIMENTI stampare numero
//per i multipli di 3 e 5 stampare FizzBuzz