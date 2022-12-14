// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

let acumuladora=0;

for(let i=0; i<=500; i++){

    let resto= i%2;

    if(resto==0){

        const node = document.createTextNode(`${acumuladora} + ${i} = `);

        acumuladora=acumuladora+i;
    
        const node2 = document.createTextNode(acumuladora);
    
        const parag = document.createElement("p");
        
    
        parag.appendChild(node);
        parag.appendChild(node2);
        document.getElementById("roll").appendChild(parag);

        
    };

    
};
