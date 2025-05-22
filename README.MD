💰 Sistema de Conta Bancária - Node.js

Projeto simples de um sistema de conta bancária, desenvolvido com Node.js utilizando o módulo nativo readline para interação no terminal.

✅ Funcionalidades

Consultar saldo da conta.
Depositar dinheiro.
Sacar dinheiro.
Sistema interativo com menu.
Retorno automático ao menu após cada operação.
Encerrar o sistema ao escolher a opção "Sair".
🚀 Como executar o projeto

Clone este repositório:
git clone <URL_DO_REPOSITORIO>
Acesse a pasta do projeto:
cd nome-da-pasta
Execute o programa:
node nomeDoArquivo.js
OBS: Substitua nomeDoArquivo.js pelo nome real do arquivo, por exemplo: banco.js.
💡 Exemplo de uso

=== MENU ===
1 - Consultar saldo
2 - Depositar
3 - Sacar
4 - Sair

Digite o número da operação: 1

O saldo atual de George Guedes: R$ 1000
Após realizar uma operação, o sistema automaticamente retorna ao menu principal.

🛠️ Tecnologias utilizadas

Node.js (JavaScript)
Módulo nativo readline para entrada e saída de dados no terminal
📄 Estrutura do código

Objeto contaBancaria:
titularConta: nome do titular.
saldo: valor atual da conta.
ConsultaSaldo(): exibe o saldo.
DepositarDinheiro(valor): adiciona valor ao saldo.
Sacar(valor): retira valor do saldo.
Função mostrarMenu():
Exibe as opções do menu.
Permite realizar múltiplas operações até a opção de sair.
✍️ Autor

George Guedes
(ou personalize com seu nome e links de rede social se quiser)
📌 Observações

O sistema não armazena dados de forma persistente.
Ideal para fins didáticos e aprendizado de JavaScript com Node.js.
