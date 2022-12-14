//   Elaborar  um  programa  que  apresente  como  resultado  o  valor  do  fatorial  dos  valores  ímpares situados na faixa numérica de 1 a 10. 

let acumuladora = 1;

for (let i = 1; i < 10; i++) {
    
    let resto = i % 2;
    if (resto == 1) {
       
        for (let fat = 1; fat <= i; fat++) {
             acumuladora = fat*acumuladora;

        }

        const parag = document.createElement("p");
        const node = document.createTextNode(`${i}! = ${acumuladora}`);
    
        parag.appendChild(node);
        document.getElementById("roll").appendChild(parag);
    
        acumuladora=1;
    }

}