function Aluno(nome, RA) {
    this.RA = RA;
    this.nome = nome;
}

const aluno = new Aluno("Sheila", "0030482111038");
alert("Nome do aluno é: " + aluno.nome + "\n" + "O RA é: " + aluno.RA);
