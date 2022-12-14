// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus,
// iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa   deve   apresentar   os
// valores   das   duas   temperaturas.   A   fórmula   de   conversão é51609+=CF, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

for (let celsius = 10; celsius <= 100; celsius++) {
  let resto = celsius % 10;

  if (resto == 0) {
    let fahrenheit = (9 * celsius + 160) / 5;

    const parag = document.createElement("p");
    const node = document.createTextNode(`${celsius}°C = ${fahrenheit}°F`);

    parag.appendChild(node);
    document.getElementById("roll").appendChild(parag);
  }
}
