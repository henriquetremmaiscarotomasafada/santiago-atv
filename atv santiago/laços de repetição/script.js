

//1

let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
  alert(numero + " x " + i + " = " + (numero * i));
}




//2

for (let i = 1; i <= 10; i++) {
  alert(i);
}


//3

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}


//4


for (let i = 10; i >= 1; i--) {
  alert(i);
}
alert("Foguete lançado! ");


//5


let soma = 0;
let numero = 1;

while (soma <= 100) {
  soma = soma + numero;
  numero = numero + 1;
}

alert("Soma final: " + soma + "\nÚltimo número somado: " + (numero - 1));


//6


let i = 1;

while (i <= 15) {
  if (i % 2 != 0) {
    alert(i);
  }
  i = i + 1;
}


//7


let passos = 0;

while (passos < 10) {
  passos = passos + 1;
  alert("Passos dados: " + passos);
}

alert("Você terminou sua caminhada!");


//8


let numeroSecreto = 7;
let chute = 0;

while (chute != numeroSecreto) {
  chute = Number(prompt("Tente adivinhar o número secreto (1 a 10):"));
  if (chute != numeroSecreto) {
    alert("Errado! Tente novamente.");
  }
}

alert("Parabéns! Você acertou o número!");




