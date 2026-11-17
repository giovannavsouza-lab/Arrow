/*O ternário é um if/else em uma linha: condição ? seVerdadeiro : seFalso.

2.1 Reescreva com ternário.

let idade = 20;
let situacao;
if (idade >= 18) {
  situacao = "Maior de idade";
} else {
  situacao = "Menor de idade";
}
// Reescrito com ternário:
// let situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
Esperado: com idade = 20, mostra "Maior de idade". Com idade = 15, mostra "Menor de idade".

2.2 Crie a arrow function statusNota, que recebe uma nota e devolve "Aprovado" se for 7 ou mais e "Reprovado" se for menor.

Esperado: statusNota(8) mostra "Aprovado". statusNota(5) mostra "Reprovado".

2.3 Crie a arrow function textoBotao, que recebe logado (true ou false) e devolve "Sair" ou "Entrar".

Esperado: textoBotao(true) mostra "Sair". textoBotao(false) mostra "Entrar".*/

const idade = 20;
const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

const statusNota = (nota) => nota >= 7 ? "Aprovado" : "Reprovado";

const textoBotao = (logado) => logado ? "Sair" : "Entrar";

console.log(situacao);
console.log(statusNota(8));
console.log(statusNota(5));
console.log(textoBotao(true));
console.log(textoBotao(false));   