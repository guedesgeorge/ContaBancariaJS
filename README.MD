📄 Documentação do Script de Conta Bancária (Node.js)
📌 Descrição
Este script implementa um sistema simples de conta bancária utilizando Node.js e o módulo readline para interação via terminal. Permite ao usuário:

Consultar saldo;

Depositar dinheiro;

Sacar dinheiro.

📦 Dependências
js
Copiar
Editar
const readline = require('readline');
Importa o módulo readline do Node.js, usado para leitura de entrada do usuário via terminal.

💬 Interface de Leitura
js
Copiar
Editar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Cria uma interface para entrada e saída de dados no terminal.

🏦 Objeto: contaBancaria
js
Copiar
Editar
const contaBancaria = {
    titularConta: "George Guedes",
    saldo: 1000,
    ...
};
Representa a conta bancária com os seguintes atributos e métodos:

🔍 ConsultaSaldo()
js
Copiar
Editar
ConsultaSaldo: function() {
    console.log(`O saldo atual de ${this.titularConta}: R$ ${this.saldo}`);
}
Exibe o saldo atual da conta no console.

💰 DepositarDinheiro(valor)
js
Copiar
Editar
DepositarDinheiro: function(valor){
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Deposito de valor R$ ${valor} realizado com sucesso.`);
    } else {
        console.log("Valor invalido para deposito");
    }
    this.ConsultaSaldo();
}
Adiciona um valor ao saldo se ele for positivo.

Informa o sucesso da operação e mostra o novo saldo.

💸 Sacar(valor)
js
Copiar
Editar
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
Subtrai um valor do saldo se houver saldo suficiente.

Informa o resultado e mostra o novo saldo.

📋 Menu de Operações
js
Copiar
Editar
console.log("Escolha a operacao:");
console.log("1- Consultar Saldo");
console.log("2- Depositar Valor");
console.log("3- Valor"); // (Aparentemente deveria ser "Sacar Valor")
Exibe opções para o usuário interagir com a conta.

🧠 Interação com o Usuário
js
Copiar
Editar
rl.question("Digite o número da operação: ", function(opcao) {
    ...
});
Lê a escolha do usuário e executa a operação correspondente:

✅ Opção 1: Consultar Saldo
js
Copiar
Editar
if (opcao === '1') {
    contaBancaria.ConsultaSaldo();
    rl.close();
}
✅ Opção 2: Depositar Valor
js
Copiar
Editar
else if (opcao === '2') {
    rl.question("Digite o valor para depositar: ", function(valor) {
        contaBancaria.DepositarDinheiro(parseFloat(valor));
        rl.close();
    });
}
✅ Opção 3: Sacar Valor
js
Copiar
Editar
else if (opcao === '3') {
    rl.question("Digite o valor para sacar: ", function(valor) {
        contaBancaria.Sacar(parseFloat(valor));
        rl.close();
    });
}
❌ Opção Inválida
js
Copiar
Editar
else {
    console.log("opcao invalida.");
    rl.close();
}
