//Verifica se 2 numeros são iguais com tratamento de erro
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo numero"));
if (isNaN(n1)) {
  alert("Você precisa digitar um número, tente novamente! 🔁");
}
if (!isNaN(n1)) {
  if (isNaN(n2)) {
    alert("Você precisa digitar um número, tente novamente! 🔁");
  }
  if (!isNaN(n2)) {
    if (n1 == n2) {
      alert("Os números são iguais!");
    } else {
      alert("Os números não são iguais!");
    }
  }
}
