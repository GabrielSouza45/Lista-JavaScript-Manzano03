// Apresentar os quadrados dos números inteiros de 15 a 200. 

for(let i=15; i<=200; i++){
    const parag = document.createElement("p");
    const node = document.createTextNode(i+"² = "+Math.pow(i, 2));

    parag.appendChild(node);
    document.getElementById("roll").appendChild(parag);

}