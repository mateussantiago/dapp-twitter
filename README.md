# Dwitter
Dwitter é uma aplicação descentralizada executando em um blockchain Ethereum.

# Aplicação
A aplicação web foi desenvolvida com NodeJS, express, ejs e bootstrap para estilo nas páginas. O contrato foi desenvolvido 
utilizando a linguagem solidity. A comunicação com o contrato foi realizada utilizando a biblioteca Web3.js. O projeto está configurado para ser executado em um blockchain Ethereum local (Eu utilizei o ganache).

### Funcionalidades
  - Criar usuário.
  - Publicar um tweet.
  - Buscar por usuário utilizando o endereço ou nickname.
  - Seguir usuário.
  - Visualizar os tweets dos usuários seguidos (feed).
  
# Executando o projeto
#### Instalação das dependências
O primeiro passo necessário para executar o projeto é instalar as dependências com o npm.
```console
npm install
```
#### Variáveis de ambiente
Antes de executar o projeto é preciso definir duas variáveis de ambiente: <b>PORT</b>  e <b>ADDRESS_CONTRACT</b>.
Para isso, basta criar um arquivo .env no diretório do projeto e inserir as variáveis de ambiente.

<b>PORT=</b><A porta em que a aplicação vai executar> </br>
<b>ADDRESS_CONTRACT=</b><Endereço do contrato>

# Executando
Após a instalação das dependências e da configurações das variáveis de ambiente, podemos executar a aplicação.
```console
npm start
```
