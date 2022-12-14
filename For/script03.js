// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)
let acumuladora = 0;
for(let i=1; i<=100; i++){
   
    const node = document.createTextNode(`${acumuladora} + ${i} = `);

    acumuladora=acumuladora+i;

    const node2 = document.createTextNode(acumuladora);

    const parag = document.createElement("p");
    

    parag.appendChild(node);
    parag.appendChild(node2);
    document.getElementById("roll").appendChild(parag);
   

};