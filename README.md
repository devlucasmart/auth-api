# Auth API Service

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![Express](https://img.shields.io/badge/Express-4.19-blue.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-11-darkblue.svg)
![Docker](https://img.shields.io/badge/Docker-Supported-lightblue.svg)

Este é um serviço de **Autenticação** desenvolvido utilizando **Node.js**, **Express 4.19** e **PostgreSQL 11** como banco de dados. A aplicação fornece endpoints para autenticação de usuários, gerenciamento de tokens e controle de acessos.

## Funcionalidades Principais

- Registro de usuários.
- Autenticação via **JWT** (JSON Web Token).
- Proteção de rotas com middleware de autenticação.
- Refresh token para renovação de sessão.
- Integração com **PostgreSQL** para armazenamento de usuários.

## Pré-requisitos

- **Node.js 18 ou superior**
- **PostgreSQL 11**
- **Docker** (opcional, para executar o banco de dados)
- **npm ou yarn** para gerenciar dependências

## Instalação e Configuração

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/auth-api.git

## Comando para instalar o Container do Postgres:
  - docker run --name auth-db -p 5432:5432 -e POSTGRES_DATABASE=auth-db -e POSTGRES_USERNAME=user -e POSTGRES_PASSWORD=user -d postgres:11
