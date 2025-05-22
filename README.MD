 # 💰 Sistema de Conta Bancária (Node.js)

 # 📄 Descrição
Este é um sistema de conta bancária simples desenvolvido em Node.js que roda no terminal. Ele permite ao usuário realizar operações básicas com uma conta bancária:

Consultar saldo

Depositar dinheiro

Sacar dinheiro

# 📦 Dependências
O sistema utiliza apenas o módulo nativo readline do Node.js para interação com o terminal. Não é necessário instalar pacotes adicionais.

bash
Copiar código
# Node.js já inclui o readline por padrão.
▶️ Como Executar
Clone o repositório:

bash
Copiar código
git clone https://github.com/seuusuario/conta-bancaria-nodejs.git
Acesse o diretório do projeto:

bash
Copiar código
cd conta-bancaria-nodejs
Execute o script:

bash
Copiar código
node index.js
🧠 Funcionamento
Ao executar o programa, o usuário verá o seguinte menu no terminal:

css
Copiar código
Escolha a operacao:
1- Consultar Saldo
2- Depositar Valor
3- Valor


O programa então aguarda a entrada do usuário para realizar uma das operações:

#🟢 Consultar Saldo
Exibe o saldo atual da conta.

#🟡 Depositar Valor
Solicita um valor e adiciona ao saldo da conta, caso o valor seja positivo.

#🔴 Sacar Valor
Solicita um valor e realiza o saque, caso haja saldo suficiente.

#🧱 Estrutura do Código
contaBancaria: Objeto que armazena os dados da conta (titularConta, saldo) e os métodos:

ConsultaSaldo()

DepositarDinheiro(valor)

Sacar(valor)

readline.createInterface(): Utilizado para ler as entradas do usuário via terminal.

# 💻 Exemplo de Uso

bash

Copiar código

Escolha a operacao:

1- Consultar Saldo

2- Depositar Valor

3- Sacar Valor

Digite o número da operação: 1

O saldo atual de George Guedes: R$ 1000

bash

Copiar código

Digite o número da operação: 2

Digite o valor para depositar: 500

Deposito de valor R$ 500 realizado com sucesso.

O saldo atual de George Guedes: R$ 1500

bash

Copiar código

Digite o número da operação: 3

Digite o valor para sacar: 300

Saque de valor R$ 300 realizado com sucesso.

O saldo atual de George Guedes: R$ 1200

#🛠️ Melhorias Sugeridas

Corrigir o texto da opção 3 para "3- Sacar Valor"


Adicionar validações adicionais de entrada (ex: entrada vazia, valor não numérico)

Permitir múltiplas operações sem reiniciar o script

# 📄 Licença
Este projeto está licenciado sob a licença MIT.

