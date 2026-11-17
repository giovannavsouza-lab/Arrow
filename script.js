/*O map passa por cada item de um array e devolve um array novo, do mesmo tamanho, com cada item transformado.

3.1 Use map para dobrar cada número.

const numeros = [1, 2, 3, 4];
Esperado: [2, 4, 6, 8].

3.2 Use map para colocar todos os nomes em letra maiúscula. Dica: texto.toUpperCase().

const nomes = ["ana", "bruno", "carla"];
Esperado: ["ANA", "BRUNO", "CARLA"].

3.3 Use map para criar uma lista só com os nomes dos produtos.

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];
Esperado: ["Caderno", "Caneta", "Mochila"].

 */

const numeros = [1, 2, 3, 4];
const numerosDobrados = numeros.map((numero) => numero * 2);

const nomes = ["ana", "bruno", "carla"];
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

const produtos = [
    { id: 1, nome: "Caderno", preco: 15 },
    { id: 2, nome: "Caneta", preco: 3 },
    { id: 3, nome: "Mochila", preco: 120 },
    ];
    const nomesProdutos = produtos.map((produto) => produto.nome);
