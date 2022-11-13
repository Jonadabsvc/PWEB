class Conta {
    constructor(nome, banco, numConta, saldo) {
        this._nome = nome;
        this._banco = banco;
        this._numConta = numConta;
        this._saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numConta, saldo, saldoEsp) {
        super(nome, banco, numConta, saldo);
        this._saldoEsp = saldoEsp;
    }

    set saldoEsp(value) {
        this._saldoEsp = value;
    }

    get saldoEsp() {
        return this._saldoEsp;
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numConta, saldo, txJuros, dtVcto) {
        super(nome, banco, numConta, saldo);
        this._txJuros = txJuros;
        this._dtVcto = dtVcto;
    }

    set txJuros(value) {
        this._txJuros = value;
    }

    set dtVcto(value) {
        this._dtVcto = value;
    }

    get txJuros() {
        return this._txJuros;
    }
    get dtVcto() {
        return this._dtVcto;
    }



}

var contaC = new Corrente();

contaC.nome = "Fuleco";
contaC.banco = "Banco da Copa";
contaC.numConta = 1234;
contaC.saldo = 1500.00;
contaC.saldoEsp = 2000.00;

var contaP = new Poupanca();
contaP.nome = "Vinícius";
contaP.banco = "Banco das Olimpiadas";
contaP.numConta = 5678;
contaP.txJuros = 5;
contaP.saldo = 2000.00;
contaP.dtVcto = "20/08/2022";

alert("Nome: " + contaC.nome + "\nBanco: " + contaC.banco + "\nConta numero: " + contaC.numConta +
    "\nSaldo: " + contaC.saldo + "\nSaldo Especial: " + contaC.saldoEsp);

alert("Nome: " + contaP.nome + "\nBanco: " + contaP.banco + "\nConta numero: " + contaP.numConta +
    "\nSaldo: " + contaP.saldo + "\nJuros: " + contaP.txJuros + " %" + "\nData de vencimento: " + contaP.dtVcto);