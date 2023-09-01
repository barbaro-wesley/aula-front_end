// criando uma variavel com o valor inicial com o meu nome
let nome ="wesley";
console.log("nome:",nome);
//exercicio 2
let preco =142 ;
let quantidade= 2;
console.log("o preço é :",preco,"e a quantidade é :",quantidade);

//exercicio 3
let valor_total = preco* quantidade
console.log("o valor da compra é:",valor_total);

//exercicio 4
let outro_nome = "wesley";
let idade = 18;
console.log("meu nome é ",outro_nome , " e minha idade é",idade);

// exercicio 5
let valorProduto ;
console.log(valorProduto);
// idefinido

//exercicio 6
let valorProduto1= null ;
console.log(valorProduto1);
/* indefinido
null é um valor que representa a ausência intencional de qualquer valor ou objeto.
undefined é um valor atribuído a variáveis que foram declaradas, mas não foram inicializadas com um valor..*/

//exercicio 7
let valorProduto2= "750";
let valorProduto3="120";
console.log(valorProduto2+valorProduto3);
/* quando é colocado aspas em numeros inteiros e usa uma operação de +, ao inves de somar ele vai juntar os valores ao inves de somar.
para somar numeros não deve colocar aspas */

//exercicio 8
let produto = "iphone";
let valor = 6000;
let quant= 3;
let compra = valor*quant;
console.log(produto,",valor unitario:",valor,"total da compra:",compra)

//exercicio 9
let produtos = [ "iphone","xbox","notebook"]
let precos = [6000,4500,8000]
quantidade=[3,2,3]
console.log(produtos[0],"o valor unitario é :",precos[0],",valor total",precos[0]*quantidade[0]);
console.log(produtos[1],"o valor unitario é :",precos[1],",valor total",precos[1]*quantidade[1]);
console.log(produtos[2],"o valor unitario é :",precos[2],",valor total",precos[2]*quantidade[2]);

//exercicio 10
function teste(){
    console.log("seja bem vindo")
}
teste()

// exercicio 11
function calcula(){
    let produtos = [ "iphone","xbox","notebook"]
let precos = [6000,4500,8000]
quantidade=[3,2,3]
console.log(produtos[0],"o valor unitario é :",precos[0],",valor total",precos[0]*quantidade[0]);
console.log(produtos[1],"o valor unitario é :",precos[1],",valor total",precos[1]*quantidade[1]);
console.log(produtos[2],"o valor unitario é :",precos[2],",valor total",precos[2]*quantidade[2]);
}
calcula()

//exercio 12

/*let name = prompt("informe seeu nome:");
console.log(name);*/

// exercico 13
let nome1 = prompt("informe seu nome:")
let nome2= prompt("informe seu sobrenome")
console.log("seja bem vindo ,",nome1, nome2)
