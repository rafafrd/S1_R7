//Verifica que tipo de triangulo o usuario inseriu
let lado1 = parseFloat(prompt("Digite o valor do primeiro lado: "));
let lado2 = parseFloat(prompt("Digite o valor do segundo lado: "));
let lado3 = parseFloat(prompt("Digite o valor do terceiro lado: "));
if (isNaN(lado1 && lado2 && lado3)) {
  //Verifica se o user atribuiu números
  alert("Você precisa digitar um número, tente novamente! 🔁");
} else {
  if (lado1 + lado2 >= lado3 && lado1 + lado3 >= lado2 && lado3 + lado2 >= lado1) {
    if (lado1 == lado2 && lado2 == lado3) {
      alert("Triângulo equilatero");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      alert("Triângulo isósceles");
    } else {
      alert("Triângulo Escaleno");
    }
  } else {
    alert("O triangulo não fecha")
  }
}