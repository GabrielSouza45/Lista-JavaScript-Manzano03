// Escreva  um  programa  que  apresente  a  série  de  Fibonacci  até  o  décimo  quinto  termo.  
// A  série  de Fibonacci  é  formada  pela  seqüência:  1,  1,  2,  3,  5, 8,  13,  21,  34,  ...,  etc. 
// Esta  série  se  caracteriza pela  soma  de  um  termo  atual  com  o  seu  anterior  subseqüente, 
// para  que  seja  formado  o  próximo valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, 
// o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 


// ?????????????????
// let acumuladora=1;
// let fibo=1;
// for(let i=0; i<=15; i++){

//     document.write(`${fibo} + ${acumuladora} = `);
//     fibo=fibo+acumuladora;
//     document.write(`${fibo} <br>`);

//     acumuladora= acumuladora-fibo;
// }


let acumuladora=1;
let fibo=1;
for(let i=0; i<=15; i++){


    const parag = document.createElement("p");
    const node = document.createTextNode(`${fibo} + ${acumuladora} = `);

   
   

    // document.write(`${acumuladora} + ${fibo} = `);
    fibo=fibo+acumuladora;
    // document.write(`${fibo} <br>`);
    const node2 = document.createTextNode(fibo);

    parag.appendChild(node);
    parag.appendChild(node2);
    document.getElementById("roll").appendChild(parag);


    acumuladora= fibo- acumuladora;
}