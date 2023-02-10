// 01 - Crie um array que receba 5 itens e exiba no console.//

let lista = ["Morango"
,
"Abacaxi"
,
"Laranja"
,
"Uva"
,

"Kiwi"]
for(let i = 0; i < lista.length; i+=2){
console.log(`O elemento de index ${i} é o nome
${lista[i]}`)
}

//02 - Utilize um método para adicionar um nome ao inicio do array.//

let idiomas = ["Inglês"
,
"Português"
,
"Espanhol"];

idiomas.unshift("Japonês");
console.log(idiomas);

//03 - Utilize um método para remover o último nome do array.//

let países = ["Brasil"
,
"Argentina"
,
"Chile"
,

"Peru"];
países.pop();
console.log(países)

//04 - Utilize um método para adicionar dois nomes ao fim do array.//

let cidades = ["Rio de Janeiro"
,
"Madrid"
,
"Nova York"];
cidades.push("Londres", "Paris");
console.log(cidades);

//05 - Utilize um método para remover o primeiro nome do array.//

let compras = ["Geladeira"
,
"Fogão"
,
"Microondas"
,
"Televisão"];

compras.shift();
console.log(compras);

//06 - Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]//

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())
numbers.sort(function(a, b) {
    return (a-b);
    });
    console.log(numbers)

//07 - Crie um objeto que receba ao menos três propriedades sobre você.//

let propriedades = ["Criativa", "Inteligente", "Estudiosa"]
console.log(propriedades)

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.//

let propriedades$ = ["Criativa", "Inteligente", "Estudiosa"]
propriedades$.push("Bonita");
console.log(propriedades$);

//09 - Remova uma propriedade desse objeto.//

let propriedades1 = ["Criativa", "Inteligente", "Estudiosa"]
propriedades1.push("Bonita");
propriedades1.pop()
console.log(propriedades1);

//10 - Mostre no console todas as propriedades desse objeto.//

let propriedades2 = ["Criativa", "Inteligente", "Estudiosa"]
propriedades2.push("Bonita");
console.log(propriedades2);

//11- Crie um array chamado "cadastro" contendo ao menos 5 objetos. Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. Na propriedade amigos, adicione ao menos 4 itens.//

let cadastro = [
    "nome: Maria, idade: 20 anos, telefone: 2133-3221, amigos: Luana, Mariana, Lucas e Abraão",
"nome: Livia, idade: 20 anos, telefone: 6821-3991, amigos: Isabelly, Thiago, Enzo e Valentina",
"nome: Lucas, idade: 19 anos, telefone: 8933-1231, amigos: Pablo, Pedro, Marcos e Leandro",
"nome: Antonio, idade: 57 anos, telefone: 7065-8054, amigos: Jorge, José, Eduardo e Sandra",
"nome: Jéssica, idade: 32 anos, telefone: 3246-4324, amigos: Leticia, Melissa, Lorena e Brenda"
]
console.log(cadastro);

//12 - Mostre no console o nome de um amigo de cada lista.//

let amigos = ["Lucas", "Enzo", "Marcos", "Jorge", "Brenda"]
console.log(amigos)