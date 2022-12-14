// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar,
// efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, 
// mostre-o; não sendo, passe para o próximo passo.


for(let i=0; i<=20; i++){

    let resto= i%2;

    if(resto==1){
      
        const parag = document.createElement("p");
        const node = document.createTextNode(i);
    
        parag.appendChild(node);
        document.getElementById("roll").appendChild(parag);
       
    };
};
