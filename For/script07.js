// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado  
// que  qualquer  número  elevado  a  zero  é  1,  e  elevado  a  1  é  ele  próprio.  Observe  que neste exercício 
// não pode ser utilizado o operador de exponenciação do portuguol (^). 

let exponenciacao=1;

for(let i=0; i<=15; i++){

        const parag = document.createElement("p");
        const node = document.createTextNode(`3 elevado a ${i} = ${exponenciacao}`);
    
        parag.appendChild(node);
        document.getElementById("roll").appendChild(parag);
       
        exponenciacao=exponenciacao*3;

}