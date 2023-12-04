# Projeto Teste Full-Stack Developer - README

Este repositório contém uma aplicação full-stack desenvolvida utilizando Node.js, PostgreSQL e React Native Expo. A aplicação consiste em um CRUD de usuários com autenticação por webtoken e uma interface mobile para login e acesso aos dados da Punk API v2 da BrewDog.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- npm (Node Package Manager)
- PostgreSQL
- Expo CLI

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL para a aplicação.
2. Abra o arquivo `backend/config/database.js` e configure as credenciais do banco de dados

```bash
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  define: {
    timestamps: true,
    underscored: true,
  },
};
```

3. Execute as migrations para criar as tabelas do banco de dados.

```bash
cd backend
npx sequelize-cli db:migrate
```

## Instalação e Configuração do Backend

1. Instale as dependências do backend.

```bash
cd backend
npm install
```

2. Inicie o servidor Node.js.

```bash
cd src
node app.js
```

O backend estará rodando em http://localhost:3000.

## Instalação e Configuração do Frontend (React Native Expo)

1. Instale o Expo CLI globalmente.

```bash
npm install -g expo-cli
```

2. Vá para o diretório frontend.

```bash
cd frontend
```

3. Instale as dependências do frontend.

```bash
npm install
```

4. Abra o arquivo `frontend/src/api/api.js` e configure a URL do backend.

```bash
const api = axios.create({
  baseURL: 'http://localhost:3000', // altere para a URL do seu backend
});
```

5. Inicie o aplicativo Expo.

```bash
npx expo start
```

## Imagens 
<img src="https://github.com/apenaspadua/full-stack-test/blob/master/images/Simulator%20Screenshot%20-%20iPhone%2011%20-%202023-12-03%20at%2020.57.40.png">
<img src="https://github.com/apenaspadua/full-stack-test/blob/master/images/Simulator%20Screenshot%20-%20iPhone%2011%20-%202023-12-03%20at%2020.57.44.png">
<img src="https://github.com/apenaspadua/full-stack-test/blob/master/images/Simulator%20Screenshot%20-%20iPhone%2011%20-%202023-12-03%20at%2020.58.06.png">
<img src="https://github.com/apenaspadua/full-stack-test/blob/master/images/Simulator%20Screenshot%20-%20iPhone%2011%20-%202023-12-03%20at%2020.58.21.png">


## Contributing
@apenaspadua
