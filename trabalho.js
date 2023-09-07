function calcula_Idade(){
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento"))
    let anoAtual = parseInt(prompt("Digite o ano atual"))

    if (isNaN(anoAtual)){
        alert("voce não digitou o ano atual")
        let dataAtual= new Date();
        anoAtual=dataAtual.getFullYear
    }
    if (anoNascimento> anoAtual){
        console.log("voce digitou a data de nascimento maior que a Data atual.Informe de novo.")
        calcula_Idade()
    }
    let idade = anoAtual-anoNascimento
console.log("voce tem ",idade,"anos.")
}
calcula_Idade()