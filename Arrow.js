//1.1 Converta para arrow function.//

/*function saudacao(nome) {
  return "Olá, " + nome;
}
Esperado: saudacao("Ana") mostra "Olá, Ana".

1.2 Crie a arrow function soma, que recebe dois números e devolve a soma.

Esperado: soma(2, 3) mostra 5.

1.3 Crie a arrow function comDesconto, que recebe um preço e devolve o preço com 10% de desconto. Escreva em uma linha só, sem chaves e sem return.
s
Esperado: comDesconto(100) mostra 90.*/

const saudacao = (nome) => "Olá, " + nome;

const soma = (a, b) => a + b;

const comDesconto = (preco) => preco * 0.9;

console.log(saudacao("Ana"));
console.log(soma(2, 3));
console.log(comDesconto(100));