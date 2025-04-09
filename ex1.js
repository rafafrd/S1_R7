let tipo = parseInt(prompt("Qual tipo de carro foi utilizado (Popular => 1 | Luxo => 2):  "));
let dias = parseInt(prompt("Quantos dias o carro foi utilizado: "));
let km = parseInt(prompt("Quantos KMs o carro percorreu:  "));
if (isNaN(tipo && dias && km)) {
  //Valida se o user digitou somente numeros
  alert("ERRO - Digite números para utilizar os programas");
} else {
  if (tipo == 1) {
    //Opção carro Popular
    if (km > 100) {
      //Caso tenha passado de 100KMs
      let valorkm = km * 0.1;
      let valordia = dias * 90;
      let total = valorkm + valordia;
      alert(`"O total a ser pago é R$ ${total}"`);
    } else {
      let valorkm = km * 0.2;
      let valordia = dias * 90;
      let total = valorkm + valordia;
      alert(`"O total a ser pago é R$ ${total}"`);
    }
  } else {
    //Opção carro de Luxo
    if (km > 200) {
      //Caso tenha passado de 200KMs
      let valorkm = km * 0.25;
      let valordia = dias * 150;
      let total = valorkm + valordia;
      alert(`"O total a ser pago é R$ ${total}"`);
    } else {
      let valorkm = km * 0.3;
      let valordia = dias * 150;
      let total = valorkm + valordia;
      alert(`"O total a ser pago é R$ ${total}"`);
    }
  }
}