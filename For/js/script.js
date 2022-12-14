// ------- Exercicio 11 ----------

// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  
// comissão  também  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. 
// Escrever um algoritmo que leia o número de  carros por  ele vendidos, o valor total de suas vendas, 
// o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 

document.getElementById("resultado").innerHTML = ("");

function revendedoraCarros() {

    const acrescimo = 0.05;

    let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário"));
    let carrosVendidos = parseInt(prompt("Digite a quantidade de carros vendidos:"));
    let valorPorVenda = parseFloat(prompt("Digite a comissão por veículo vendido:"));
    let valorVenda = parseFloat(prompt("Digite o valor total da venda:"));


    let salarioFinal = salarioInicial + (carrosVendidos * valorPorVenda) + (valorVenda * acrescimo)


    document.getElementById("resultado").innerHTML = (` Salário inicial: ${salarioInicial}.toFixed(2)
                                                        \nTotal de carros vendidos: ${carrosVendidos}
                                                        \nComissão por venda: 5% fixos 
                                                        \nValor recebido por venda: R$ ${valorPorVenda.toFixed(2)}
                                                        \nValor total da venda: R$ ${valorVenda.toFixed(2)}

                                                        \nSalário final do funcionário: R$ ${salarioFinal.toFixed(2)}`);

}

function primeiroExerc() {
    alert("Este é o primeiro exercício.");
}







// ------- Exercicio 13 ----------

// Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 


function segundo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'primeiro()');
    document.getElementById("proximo").setAttribute('onclick', 'terceiro()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 13 - Média Ponderada";
    document.getElementById("texto-exercicio").innerHTML = "Lê três notas de um aluno, calcula com seus pesos e exibe a média";

    document.getElementById("button").setAttribute('onclick', 'mediaPonderada()');
}

function primeiro() {
    location.reload(true);
}

function mediaPonderada() {
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));

    let mediaPonderada = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

    document.getElementById("resultado").innerHTML = (`Nota 1: ${nota1} peso: 2
                                                        \nNota 2 : ${nota2} peso: 3
                                                        \nNota 3 : ${nota2} peso: 5
                                                        \nMédia ponderada final: ${mediaPonderada}`);

}






// ------- Exercicio 14 ----------

//  Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10, 
//  caso contrário escrever NÃO É MAIOR QUE 10! 

function terceiro() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'segundo()');
    document.getElementById("proximo").setAttribute('onclick', 'quarto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 14 - Se Senão";
    document.getElementById("texto-exercicio").innerHTML = "Lê um valor e exibe se é ou não maior que 10.";

    document.getElementById("button").setAttribute('onclick', 'SeSenao()');
}



function SeSenao() {
    let a = parseInt(prompt("Digite um valor:"));

    if (a > 10) {
        document.getElementById("resultado").innerText = (`${a} é maior que 10!`);
    } else if (a < 10) {
        document.getElementById("resultado").innerText = (`${a} é menor que 10!`);
    } else {
        document.getElementById("resultado").innerText = (`${a} é igual a 10!`);
    }

}






// ------- Exercicio 15 ----------

// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

function quarto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'terceiro()');
    document.getElementById("proximo").setAttribute('onclick', 'quinto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 15 - Positivo ou Negativo";
    document.getElementById("texto-exercicio").innerHTML = "Lê um valor e exibe se é negativo ou positivo.";

    document.getElementById("button").setAttribute('onclick', 'positivoNegativo()');
}


function positivoNegativo() {
    let a = parseInt(prompt("Digite um valor:"));

    if (a >= 0) {
        document.getElementById("resultado").innerText = (`${a} é positivo`);
    } else {
        document.getElementById("resultado").innerText = (`${a} é negativo`);

    }

}





// ------- Exercicio 16 ----------

// As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12. 
//  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. 

function quinto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quarto()');
    document.getElementById("proximo").setAttribute('onclick', 'sexto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 16 - Loja de Maças";
    document.getElementById("texto-exercicio").innerHTML = "Lê a quantidade de maças compradas, se for maior que 12, dará desconto.";

    document.getElementById("button").setAttribute('onclick', 'macas()');
}


function macas() {

    let a = parseInt(prompt("Digite a quantidade de maças a ser comprada:"));

    if (a <= 12) {
        let valorFinal = a * 1.30;
        document.getElementById("resultado").innerText = (` O valor final será de: R$ ${valorFinal}
                                                            \nSem desconto.`);
    } else {
        let valorFinal = a * 1.00;
        document.getElementById("resultado").innerText = (`     aO valor final será de: R$ ${valorFinal}
                                                            \nCom desconto de 30 centavos por unidade.`);
    }
}






// -- -- -- - Exercicio 17-- -- -- -- --

// Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  
// escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado).
// Escrever também a média calculada. 

function sexto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quinto()');
    document.getElementById("proximo").setAttribute('onclick', 'setimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 17 - Média do Aluno";
    document.getElementById("texto-exercicio").innerHTML = "Lê a nota de duas avaliações e verifica se o aluno foi aprovado ou não.";

    document.getElementById("button").setAttribute('onclick', 'aprovadoReprovado()');
}


function aprovadoReprovado() {

    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));

    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        document.getElementById("resultado").innerHTML = (` Nota da primeira avaliação: ${nota1}
                                                            \nNota da segunda avaliação: ${nota1}
                                                            \nMédia do aluno: ${media}
                                                            \nAluno Aprovado!`);
    } else {
        document.getElementById("resultado").innerHTML = (` Nota da primeira avaliação: ${nota1}
                                                            \nNota da segunda avaliação: ${nota1}
                                                            \nMédia do aluno: ${media}
                                                            \nAluno Reprovado!`);
    }



}




// ------- Exercicio 7 ----------

// Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  
// Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano 
// (não é necessário considerar o mês em que a pessoa nasceu). 

function setimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'sexto()');
    document.getElementById("proximo").setAttribute('onclick', 'oitavo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 18 - Idade para Votação";
    document.getElementById("texto-exercicio").innerHTML = "Lê o ano atual e o ano de nascimento de uma pessoa e diz de ela já pode ou não votar.";

    document.getElementById("button").setAttribute('onclick', 'idadeVotacao()');
}


function idadeVotacao() {

    let anoNasc = parseInt(prompt("Digite o ano de nascimento:"));
    let date = new Date();
    let anoAtual = date.getFullYear();

    let idade = anoAtual - anoNasc;

    if (idade < 16) {
        document.getElementById("resultado").innerHTML = (` Idade: ${idade}.
                                                            \nAinda não tem idade para votar.`);

    } else if (idade >= 16 && idade < 18) {
        document.getElementById("resultado").innerHTML = (` Idade: ${idade}.
                                                            \nPode votar porém não é obrigatório.`);
    } else if (idade >= 18) {
        document.getElementById("resultado").innerHTML = (` Idade: ${idade}.
                                                            \nPode votar.`);
    }


}




// ------- Exercicio 19 ----------

// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

function oitavo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'setimo()');
    document.getElementById("proximo").setAttribute('onclick', 'nono()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 19 - Maior Valor";
    document.getElementById("texto-exercicio").innerHTML = "Lê 2 valores e exibe o maior.";

    document.getElementById("button").setAttribute('onclick', 'produtoSoma()');
}


function produtoSoma() {

    let a = parseInt(prompt("Digite um valor:"));
    let b = parseInt(prompt("Digite um valor:"));


    if (a > b) {
        document.getElementById("resultado").innerHTML = (` A = ${a} 
                                                            \nB = ${b}
                                                            \nValor maior: ${a}.`);
    } else if (a < b) {
        document.getElementById("resultado").innerHTML = (` A = ${a} 
                                                            \nB = ${b}
                                                            \nValor maior: ${b}.`);
    } else {
        document.getElementById("resultado").innerHTML = (` A = ${a}
                                                            \nB = ${b}
                                                            \nOs valores são igual.`);
    }



}





// ------- Exercicio 20 ----------

// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

function nono() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'oitavo()');
    document.getElementById("proximo").setAttribute('onclick', 'decimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 20 - Ordem Crescente";
    document.getElementById("texto-exercicio").innerHTML = "Lê dois valores e os exibe em ordem crescente.";

    document.getElementById("button").setAttribute('onclick', 'ordemCrescente()');
}


function ordemCrescente() {


    let a = parseInt(prompt("Digite um valor:"));
    let b = parseInt(prompt("Digite um valor:"));


    if (a > b) {
        document.getElementById("resultado").innerHTML = (` ${a} 
                                                            \n${b}`);
    } else if (a < b) {
        document.getElementById("resultado").innerHTML = (` ${b} 
                                                            \n${a}`);
    } else {
        document.getElementById("resultado").innerHTML = (` Valor 1 = ${a}
                                                            \nValor 2 = ${b}
                                                            \nOs valores são igual.`);
    }

}




// ------- Exercicio 21 ----------

// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos)
// e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que
// o jogo pode iniciar em um dia e terminar no dia seguinte. 

function decimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'nono()');
    document.getElementById("proximo").setAttribute('onclick', 'onze()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 21 - Duração do Xadrez";
    document.getElementById("texto-exercicio").innerHTML = "Lê a hora de início e de finalização de uma partida de xadrez (sem minutos), e calcula sua duração em horas, sabendo que uma partida tem duração máxima de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. ";

    document.getElementById("button").setAttribute('onclick', 'xadrez()');
}


function xadrez() {

    let inicio = parseInt(prompt("Digite o horário de início do jogo de xadrez (sem os minutos):"));
    let termino = parseInt(prompt("Digite o horário de término do jogo de xadrez (sem os minutos):"));

    let duracao = termino - inicio;

    if (duracao == 0) { // Se a subtracao der 0, significa que se passaram 24 horas de partida

        document.getElementById("resultado").innerHTML = (` Hora de início: ${inicio}
                                                            \nHora de término: ${termino}
                                                            \nO jogo durou 24 horas.`);

    } else if (duracao < 0) {
        duracao += 24;
        document.getElementById("resultado").innerHTML = (` Hora de início: ${inicio}
                                                            \nHora de término: ${termino}
                                                            \nO jogo durou ${duracao} horas.`);

    } else {
        document.getElementById("resultado").innerHTML = (` Hora de início: ${inicio}
                                                            \nHora de término: ${termino}
                                                            \nO jogo durou ${duracao} horas.`);
    }
}






// ------- Exercicio 22 ----------

// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 
// 40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, 
// que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).  

function onze() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'decimo()');
    document.getElementById("proximo").setAttribute('onclick', 'doze()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 22 - Horas Extras";
    document.getElementById("texto-exercicio").innerHTML = "Lê a quantidade de horas extras trabalhadas em um mês e o salário por hora e exibe o slátio final.";

    document.getElementById("button").setAttribute('onclick', 'horasExtras()');
}


function horasExtras() {

    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseInt(prompt(`Digite o salário por horas de ${nome}:`));
    let horasTrabalhadas = parseInt(prompt(`Digite o a quantidade de horas trabalhadas por ${nome}:`));

    let horasExtras = horasTrabalhadas - 160;

    if (horasExtras > 0) {

        let salarioExtra = horasExtras * (salario + salario * 0.5);
        let salarioFinal = salario * (horasTrabalhadas - horasExtras) + salarioExtra;

        document.getElementById("resultado").innerHTML = (` Funcionário: ${nome}
                                                            \nSalário por hora: ${salario}
                                                            \nHoras trabalhadas: ${horasTrabalhadas}
                                                            \nTotal de horas extras: ${horasExtras}
                                                            \nSalario final: ${salarioFinal}`);

    } else {
        let salarioFinal = horasTrabalhadas * salario;

        document.getElementById("resultado").innerHTML = (` Funcionário: ${nome}
                                                            \nSalário por hora: ${salario}
                                                            \nHoras trabalhadas: ${horasTrabalhadas}
                                                            \nTotal de horas extras: 0}
                                                            \nSalario final: ${salarioFinal}`);

    }

}





// ------- Exercicio 23 ----------

// Para  o  enunciado  a  seguir  foi  elaborado  um  algoritmo  em  Português  
// Estruturado  que contém erros, identifique os erros no algoritmo apresentado abaixo:
// Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, 
// calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo
// masculino:  peso ideal = (72.7 * altura) - 58 - para 
// sexo feminino:  peso ideal = (62.1 * altura) - 44.7 

function doze() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'onze()');
    document.getElementById("proximo").setAttribute('onclick', 'treze()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 23 - Peso Ideal";
    document.getElementById("texto-exercicio").innerHTML = "Lê o sexo e a altura de uma pessoa e exibe seu peso ideal.";

    document.getElementById("button").setAttribute('onclick', 'pesoIdeal()');
}


function pesoIdeal() {

    let sexo = prompt(`Digite seu sexo, F = Feminino e M = Masculino:`);
    let altura = parseInt(prompt(`Digite sua altura: `));

    if (sexo == "M" || sexo == "m") {

        let pesoIdeal = (72.7 * altura / 100) - 58;

        document.getElementById("resultado").innerHTML = (` Seu peso ideal é: ${pesoIdeal}Kg.`);

    } else {
        let pesoIdeal = (62.1 * altura / 100) - 44.7;

        document.getElementById("resultado").innerHTML = (` Seu peso ideal é: ${pesoIdeal}Kg.`);

    }

}













// ------- Exercicio 23 ----------

// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. 
// Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  
// R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total. 

function treze() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'doze()');
    document.getElementById("proximo").setAttribute('onclick', 'quatorze()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 24 - Venda e Comissão";
    document.getElementById("texto-exercicio").innerHTML = "Lê o salário fixo e o valor das vendas e exibe o salario final, 3% sobre o total das vendas até R$1.500,00 mais 5% sobre o que ultrapassar este valor";

    document.getElementById("button").setAttribute('onclick', 'comissao()');
}


function comissao() {

    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseInt(prompt(`Digite o salário por horas de ${nome}:`));
    let venda = parseInt(prompt(`Digite o valor das vendas mensais de ${nome}:`));

    if (venda < 1500) {

        let salarioFinal = salario * (venda * 0.3);

        document.getElementById("resultado").innerHTML = (` Funcionário: ${nome}
                                                            \nSalário inicial: ${salario}
                                                            \nValor venda: ${venda}
                                                            \nPorcentagem da comissão: 3%
                                                            \nSalario final: ${salarioFinal}`);

    } else {
        let salarioFinal = salario + ((1500 * 0.3) + ((venda - 1500) * 0.5));

        document.getElementById("resultado").innerHTML = (` Funcionário: ${nome}
                                                            \nSalário inicial: ${salario}
                                                            \nValor venda: ${venda}
                                                            \nPorcentagem da comissão: 5%
                                                            \nSalario final: ${salarioFinal}`);

    }


}








// ------- Exercicio 24 ----------

// Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito.
// Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito).
// Também testar se saldo atual for maior ou igual 
// a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

function quatorze() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'treze()');
    document.getElementById("proximo").setAttribute('onclick', 'quinze()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 25 - Saldo Bancário";
    document.getElementById("texto-exercicio").innerHTML = "Lê número da conta, saldo, débito e crédito e exibe o saldo final";

    document.getElementById("button").setAttribute('onclick', 'banco()');
}


function banco() {

    let nome = prompt("Digite o nome do funcionário:");
    let agencia = parseInt(prompt(`Digite a agência:`));
    let conta = parseInt(prompt(`Digite o número da sua conta:`));
    let saldo = parseInt(prompt(`Digite o saldo bancário:`));
    let debito = parseInt(prompt(`Digite o débito bancário:`));
    let credito = parseInt(prompt(`Digite o crédito bancário:`));

    let saldoAtual = saldo - debito + credito;

    if (saldoAtual < 0) {

        document.getElementById("resultado").innerHTML = (` Titular: ${nome}
                                                            \nSaldo: R$ ${saldo}
                                                            \nDébito: R$ -${debito}
                                                            \nCrédito: R$ ${credito}
                                                            \nSaldo final: R$ ${saldoAtual}
                                                            \nSALDO POSITIVO`);

    } else {

        document.getElementById("resultado").innerHTML = (` Titular: ${nome}
                                                            \nSaldo: R$ ${saldo}
                                                            \nDébito: R$ -${debito}
                                                            \nCrédito: R$ ${credito}
                                                            \nSaldo final: R$ ${saldoAtual}
                                                            \nSALDO NEGATIVO`);

    }
}






// ------- Exercicio 25 ----------

// Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade 
// mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  
// ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior
// ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'. 

function quinze() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quatorze()');
    document.getElementById("proximo").setAttribute('onclick', 'dezesseis()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 26 - Estoque";
    document.getElementById("texto-exercicio").innerHTML = "Lê a quantidade atual de estoque, quantidade minima e maxima, calcula e exibe a quantidade média e se há a necessidade de compra";

    document.getElementById("button").setAttribute('onclick', 'estoque()');
}


function estoque() {

    let qtdAtual = parseInt(prompt(`Digite a quantidade atual em estoque:`));
    let qtdmin = parseInt(prompt(`Digite a quantidade mínima de produtos:`));
    let qtdmax = parseInt(prompt(`Digite a quantidade máxima de produtos::`));

    let media = ((qtdmin + qtdmax) / 2);

    if (qtdAtual >= media) {

        document.getElementById("resultado").innerHTML = (` Quantidade atual: ${qtdAtual}
                                                            \nQuantidade mínima: ${qtdmin}
                                                            \nQuantidade máxima: ${qtdmax}
                                                            \nQuantidade média: ${media}
                                                            \nNão há a necessidade de compra.`);

    } else {

        document.getElementById("resultado").innerHTML = (` Quantidade atual: ${qtdAtual}
                                                            \nQuantidade mínima: ${qtdmin}
                                                            \nQuantidade máxima: ${qtdmax}
                                                            \nQuantidade média: ${media}
                                                            \nEfetuar compra.`);

    }
}










// ------- Exercicio 26 ----------

// Ler um valor e escrever se é positivo, negativo ou zero.

function dezesseis() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quinze()');
    document.getElementById("proximo").setAttribute('onclick', 'dezessete()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 27 - Conferir Numero";
    document.getElementById("texto-exercicio").innerHTML = "lê um númeor e verifica se ele é maior menor ou igual a zero e o exibe";

    document.getElementById("button").setAttribute('onclick', 'conferir()');
}


function conferir() {

    let numero = parseInt(prompt(`Digite um número:`));

    if (numero > 0) {

        document.getElementById("resultado").innerHTML = (` ${numero} é maior que zero.`);

    } else if (numero < 0) {

        document.getElementById("resultado").innerHTML = (` ${numero} é menor que zero.`);
    } else {
        document.getElementById("resultado").innerHTML = (` ${numero} é igual a zero.`);
    }
}







// ------- Exercicio 27 ----------

// Ler um valor e escrever se é positivo, negativo ou zero.

function dezessete() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'dezesseis()');
    document.getElementById("proximo").setAttribute('onclick', 'dezoito()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 28 - Conferir Maior Número";
    document.getElementById("texto-exercicio").innerHTML = "lê um número e verifica se ele é maior menor ou igual a zero e o exibe";

    document.getElementById("button").setAttribute('onclick', 'conferir()');
}


function conferir() {

    let numero = parseInt(prompt(`Digite um número:`));

    if (numero > 0) {

        document.getElementById("resultado").innerHTML = (` ${numero} é maior que zero.`);

    } else if (numero < 0) {

        document.getElementById("resultado").innerHTML = (` ${numero} é menor que zero.`);
    } else {
        document.getElementById("resultado").innerHTML = (` ${numero} é igual a zero.`);
    }
}











// ------- Exercicio 28 ----------

// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 

function dezessete() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'dezesseis()');
    document.getElementById("proximo").setAttribute('onclick', 'dezoito()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 28 - Conferir Numero";
    document.getElementById("texto-exercicio").innerHTML = "lê 3 números, e escreve o maior entre eles";

    document.getElementById("button").setAttribute('onclick', 'maiorEntreTres()');
}


function maiorEntreTres() {

    let numero1 = parseInt(prompt(`Digite um número:`));
    let numero2 = parseInt(prompt(`Digite outro número:`));
    let numero3 = parseInt(prompt(`Digite outro número:`));

    if (numero1 > numero2 && numero1 > numero3) {

        document.getElementById("resultado").innerHTML = (` O primeiro número "${numero1}" é o maior número.`);

    } else if (numero2 > numero1 && numero2 > numero3) {

        document.getElementById("resultado").innerHTML = (` O segundo número "${numero2}" é o maior número.`);

    } else if (numero3 > numero1 && numero3 > numero2) {

        document.getElementById("resultado").innerHTML = (` O terceiro número "${numero3}" é o maior número.`);

    }
}





// ------- Exercicio 29 ----------

// Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores. 

function dezoito() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'dezessete()');
    document.getElementById("proximo").setAttribute('onclick', 'dezenove()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 29 - Soma dos Dois Maiores";
    document.getElementById("texto-exercicio").innerHTML = "lê 3 números, soma os dois maiores e exibe o resultado";

    document.getElementById("button").setAttribute('onclick', 'somaDoisMaiores()');
}


function somaDoisMaiores() {

    let numero1 = parseInt(prompt(`Digite um número:`));
    let numero2 = parseInt(prompt(`Digite outro número:`));
    let numero3 = parseInt(prompt(`Digite outro número:`));

    if (numero1 > numero3 && numero2 > numero3) {

        let soma = numero1 + numero2;
        document.getElementById("resultado").innerHTML = (` ${numero1} + ${numero2} = ${soma}`);

    } else if (numero2 > numero1 && numero3 > numero1) {

        let soma = numero2 + numero3;
        document.getElementById("resultado").innerHTML = (` ${numero2} + ${numero3} = ${soma}`);

    } else if (numero3 > numero2 && numero1 > numero2) {

        let soma = numero3 + numero1;
        document.getElementById("resultado").innerHTML = (` ${numero3} + ${numero1} = ${soma}`);

    }
}





// ------- Exercicio 30 ----------

// Ler  3  valores (considere  que  não  serão  informados  valores  iguais)  e  escrevê-los  em  ordem crescente. 

function dezenove() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'dezoito()');
    document.getElementById("proximo").setAttribute('onclick', 'vinte()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 30 - Ordem Crescente";
    document.getElementById("texto-exercicio").innerHTML = "lê 3 números, e os coloca em ordem crescente";

    document.getElementById("button").setAttribute('onclick', 'ordemCrescente3()');
}


function ordemCrescente3() {

    let numero1 = parseInt(prompt(`Digite um número:`));
    let numero2 = parseInt(prompt(`Digite outro número:`));
    let numero3 = parseInt(prompt(`Digite outro número:`));

    if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) { // 1 2 3

        document.getElementById("resultado").innerHTML = (`${numero1}
                                                            \n${numero2} 
                                                            \n${numero3}`);

    } else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) { // 1 3 2

        document.getElementById("resultado").innerHTML = (`${numero1}
                                                            \n${numero3} 
                                                            \n${numero2}`);

    } else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) { // 2 1 3

        document.getElementById("resultado").innerHTML = (`${numero2}
                                                            \n${numero1} 
                                                            \n${numero3}`);

    } else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) { // 2 3 1

        document.getElementById("resultado").innerHTML = (`${numero2}
                                                            \n${numero3} 
                                                            \n${numero1}`);

    } else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2) { // 3 1 2

        document.getElementById("resultado").innerHTML = (`${numero3}
                                                            \n${numero1} 
                                                            \n${numero2}`);

    } else if (numero3 > numero1 && numero3 > numero2 && numero2 > numero1) { // 3 2 1

        document.getElementById("resultado").innerHTML = (`${numero3}
                                                            \n${numero2} 
                                                            \n${numero1}`);

    }
}






// ------- Exercicio 31 ----------

// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. 
// OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 

function vinte() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'dezenove()');
    document.getElementById("proximo").setAttribute('onclick', 'vinteum()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 31 - Triângulo ou Não?";
    document.getElementById("texto-exercicio").innerHTML = "lê 3 números representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo";

    document.getElementById("button").setAttribute('onclick', 'trianguloNao()');
}


function trianguloNao() {

    let a = parseInt(prompt(`Digite um valor:`));
    let b = parseInt(prompt(`Digite outro valor:`));
    let c = parseInt(prompt(`Digite outro valor:`));

    let soma1 = a + b;
    let soma2 = a + c;
    let soma3 = b + c;

    if (soma1 > c) {

        document.getElementById("resultado").innerHTML = (`Forma um triângulo.`);

    } else if (soma2 > b) {

        document.getElementById("resultado").innerHTML = (`Forma um triângulo.`);

    } else if (soma3 > a) {

        document.getElementById("resultado").innerHTML = (`Forma um triângulo.`);

    } else {

        document.getElementById("resultado").innerHTML = (`Não forma um triângulo.`);

    }
}




// ------- Exercicio 32 ----------

// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). 
// Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 

function vinteum() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'vinte()');
    document.getElementById("proximo").setAttribute('onclick', 'vintedois()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 32 - Time Vencedor";
    document.getElementById("texto-exercicio").innerHTML = "lê 2 nomes de times e a quantidade de gols de cada e exibe o time vencedor ou empate.";

    document.getElementById("button").setAttribute('onclick', 'timeVencedor()');
}


function timeVencedor() {

    let timea = prompt(`Digite o nome do primeiro time:`);
    let timeb = prompt(`Digite o nome do segundo time:`);
    let golsa = parseInt(prompt(`Digite a quantidade de gols de ${timea}:`));
    let golsb = parseInt(prompt(`Digite a quantidade de gols de ${timeb}:`));

    if (golsa > golsb) {

        document.getElementById("resultado").innerHTML = (`Placar: ${golsa} X ${golsb}
                                                            \nVencedor: ${timea}
                                                            \nCom ${golsa - golsb} de vantagem.`);

    } else if (golsb > golsa) {

        document.getElementById("resultado").innerHTML = (`Placar: ${golsb} X ${golsa}
                                                            \nVencedor: ${timeb}
                                                            \nCom ${golsb - golsa} de vantagem.`);

    } else {
        document.getElementById("resultado").innerHTML = (`Placar: ${golsa} X ${golsb}
                                                            \nEmpate`);

    }
}





// ------- Exercicio 33 ----------

// Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, 
// caso os números sejam iguais ‘Primeiro é maior’, 
// caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.  

function vintedois() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'vinteum()');
    document.getElementById("proximo").setAttribute('onclick', 'vintetres()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 33 - Igual ou Maior?";
    document.getElementById("texto-exercicio").innerHTML = "lê 2 valores e exibe se são iguais ou se o primeiro ou segundo é maior.";

    document.getElementById("button").setAttribute('onclick', 'confiraIgualMaior()');
}


function confiraIgualMaior() {

    let numero1 = parseInt(prompt(`Digite um valor:`));
    let numero2 = parseInt(prompt(`Digite outro valor:`));

    if (numero1 > numero2) {

        document.getElementById("resultado").innerHTML = (`${numero1} VS ${numero2}
                                                            \nVencedor: ${numero1}
                                                            \nO primeiro valor é o maior.`);

    } else if (numero2 > numero1) {

        document.getElementById("resultado").innerHTML = (`${numero1} VS ${numero2}
                                                            \nVencedor: ${numero2}
                                                            \nO segundo valor é o maior.`);

    } else {

        document.getElementById("resultado").innerHTML = (`${numero1} VS ${numero2}
                                                                \nVencedor: Nenhum
                                                                \nEmpate Técnico :C.`);

    }
}









// ------- Exercicio 34 ----------

// Seja o seguinte algoritmo: 
//  início 
//      ler x 
//      ler y 
//      z <- (x*y) + 5 
//      se z <= 0 
//          então 
//              resposta <- ‘A’ 
//          senão 
//              se z <= 100 
//                  então
//                      resposta <- ‘B’ 
//                  senão 
//                      resposta<- ‘C’         
//              fim_se      
//      fim_se
//      escrever  z, resposta 
//  fim 

function vintetres() {
    document.getElementById("resultado").innerHTML = (` 
    \nSeja o seguinte algoritmo: 
    \ninício 
    \nler x 
    \nler y 
    \nz <- (x*y) + 5 
    \nse z <= 0 
    \nentão 
    \nresposta <- 'A' 
    \nsenão 
    \nse z <= 100 
    \nentão
    \nresposta <- 'B' 
    \nsenão 
    \nresposta<- 'C'         
    \nfim_se      
    \nfim_se
    \nescrever  z, resposta 
    \nfim`);

    document.getElementById("anterior").setAttribute('onclick', 'vintedois()');
    document.getElementById("proximo").setAttribute('onclick', 'vintequatro()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 34 - Teste de Mesa";
    document.getElementById("texto-exercicio").innerHTML = "Lê 2 valores e realiza um 'teste de mesa' em um algoritmo";

    document.getElementById("button").setAttribute('onclick', 'testeMesa()');

}


function testeMesa() {

    let x = parseInt(prompt(`Digite um valor:`));
    let y = parseInt(prompt(`Digite outro valor:`));

    let z = x * y + 5;

    if (z <= 0) {

        document.getElementById("resultado").innerHTML = (`Resposta : A`);

    } else if (numero2 > numero1) {

        document.getElementById("resultado").innerHTML = (`${numero1} VS ${numero2}
                                                            \nVencedor: ${numero2}
                                                            \nO segundo valor é o maior.`);

    } else {

        document.getElementById("resultado").innerHTML = (`${numero1} VS ${numero2}
                                                                \nVencedor: Nenhum
                                                                \nEmpate Técnico :C.`);

    }
}








// ------- Exercicio 35 ----------

// Um posto está vendendo combustíveis com a seguinte tabela de descontos: até 20 litros, desconto de 3% por litro Álcool acima de 20 litros,
// desconto de 5% por litro até 20 litros, desconto de 4% por litro Gasolina acima de 20 litros, desconto de 6% por litro Escreva  um  algoritmo  
// que  leia  o  número  de  litros  vendidos  e  o  tipo  de  combustível (codificado  da seguinte  forma: A-álcool, G-gasolina),  
// calcule  e  imprima  o  valor  a  ser  pago  pelo  cliente  sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 


function vintequatro() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vintetres()');
    document.getElementById("proximo").setAttribute('onclick', 'vintecinco()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 35 - Preço Gasolina";
    document.getElementById("texto-exercicio").innerHTML = "Lê a quantidade em litros de combustivel, verifica se é alcool ou gasolina e calcula o valor final com desconto";

    document.getElementById("button").setAttribute('onclick', 'combustivel()');

}


function combustivel() {

    let litros = parseInt(prompt(`Digite a quantidade de combustível vendida, em litros:`));
    let tipoCombustivel = prompt(`Digite o tipo de combustível vendido:  'G' - Gasolina e 'A' - Álcool`);


    if (tipoCombustivel == "G" || tipoCombustivel == "g") {

        if (litros <= 20) {
            let desconto = gasolina * litros * 0.4;
            let preco = (gasolina * litros) - desconto;

            document.getElementById("resultado").innerHTML = (`O valor pago pelo cliente devará ser de: R$ ${preco.toFixed(2)}`);
        } else {
            let desconto = gasolina * litros * 0.6;
            let preco = (gasolina * litros) - desconto;

            document.getElementById("resultado").innerHTML = (`O valor pago pelo cliente devará ser de: R$ ${preco.toFixed(2)}`);
        }


    } else if (tipoCombustivel == "A" || tipoCombustivel == "a") {

        if (litros <= 20) {
            let desconto = alcool * litros * 0.3;
            let preco = (gasolina * litros) - desconto;

            document.getElementById("resultado").innerHTML = (`O valor pago pelo cliente devará ser de: R$ ${preco.toFixed(2)}`);
        } else {
            let desconto = gasolina * litros * 0.5;
            let preco = (gasolina * litros) - desconto;

            document.getElementById("resultado").innerHTML = (`O valor pago pelo cliente devará ser de: R$ ${preco.toFixed(2)}`);
        }

    } else {

        document.getElementById("resultado").innerHTML = (`Digite um combustível válido.`);

    }
}






// ------- Exercicio 36 ----------

// Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,
// bem  como  as  das  mulheres). Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova, 
// e  o  produto  das  idades  do  homem  mais novo com a mulher mais velha. 


function vintecinco() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vintequatro()');
    document.getElementById("proximo").setAttribute('onclick', 'vinteseis()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 36 - Diferença de idades";
    document.getElementById("texto-exercicio").innerHTML = "le 4 idade, 2 de homens e 2 de mulheres, compara e soma a do homem mais velho com a mulher mais nova e multiplica a da mulher mais velha com o homem mais novo";

    document.getElementById("button").setAttribute('onclick', 'diferencaIdade()');

}


function diferencaIdade() {

    let idadeh1 = parseInt(prompt(`Digite a idade do primeiro homem: `));
    let idadeh2 = parseInt(prompt(`Digite a idade do segundo homem: `));
    let idadem1 = parseInt(prompt(`Digite a idade da primeira mulher: `));
    let idadem2 = parseInt(prompt(`Digite a idade da segunda mulher: `));

    let idadeh = idadeh1 - idadeh2;
    let idadem = idadem1 - idadem2;


    if (idadeh > 0 && idadem > 0) {

        let soma = idadeh1 + idadem2;
        let mult = idadeh2 * idadem1;
        document.getElementById("resultado").innerHTML = (`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}`);
        document.getElementById("resultado").innerHTML = (`A multiplicação da idade da mulher mais velha com o homm mais novo é: ${mult}`);

    } else if (idadeh < 0 && idadem > 0) {

        let soma = idadeh2 + idadem2;
        let mult = idadeh1 * idadem1;
        document.getElementById("resultado").innerHTML = (`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}`);
        document.getElementById("resultado").innerHTML = (`A multiplicação da idade da mulher mais velha com o homm mais novo é: ${mult}`);

    } else if (idadeh > 0 && idadem < 0) {

        let soma = idadeh1 + idadem1;
        let mult = idadeh2 * idadem2;
        document.getElementById("resultado").innerHTML = (`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}`);
        document.getElementById("resultado").innerHTML = (`A multiplicação da idade da mulher mais velha com o homm mais novo é: ${mult}`);

    } else {

        let soma = idadeh2 + idadem1;
        let mult = idadeh1 * idadem2;
        document.getElementById("resultado").innerHTML = (`A soma da idade do homem mais velho com a mulher mais nova é: ${soma}`);
        document.getElementById("resultado").innerHTML = (`A multiplicação da idade da mulher mais velha com o homm mais novo é: ${mult}`);

    }
}







// ------- Exercicio 37 ----------

// Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
// Morango: Até 5 Kg R$ 2,50, Acima de 5 Kg: por Kg R$ 2,20 por Kg 
// Maçã: Até 5 Kg: R$ 1,80 por Kg, Acima de 5 Kg: R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda  um  desconto  de  10%  sobre  este  total.  
// Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 


function vinteseis() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vintecinco()');
    document.getElementById("proximo").setAttribute('onclick', 'vintesete()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 37 - Fruteira";
    document.getElementById("texto-exercicio").innerHTML = "lê a quatidade de frutas compradas, e calcula o preco com desconto";

    document.getElementById("button").setAttribute('onclick', 'fruteira()');
}


function fruteira() {

    let macakg = parseFloat(prompt(`Digite quantidade de maças em Kg: `));
    let morangokg = parseFloat(prompt(`Digite a quantidade de morangos em Kg: `));

    // === Maças === //

    let precomaca = 0;

    if (macakg > 5) {

        precomaca = 1.50 * macakg;

    } else {

        precomaca = 1.80 * macakg;

    }

    // === Morangos === //

    let precomorango = 0;
    if (morangokg > 5) {

        precomorango = 2.20 * morangokg;

    } else {

        precomorango = 2.50 * morangokg;

    }

    // === Total === //

    let totalkg = morangokg + macakg;
    let totalpreco = precomorango + precomaca;

    if (totalkg > 8 || totalpreco > 25) {
        let precoFn = totalpreco - totalpreco * 0.10;
        document.getElementById("resultado").innerHTML = (` O preço das maças ficou: R$: ${precomaca.toFixed(2)}
                                                            \nO preço dos morangos ficou: R$: ${precomorango.toFixed(2)}
                                                            \nPeso total: ${totalkg}Kg
                                                            \nO preço total sem desconto ficou: R$ ${totalpreco.toFixed(2)}
                                                            \n
                                                            \nPreço final com desconto: R$ ${precoFn.toFixed(2)}`);

    } else {
        document.getElementById("resultado").innerHTML = (`O preço das maças ficou: R$: ${precomaca.toFixed(2)}
                                                            \nO preço dos morangos ficou: R$: ${precomorango.toFixed(2)}
                                                            \nPeso total: ${totalkg}Kg
                                                            \nO preço final ficou: R$ ${totalpreco.toFixed(2)}`);

    }
}







// ------- Exercicio 38 ----------

// Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código  armazenado  internamente 
// no  algoritmo  (igual  a 1234)  deve  ser  apresentada  a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. 
// Se esta senha estiver incorreta (a certa  é 9999) deve ser mostrada a mensagem ‘senha incorreta’. 
// Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.


function vintesete() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vinteseis()');
    document.getElementById("proximo").setAttribute('onclick', 'vinteoito()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 38 - Acesso com Senha";
    document.getElementById("texto-exercicio").innerHTML = "Pede o usuario e a senha e permite ou nega o acesso se os dados estiverem corretos ou nao <br> (Dica: Usuário: 1234 & Senha: 9999)";

    document.getElementById("button").setAttribute('onclick', 'acessoComSenha()');
}


function acessoComSenha() {
    const acesso = 1234;
    const senha = 9999;

    let usuario = parseInt(prompt(`Digite seu código de usuário: (somente números) `));
    let senhaUsuario = parseFloat(prompt(`Digite sua senha de acesso: `));

    if (usuario !== acesso) {

        document.getElementById("resultado").innerHTML = (`Usuário inválido!`);

    } else if (senhaUsuario !== senha) {

        document.getElementById("resultado").innerHTML = (`Senha inválida!`);

    } else {

        document.getElementById("resultado").innerHTML = (` Acesso Permitido
                                                            \nBem Vindo Sr. Incrível.`);

    }
}







// ------- Exercicio 40 ----------

// Para  A = V,  B = V  e  C = F, 
// qual o resultado da avaliação das seguintes expressões: 
// a) (A  e  B)  ou  (A  xou  B) 
// b) (A  ou  B) e (A  e  C) c) A  
// ou 
// C  e  B  xou  A  e não  B 


function vinteoito() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vintesete()');
    document.getElementById("proximo").setAttribute('onclick', 'vintenove()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 40 - Desconto com Quantidade";
    document.getElementById("texto-exercicio").innerHTML = "Pede nome, quantidade e preço unitario, calcula desconto e mostra o preço total com desconto";

    document.getElementById("button").setAttribute('onclick', 'DescontoComQuantidade()');
}


function DescontoComQuantidade() {

    let nome = prompt(`Digiteo nome do produto `);
    let quantidade = parseInt(prompt(`Digite a quantidade: `));
    let precoUnidade = parseInt(prompt(`Digite o preço por unidade do produto: `))

    let total = quantidade * precoUnidade;

    if (quantidade > 10) {
        let desconto = quantidade * 0.05;
        let totalDesconto = total - desconto;
        document.getElementById("resultado").innerHTML = (` Preço total sem desconto: R$ ${total.toFixed(2)}
                                                            \nDesconto de: R$ ${desconto.toFixed(2)}
                                                            \nPreço final com 5% de desconto: R$ ${totalDesconto.toFixed(2)}`);

    } else if (quantidade > 5 && quantidade <= 10) {
        let desconto = quantidade * 0.03;
        let totalDesconto = total - desconto;

        document.getElementById("resultado").innerHTML = (` Preço total sem desconto: R$ ${total.toFixed(2)}
                                                            \nDesconto de: R$ ${desconto.toFixed(2)}
                                                            \nPreço final com 3% de desconto: R$ ${totalDesconto.toFixed(2)}`);

    } else if (quantidade <= 5) {

        let desconto = quantidade * 0.02;
        let totalDesconto = total - desconto;

        document.getElementById("resultado").innerHTML = (` Preço total sem desconto: R$ ${total.toFixed(2)}
                                                            \nDesconto de: R$ ${desconto.toFixed(2)}
                                                            \nPreço final com 2% de desconto: R$ ${totalDesconto.toFixed(2)}`);

    }
}







// ------- Exercicio 41 ----------

// Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3 verificações  e  a  média  dos exercícios que fazem parte da avaliação.
// Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais 
// abaixo: Média_de_Aproveitamento  =  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios / 7 
// A atribuição de conceitos obedece a tabela abaixo: Média de Aproveitamento Conceito > =  9,0  A > =  7,5  e  <  9,0 B > =  6,0  e  <  7,5 C <  6,0 D 

function vintenove() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vinteoito()');
    document.getElementById("proximo").setAttribute('onclick', 'trinta()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 41 - Média de aproveitamento";
    document.getElementById("texto-exercicio").innerHTML = "Pede as notas do aluno e a média obtida dos exercícios, calcula e exibe a média de aproveitamento e exibe seu conceito";

    document.getElementById("button").setAttribute('onclick', 'mediaDeAproveitamento()');
}


function mediaDeAproveitamento() {

    let n1 = parseFloat(prompt(`Digite a nota da primeira prova: `));
    let n2 = parseFloat(prompt(`Digite a nota da segunda prova: `));
    let n3 = parseFloat(prompt(`Digite a nota da terceira prova: `));
    let media = parseFloat(prompt(`Digite a média obtida nos exercícios: `));

    let mediaDeAproveitamento = (n1 + n2 * 2 + n3 * 3 + media) / 7;

    if (mediaDeAproveitamento >= 9) {

        document.getElementById("resultado").innerHTML = (` Nota 1:  ${n1}
                                                            \nNota 2: ${n2}
                                                            \nNota 3: ${n3}
                                                            \nMédia: ${media}
                                                            \nMédia de aproveitamento: ${mediaDeAproveitamento.toFixed(2)}
                                                            \nConceito final: A`);

    } else if (mediaDeAproveitamento >= 7.5 && mediaDeAproveitamento < 9) {

        document.getElementById("resultado").innerHTML = (` Nota 1:  ${n1}
                                                            \nNota 2: ${n2}
                                                            \nNota 3: ${n3}
                                                            \nMédia: ${media}
                                                            \nMédia de aproveitamento: ${mediaDeAproveitamento.toFixed(2)}
                                                            \nConceito final: B`);

    } else if (mediaDeAproveitamento >= 6 && mediaDeAproveitamento < 7.5) {

        document.getElementById("resultado").innerHTML = (` Nota 1:  ${n1}
                                                            \nNota 2: ${n2}
                                                            \nNota 3: ${n3}
                                                            \nMédia: ${media}
                                                            \nMédia de aproveitamento: ${mediaDeAproveitamento.toFixed(2)}
                                                            \nConceito final: C`);

    } else {

        document.getElementById("resultado").innerHTML = (` Nota 1:  ${n1}
                                                            \nNota 2: ${n2}
                                                            \nNota 3: ${n3}
                                                            \nMédia: ${media}
                                                            \nMédia de aproveitamento: ${mediaDeAproveitamento}
                                                            \nConceito final: D`);

    }
}








// ------- Exercicio 41 ----------

// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: 
// - Ter no mínimo 65 anos de idade. - Ter trabalhado no mínimo 30 anos. - Ter no mínimo 60 anos  e ter trabalhado no mínimo 25 anos. Com base nas informações acima,
// faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo 
// de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.

function trinta() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'vintenove()');
    document.getElementById("proximo").setAttribute('onclick', 'trintaum()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 42 - Aposentadoria";
    document.getElementById("texto-exercicio").innerHTML = "Verifica as informações de um funcionário e verifica a necessidade de requerer ou não a aposentadoria";

    document.getElementById("button").setAttribute('onclick', 'Aposentadoria()');
}


function Aposentadoria() {

    let codigo = parseInt(prompt(`Digite o código do usuário: `));
    let dataNasc = parseInt(prompt(`Digite o ano de nascimento do funcionário: `));
    let anoIngresso = parseInt(prompt(`Digite o ano em que o funcionário ingressou na empresa: `));
    let date = new Date();
    let anoAtual = date.getFullYear();

    let idade = anoAtual - dataNasc;
    let tempoTrabalho = anoAtual - anoIngresso;

    if (idade >= 65) {

        document.getElementById("resultado").innerHTML = (` Idade:  ${idade}
                                                            \nTempo na empresa: ${tempoTrabalho} anos
                                                            \nRequerer aposentadoria.`);

    } else if (tempoTrabalho >= 30) {

        document.getElementById("resultado").innerHTML = (` Idade:  ${idade}
                                                            \nTempo na empresa: ${tempoTrabalho} anos
                                                            \nRequerer aposentadoria.`);

    } else if (idade >= 60 && tempoTrabalho >= 25) {

        document.getElementById("resultado").innerHTML = (` Idade:  ${idade}
                                                            \nTempo na empresa: ${tempoTrabalho} anos
                                                            \nRequerer aposentadoria.`);

    } else {

        document.getElementById("resultado").innerHTML = (` Idade:  ${idade}
                                                            \nTempo na empresa: ${tempoTrabalho} anos
                                                            \nNão requerer.`);

    }
}









// ------- Exercicio 41 ----------

// 

function trintaum() {
    document.getElementById("resultado").innerHTML = (` `);

    document.getElementById("anterior").setAttribute('onclick', 'trinta()');
    document.getElementById("proximo").setAttribute('onclick', 'alert("Este é o último exercício.")');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 43 - Triângulos";
    document.getElementById("texto-exercicio").innerHTML = "Lê os três lados do triângulo e exibe se ele é um triângulo equilátero, Isóceles, escaleno ou se não é um triângulo";

    document.getElementById("button").setAttribute('onclick', 'QualTriangulo()');
}


function QualTriangulo() {

    let a = parseFloat(prompt(`Digite o primeiro lado do trângulo: `));
    let b = parseFloat(prompt(`Digite o segundo lado do trângulo: `));
    let c = parseFloat(prompt(`Digite o terceiro lado do trângulo: `));

    if ((a < b + c) && (b < a + c) && (c < a + b)) {

        if ((a == b) && (b == c)) {

            document.getElementById("resultado").innerHTML = (`É um triângulo equilátero`);

        } else if ((a == b) || (b == c) || (a == c)) {

            document.getElementById("resultado").innerHTML = (`É um triângulo isóceles`);

        } else {

            document.getElementById("resultado").innerHTML = (`É um triângulo escaleno`);

        }

    } else {

        document.getElementById("resultado").innerHTML = (`Não é possível criar um triângulo`);

    }
}