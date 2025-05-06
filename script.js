function pesquisaSatisfacao(){
   
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 10
    let soma = 0
    let satisfacao = 0
    let insatisfacao = 0

    while(conta <= 10){
        // Number - converte o dado informado de string para número
        // ${} - Utilizado para puxar variaveis dentro de strings
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1

        if(nota >= 8){
          satisfacao++
        } else if(nota < 5){
          insatisfacao++
        }
    }

   
    let media = soma / 10

    //mostra o resultado
    // toFixed(1) - Determina uma casa decimal para a variavel
    alert(`A média de todas as notas é ${media.toFixed(1)}`)
    alert(`O número de satisfeitos é de ${satisfacao}`)
    alert(`O número de insatisfeitos é de ${insatisfacao}`)
      
}