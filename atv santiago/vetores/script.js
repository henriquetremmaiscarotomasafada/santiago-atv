
//1

let numeros = [];
let soma = 0;


for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt("Digite o " + (i+1) + "º número:"));
  soma = soma + numeros[i];
}

alert("A soma de todos os números é: " + soma);


//2

let numeros = [];

// Pedir 5 números ao usuário
for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt("Digite o " + (i+1) + "º número:"));
}

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

alert("O maior número é: " + maior);


//3

let numeros = [];


for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt("Digite o " + (i+1) + "º número:"));
}

let invertido = [];
for (let i = numeros.length - 1; i >= 0; i--) {
  invertido.push(numeros[i]);
}

alert("Vetor invertido: " + invertido);


//4

let numeros = [];
let pares = 0;


for (let i = 0; i < 5; i++) {
  numeros[i] = Number(prompt("Digite o " + (i+1) + "º número:"));
  if (numeros[i] % 2 == 0) {
    pares = pares + 1;
  }
}

alert("Quantidade de números pares: " + pares);



//5

let vetor1 = [];
let vetor2 = [];


for (let i = 0; i < 3; i++) {
  vetor1[i] = Number(prompt("Digite o " + (i+1) + "º número do primeiro vetor:"));
}


for (let i = 0; i < 3; i++) {
  vetor2[i] = Number(prompt("Digite o " + (i+1) + "º número do segundo vetor:"));
}


let vetorUnido = vetor1.concat(vetor2);

alert("Vetor unido: " + vetorUnido);

