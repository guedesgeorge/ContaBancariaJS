Sistema de Conta Bancária (Node.js)
Descrição
Este é um sistema simples de conta bancária desenvolvido em Node.js. Ele permite ao usuário interagir com a conta bancária no terminal para realizar as seguintes operações:

Consultar saldo

Depositar dinheiro

Sacar dinheiro

Dependências
Este projeto usa o módulo readline do Node.js para interagir com o usuário via terminal.

bash
Copiar
Editar
npm install readline
Como Rodar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seuusuario/conta-bancaria-nodejs.git
Entre na pasta do projeto:

bash
Copiar
Editar
cd conta-bancaria-nodejs
Execute o script:

bash
Copiar
Editar
node index.js
Estrutura do Código
1. Objeto contaBancaria
O objeto contaBancaria contém as principais funcionalidades e atributos da conta, como o titular e o saldo. Ele possui os seguintes métodos:

ConsultaSaldo()
Exibe o saldo atual da conta.

js
Copiar
Editar
ConsultaSaldo: function() {
    console.log(`O saldo atual de ${this.titularConta}: R$ ${this.saldo}`);
}
DepositarDinheiro(valor)
Adiciona um valor ao saldo, se o valor for positivo.

js
Copiar
Editar
DepositarDinheiro: function(valor) {
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
    } else {
        console.log("Valor inválido para depósito.");
    }
    this.ConsultaSaldo();
}
Sacar(valor)
Subtrai um valor do saldo, se houver saldo suficiente e o valor for válido.

js
Copiar
Editar
Sacar: function(valor) {
    if (valor > 0) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    } else {
        console.log("Valor inválido para saque.");
    }
    this.ConsultaSaldo();
}
2. Interação com o Usuário
O script exibe um menu para o usuário escolher a operação que deseja realizar:

js
Copiar
Editar
console.log("Escolha a operação:");
console.log("1- Consultar Saldo");
console.log("2- Depositar Valor");
console.log("3- Sacar Valor");
A operação escolhida é processada da seguinte forma:

Opção 1: Exibe o saldo atual.

Opção 2: Solicita um valor e deposita esse valor na conta.

Opção 3: Solicita um valor e realiza o saque, caso o saldo seja suficiente.

3. Exemplo de Interação
Quando o script é executado, o terminal pede para o usuário escolher uma operação:

bash
Copiar
Editar
Escolha a operação:
1- Consultar Saldo
2- Depositar Valor
3- Sacar Valor
Após escolher a operação, o script solicita mais informações, dependendo da operação escolhida.

Exemplo de Uso
Consultar saldo:

bash
Copiar
Editar
Escolha a operação:
1- Consultar Saldo
O saldo atual da conta será exibido no console.

Depositar valor:

bash
Copiar
Editar
Escolha a operação:
2- Depositar Valor
Digite o valor para depositar: 500
Após o depósito, o saldo atualizado será mostrado.

Sacar valor:

bash
Copiar
Editar
Escolha a operação:
3- Sacar Valor
Digite o valor para sacar: 200
Após o saque, o saldo atualizado será mostrado.

Contribuindo
Faça um fork do repositório.

Crie uma branch para a sua feature:

bash
Copiar
Editar
git checkout -b minha-nova-feature
Faça as modificações e commit:

bash
Copiar
Editar
git commit -m 'Adiciona nova funcionalidade X'
Push para a branch:

bash
Copiar
Editar
git push origin minha-nova-feature
Abra um pull request.

Licença
Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
