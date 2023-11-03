## API de Avaliação de Restaurantes

Este repositório contém o código-fonte de uma API de avaliação de restaurantes. A API foi construída usando Node.js, Express.js, Sequelize ORM e outras tecnologias.

# Como configurar e executar a API

Siga as etapas abaixo para configurar e executar a API em seu ambiente local.

# Requisitos

    Node.js instalado em seu sistema.
    Banco de dados MySQL configurado.

# Instalação

    Clone o repositório para o seu sistema:

    bash

git clone https://seu-repositorio.com/api-avaliacao-restaurantes.git
cd api-avaliacao-restaurantes

Instale as dependências do projeto:

    npm install

Configuração do banco de dados:

    Abra o arquivo databases/conecta.js e configure as informações de conexão do banco de dados MySQL (host, usuário, senha, porta).
    Certifique-se de que o banco de dados está criado e pronto para uso.

Migre o esquema do banco de dados:

    npx sequelize-cli db:migrate

Inicie o servidor:

    npm start

A API agora está em execução na porta 3000.

# Rotas da API

A API fornece as seguintes rotas e funcionalidades:

    /usuarios
        GET: Recupera a lista de usuários.
        POST: Cria um novo usuário.
        PUT: Altera a senha do usuário.

    /avaliacoes
        GET: Recupera a lista de avaliações de restaurantes.
        POST: Cria uma nova avaliação de restaurante.
        DELETE: Exclui uma avaliação de restaurante.

    /restaurantes
        GET: Recupera a lista de restaurantes.
        POST: Cria um novo restaurante.
        DELETE: Exclui um restaurante.

    /login
        GET: Realiza a autenticação do usuário e gera um token JWT para acesso às rotas protegidas.

    /enviaemail
        POST: Envia um email com um link para alteração de senha.

# Estrutura do Projeto

O projeto está organizado da seguinte forma:

    controllers: Contém os controladores para cada rota da API.
    databases: Configurações do banco de dados e modelos Sequelize.
    middlewares: Middlewares para a autenticação.
    models: Definições dos modelos Sequelize.
    routes: Definição das rotas da API.
    index.js: Arquivo de inicialização do servidor.

Tecnologias Utilizadas

    Node.js
    Express.js
    Sequelize (ORM)
    MySQL (banco de dados)
    JWT (autenticação)
    Nodemailer (envio de emails)
    Bcrypt (criptografia de senhas)
