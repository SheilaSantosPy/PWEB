class Conta {
    constructor(nome_correntista, banco, num_Conta,saldo) {
        this.nome_correntista = nome_correntista;
        this.banco = banco;
        this.num_Conta = num_Conta;
        this.saldo = saldo;
    }

    getNomeCorrentista () {
        return this.nome_correntista;
    }

    setNomeCorrentista (value) {
        this.nome_correntista = value;
    }

    getBanco () {
        return this.banco;
    }

    setBanco (value) {
        this.banco = value;
    }

    getNumConta () {
        return this.num_Conta;
    }

    setNumConta (value) {
        this.num_Conta = value;
    }

    getSaldo () {
        return this.saldo;
    }

    setSaldo (value) {
        this.saldo = value;
    }
}

class Corrente extends Conta  {
    constructor(saldo_especial) {
        super(saldo_especial);
    }

    getSaldoEspecial () {
        return this.saldo_especial;
    }

    setSaldoEspecial(value) {
        this.saldo_especial = value;
    }
}

class Poupanca extends Conta {
    constructor(juros, data_vencimento) {
        super(juros);
        this.data_vencimento = data_vencimento;
    }

    getJuros () {
        return this.juros;
    }

    setJuros(value) {
        this.juros = value;
    }

    getDataVenc () {
        return this.data_vencimento;
    }

    setDataVenc (value) {
        this.data_vencimento = value;
    }
}

Corrente.prototype = new Conta ();
//Poupanca.prototype = new Conta();

contaCorrente = new Corrente("Shirley", "Bradesco", 55, 15000, 100);
contaPoupanca = new Poupanca("Charles", "Itau", 999, 20000, 700, "06/11/2022");


alert(contaCorrente.nome_correntista);
alert(contaCorrente.banco);

/*alert ("Conta Corrente: \n Nome: " + contaCorrente.getNomeCorrentista()
        + "\n Banco: " + contaCorrente.getBanco()
        + "\n Numero da conta: " + contaCorrente.getNumConta()
        + "\n Saldo: " + contaCorrente.getSaldo()
        + "\n Saldo especial: " + contaCorrente.getSaldoEspecial());
*/

/*alert ("Conta Poupanca: \n Nome: " + contaPoupanca.getNomeCorrentista()
        + "\n Banco: " + contaPoupanca.getBanco()
        + "\n Numero da conta: " + contaPoupanca.getNumConta()
        + "\n Saldo: " + contaPoupanca.getSaldo()
        + "\n Juros: " + contaPoupanca.getJuros()
        + "\n Data vencimento: " + contaPoupanca.getDataVenc());
*/