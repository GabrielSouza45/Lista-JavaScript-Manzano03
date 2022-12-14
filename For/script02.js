// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 

let n = prompt("Digite um valor");

for(let i=1; i<=10; i++){


    const parag = document.createElement("p");
    const node = document.createTextNode(`${n} * ${i} = ${n*i} `);

    parag.appendChild(node);
    document.getElementById("roll").appendChild(parag);
   
}