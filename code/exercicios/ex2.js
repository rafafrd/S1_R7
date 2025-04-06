let genero = parseInt(prompt("Qual se gênero?  (Mulher => 1 | Homem => 2): "));
let tempoEmpresa = parseInt(prompt("Quantos anos você tem de empresa? (Anos): "));
let salarioBase = parseFloat(prompt("Digite seu salário atual: R$"));
if (isNaN(genero || tempoEmpresa || salarioBase)) {
  alert(`"ERRO - Você digitou um valor invalido!"`);
} else {
  //Caso seja mulher
  if (genero == 1) {
    if (tempoEmpresa < 5) {
      let aumento = salarioBase * 0.04;
      let salarioFinal = salarioBase + aumento;
      alert(`"Você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa >= 5 && tempoEmpresa <= 14) {
      let aumento = salarioBase * 0.07;
      let salarioFinal = salarioBase + aumento;
      alert(`"Você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa >= 15 && tempoEmpresa < 20) {
      let aumento = salarioBase * 0.12;
      let salarioFinal = salarioBase + aumento;
      alert(`"Você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa > 20) {
      let aumento = salarioBase * 0.23;
      let salarioFinal = salarioBase + aumento;
      alert(`"Você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    }
  } else {
    //Caso seja homem
    if (tempoEmpresa < 5) {
      let aumento = salarioBase * 0.03;
      let salarioFinal = salarioBase + aumento;
      alert(`"Como voce tem ${tempoEmpresa} anos de empresa você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa >= 5 && tempoEmpresa <= 19) {
      let aumento = salarioBase * 0.08;
      let salarioFinal = salarioBase + aumento;
      alert(`"Como voce tem ${tempoEmpresa} anos de empresa você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa >= 15 && tempoEmpresa < 20) {
      let aumento = salarioBase * 0.14;
      let salarioFinal = salarioBase + aumento;
      alert(`"Como voce tem ${tempoEmpresa} anos de empresa você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    } else if (tempoEmpresa > 20) {
      let aumento = salarioBase * 0.25;
      let salarioFinal = salarioBase + aumento;
      alert(`"Como voce tem ${tempoEmpresa} anos de empresa você receberá um aumento de R$ ${aumento}, Parabéns, seu novo salário é de R$ ${salarioFinal}"`);
    }
  }
}
