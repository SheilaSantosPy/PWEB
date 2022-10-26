let numAleatorio = Math.floor(Math.random() * 3) + 1 , opUsuario = 0

function Evento(){
    opUsuario = parseInt(prompt("Por favor, digite um número para jogar: 1 - Pedra, 2 - Papel, 3 - Tesoura"));
    console.log(numAleatorio);

    if (opUsuario === 1 && numAleatorio === 1 || opUsuario === 2 && numAleatorio === 2 || opUsuario === 3 && numAleatorio ===3  ) {
        alert("Ahhhh, empatamos");
    }
    
    else if(opUsuario === 1 && numAleatorio === 2) {
        alert("Que pena você perdeu, Papel cobre a pedra");
    }
    
    else if (opUsuario === 2 && numAleatorio === 1 || opUsuario === 3 && numAleatorio === 2 || opUsuario === 1 && numAleatorio === 3) {
        alert("Parabéns, você ganhou!!!");
    }
    
    else if (opUsuario === 2 && numAleatorio === 3) {
        alert("Que pena você perdeu, a tesoura corta o papel");
    }
}





