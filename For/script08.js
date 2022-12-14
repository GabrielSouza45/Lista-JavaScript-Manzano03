// Elaborar  um  programa  que  apresente  como  resultado  o  valor  de  uma  potência  de  uma  base qualquer
// elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. 
// Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 


let exponenciacao=1;
let base = parseInt(prompt("Digite a base: "));
let exp = parseInt(prompt("Digite o expoente: "));

for(let i=0; i<=exp; i++){

        const parag = document.createElement("p");
        const node = document.createTextNode(`${base} elevado a ${i} = ${exponenciacao}`);
    
        parag.appendChild(node);
        document.getElementById("roll").appendChild(parag);
       
        exponenciacao=exponenciacao*base;

}