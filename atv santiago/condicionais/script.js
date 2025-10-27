

1

let idade = parseInt(prompt("Digite sua idade:"));

if (idade >= 16) {
  console.log("Você já pode votar!");
} else {
  console.log("Você ainda não tem idade para votar.");
}


2

let numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}


3

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  console.log("Login bem-sucedido! Bem-vindo(a).");
} else {
  console.log("Usuário ou senha incorretos. Acesso negado.");
}


4

let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));
let dia;

switch (numeroDia) {
  case 1:
    dia = "Domingo";
    break;
  case 2:
    dia = "Segunda-feira";
    break;
  case 3:
    dia = "Terça-feira";
    break;
  case 4:
    dia = "Quarta-feira";
    break;
  case 5:
    dia = "Quinta-feira";
    break;
  case 6:
    dia = "Sexta-feira";
    break;
  case 7:
    dia = "Sábado";
    break;
  default:
    dia = "Número inválido. Digite de 1 a 7.";
}


5

let numero = parseInt(prompt("Digite um número:"));

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}


6

let nota = Number(prompt("Digite a nota (de 0 a 100):"));

if (nota >= 90) {
  alert("Nota A");
} else if (nota >= 80) {
  alert("Nota B");
} else if (nota >= 70) {
  alert("Nota C");
} else if (nota >= 60) {
  alert("Nota D");
} else {
  alert("Nota F");
}



7

let valor = Number(prompt("Digite o valor da compra:"));
let valorFinal;

if (valor >= 100) {
  valorFinal = valor - (valor * 0.1); // tira 10%
  alert("Desconto de 10% aplicado!");
} else {
  valorFinal = valor; // sem desconto
  alert("Sem desconto.");
}

alert("Valor final: R$ " + valorFinal.toFixed(2));


8



let a = Number(prompt("Digite o primeiro lado:"));
let b = Number(prompt("Digite o segundo lado:"));
let c = Number(prompt("Digite o terceiro lado:"));

if (a + b > c && a + c > b && b + c > a) {
  alert("É um triângulo!");

  if (a == b && b == c) {
    alert("Triângulo Equilátero");
  } else if (a == b || a == c || b == c) {
    alert("Triângulo Isósceles");
  } else {
    alert("Triângulo Escaleno");
  }
} else {
  alert("Não é um triângulo!");
}


9


let idade = Number(prompt("Digite sua idade:"));

if (idade < 0) {
  alert("Idade inválida!");
} else if (idade <= 12) {
  alert("Você é uma criança.");
} else if (idade <= 17) {
  alert("Você é um adolescente.");
} else if (idade <= 59) {
  alert("Você é um adulto.");
} else {
  alert("Você é um idoso.");
}


10



let num1 = Number(prompt("Digite o primeiro número:"));
let operador = prompt("Digite o operador (+, -, *, /):");
let num2 = Number(prompt("Digite o segundo número:"));

let resultado;

if (operador == "+") {
  resultado = num1 + num2;
} else if (operador == "-") {
  resultado = num1 - num2;
} else if (operador == "*") {
  resultado = num1 * num2;
} else if (operador == "/") {
  if (num2 == 0) {
    alert("Não pode dividir por zero!");
  } else {
    resultado = num1 / num2;
  }
} else {
  alert("Operador inválido!");
}

if (resultado != undefined) {
  alert("O resultado é: " + resultado);
}
