class Cliente{
    nome;
    cpf;
   
}

class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente;
const cliente2 = new Cliente ;

cliente1.nome="Ricardo";
cliente1.cpf =12312312312;


cliente2.nome="Alice";
cliente2.cpf =123123344312312;

const contacorrenteRicardo = new ContaCorrente();

contacorrenteRicardo.saldo =0;
contacorrenteRicardo.agencia = 1001;
console.log(contacorrenteRicardo.saldo);
contacorrenteRicardo.saldo = 100;
console.log(contacorrenteRicardo.saldo);
contacorrenteRicardo.sacar(50);

console.log(contacorrenteRicardo.saldo);


console.log(cliente1, cliente2)