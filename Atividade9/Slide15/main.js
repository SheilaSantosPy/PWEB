let number = 0, cresNumber = 0, i;
let matriz = [];

for(i = 0; i < 3; i++) {
        number = parseInt(prompt("Por favor, digite o número" ));
        matriz.push(number)
        console.log(matriz);
}

cresNumber = matriz.sort(function(a,b){return a-b});
alert(Math.max.apply(null, matriz));
alert("A ordem crescente é: " + cresNumber);


