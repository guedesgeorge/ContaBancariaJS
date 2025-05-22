const readline = require('readline');

const rl = readline .createInterface ({
    input: process.stdin,
    output: process.stdout
});

const contaBancaria = {
    titularConta: "George Guedes",
    saldo: 1000,

    ConsultaSaldo: function() {
        console.log(`O saldo atual de ${this.titularConta}: R$ ${this.saldo}`);
    },

    DepositarDinheiro: function(valor){
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Deposito de valor R$ ${valor} realizado com sucesso.`)

        }else {
            console.log("Valor invalido para deposito")
        }
        this.ConsultaSaldo();
    },

    Sacar: function(valor) {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                console.log(`Saque de valor R$ ${valor} realizado com sucesso.`);
            } else {
                console.log("Saldo insuficiente para realizar o saque.");
            }
        } else {
            console.log("Valor inválido para saque.");
        }
        this.ConsultaSaldo();
    }
};


console.log("Escolha a operacao:")
console.log("1- Consultar Saldo")
console.log("2- Depositar Valor")
console.log("3- Sacar Valor")

rl.question("Digite o número da operação: ", function(opcao) {
    if (opcao === '1') {
        contaBancaria.ConsultaSaldo();
        rl.close();
    } else if (opcao === '2') {
        rl.question("Digite o valor para depositar: ", function(valor) {
            contaBancaria.DepositarDinheiro(parseFloat(valor));
            rl.close();
        });
    } else if (opcao === '3') {
        rl.question("Digite o valor para sacar: ", function(valor) {
            contaBancaria.Sacar(parseFloat(valor));
            rl.close();
        });
    } else {
        console.log("opcao invalida.");
        rl.close();
 }
    });