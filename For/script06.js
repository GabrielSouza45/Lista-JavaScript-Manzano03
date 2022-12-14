// Apresentar  todos  os  números  divisíveis  por  4  que  sejam  menores  que  200.  Para  verificar  se  o número 
// é  divisível  por  4,  efetuar  dentro  da  malha  a  verificação  lógica  desta  condição  com  a instrução se, 
// perguntando  se  o  número  é  divisível;  sendo,  mostre-o;  não  sendo,  passe  para  o próximo passo. A variável
// que controlará o contador deve ser iniciada com o valor 1. 

for(let i=1; i<200; i++){

    let resto= i%4;

    if(resto==0){
        
        const parag = document.createElement("p");
        const node = document.createTextNode(i);
    
        parag.appendChild(node);
        document.getElementById("roll").appendChild(parag);
       
    };
};
