
let idade = 0, sexo = 0, opiniao = 0;
let i = 0 ,mediaIdade =0 , maiorIdade = 0,menorIdade = 0,TotalHomens = 0, totalMulheres = 0, totalPessimo = 0, porc = 0, totalIdade = 0, qtdBomOtimo = 0;

for( i = 0; i < 45; i ++) {

    idade = parseInt(prompt("Por favor, digite a sua idade" ));
    sexo = parseInt(prompt("Por favor digite o seu sexo: 1 - Feminino ou 2 - Masculino"));
    opiniao = parseInt(prompt("Por favor digite sua opinião sobre o filme: 4 - Ótimo, 3 - Bom, 2 - Regular ou 1 - Péssimo" ));

    if(idade > maiorIdade) {
         maiorIdade = idade;
    }

    if(idade < menorIdade || menorIdade == 0){
        menorIdade = idade;
    }

    if( opiniao == 1) {
        totalPessimo++;
    }

    if( opiniao == 4 || opiniao == 3) {
        qtdBomOtimo++; 
    }

    if(sexo == 1 ) {
        totalMulheres++;
    }

    if(sexo == 2) {
        TotalHomens++;
    }

    totalIdade += idade;

}

porc = (qtdBomOtimo * 100) / 45;
mediaIdade = totalIdade / 2;
alert("A media das idades é: " + mediaIdade);
alert("A idade da pessoa mais velha: " + maiorIdade);
alert("A idade da pessoa mais nova é: " + menorIdade);
alert("O total de pessoas que responderam péssimo é: " + totalPessimo);
alert("A porcentagem de respostas para ótimo e bom:  " + porc + "%");
alert("O número total de mulheres: " + totalMulheres);
alert("O número total de homens é: " + TotalHomens);