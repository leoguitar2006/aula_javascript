let meuBotao = document.getElementById("botao");

meuBotao.onclick = function botao() {
    document.getElementById('agradecimento').innerHTML = 'Obrigado por Clicar nesse belo botão';
}

/* function somar (n1, n2) {
    return n1+n2;
}

alert(somar(5,10));

*/

/*var d = new Date();
console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1));
 var nome = "Marcos Martins";

console.log(`Olá ${nome}`); // Template String usa crase e não aspas

var lista = ['maçã', 'pera', 'laranja'];
console.log(lista[1]);
lista.push('uva'); //Add Item
console.log(lista);
lista.pop(); //remove o ultimo
console.log(lista);
console.log(lista.join('|')); //transforma em string e troca a virgula por o que eu colocar
console.log(lista);

var frutas = [{nome: 'maça', cor: 'vermelho'}, {nome: 'banana', cor: 'amarelo'}]; //dicionario de dados
console.log(frutas[1].nome);

var idade = prompt("Qual sua idade ?");

if (idade <= 18) {
    alert("Menor");
} else {
    alert("Maior");
}
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

var data = new Date(); */