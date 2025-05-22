💰 Sistema de Conta Bancária - Node.js

Este é um projeto simples de um sistema de conta bancária desenvolvido em Node.js, utilizando o módulo nativo readline para interação com o usuário via terminal.

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
Substitua nomeDoArquivo.js pelo nome real do arquivo, por exemplo banco.js.
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
Módulo readline para entrada e saída de dados via terminal
📄 Estrutura do código

Objeto contaBancaria: contém o titular, saldo e os métodos:
ConsultaSaldo()
DepositarDinheiro(valor)
Sacar(valor)
Função mostrarMenu(): exibe o menu e permite realizar múltiplas operações até que o usuário decida sair.
✍️ Autor

George Guedes (adaptar conforme seu nome ou perfil)
📌 Observações

O sistema não armazena dados de forma persistente. Ao encerrar, os dados são perdidos.
Ideal para fins didáticos e aprendizado de JavaScript e Node.js.