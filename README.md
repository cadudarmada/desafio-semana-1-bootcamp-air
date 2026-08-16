# Payments API

API REST simples de pagamentos desenvolvida como parte do **Workshop da Semana 1 — Git, Ambientes e Pull Requests**, da trilha de **Pagamentos Agênticos**.

O projeto foi desenvolvido com o objetivo principal de praticar **Git e GitHub em um fluxo de desenvolvimento próximo ao utilizado em equipes de software**, utilizando branches, commits, Pull Requests e promoção de alterações entre ambientes.

O fluxo praticado foi:

```text
feature → dev → stage → prod
```

---

## 🎯 Objetivo

Construir uma pequena API de pagamentos e utilizar o projeto para praticar o ciclo completo de versionamento de uma funcionalidade, desde o desenvolvimento até sua chegada ao ambiente de produção.

O foco do projeto está no **processo de versionamento**, e não na complexidade da API.

Durante o workshop foram praticados:

* criação e organização de um repositório Git;
* branches para diferentes ambientes;
* desenvolvimento através de feature branches;
* commits semânticos;
* `git push` e `git pull`;
* Pull Requests;
* revisão de alterações através do diff;
* merge;
* promoção de funcionalidades entre `dev`, `stage` e `prod`.

---

## 🛠️ Tecnologias

* **JavaScript**
* **Node.js**
* **Express**
* **Git**
* **GitHub**
* **Postman**

---

## 📁 Estrutura do projeto

```text
payments-api/
├── src/
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd payments-api
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a API

Inicie o servidor:

```bash
node src/server.js
```

A API será disponibilizada em:

```text
http://localhost:3000
```

Ao iniciar corretamente, o terminal exibirá:

```text
API rodando em http://localhost:3000
```

---

# 📡 Endpoints

## POST `/payments`

Cria um novo pagamento.

### Requisição

```text
POST http://localhost:3000/payments
```

### Body

A requisição deve utilizar `JSON`:

```json
{
    "amount": 100.00,
    "currency": "BRL",
    "payer": "alice",
    "payee": "bob"
}
```

### Resposta

Em caso de sucesso:

```text
HTTP 201 Created
```

```json
{
    "id": "pay_001",
    "amount": 100,
    "currency": "BRL",
    "payer": "alice",
    "payee": "bob",
    "status": "created"
}
```

---

## GET `/payments`

Lista os pagamentos armazenados em memória.

### Requisição

```text
GET http://localhost:3000/payments
```

### Resposta

Em caso de sucesso:

```text
HTTP 200 OK
```

```json
[
    {
        "id": "pay_001",
        "amount": 100,
        "currency": "BRL",
        "payer": "alice",
        "payee": "bob",
        "status": "created"
    }
]
```

---

# 🧪 Testes

Os endpoints foram testados utilizando o **Postman**.

### POST

```text
POST /payments
```

Foi utilizado para criar pagamentos e verificar a resposta `201 Created`.

### GET

```text
GET /payments
```

Foi utilizado para verificar se os pagamentos criados estavam sendo retornados corretamente.

---

# 🌳 Estratégia de Branches

O projeto utiliza três branches principais para representar os ambientes:

| Branch  | Ambiente        | Função                         |
| ------- | --------------- | ------------------------------ |
| `dev`   | Desenvolvimento | Integração das funcionalidades |
| `stage` | Homologação     | Validação antes da produção    |
| `prod`  | Produção        | Versão estável da aplicação    |

Para desenvolver novas funcionalidades, foi utilizada uma branch específica:

```text
feature/nome-da-funcionalidade
```

No desenvolvimento realizado neste workshop:

```text
feature/get-payments
```

---

# 🔄 Fluxo de desenvolvimento

O fluxo utilizado para adicionar o `GET /payments` foi:

```text
feature/get-payments
        │
        │ Pull Request
        ▼
       dev
        │
        │ Pull Request
        ▼
      stage
        │
        │ Pull Request
        ▼
      prod
```

A funcionalidade não foi enviada diretamente para produção.

Cada etapa foi realizada através de um Pull Request, permitindo visualizar as alterações e manter um histórico do processo.

---

# 📝 Commits

Foi utilizado o padrão de mensagens semânticas para facilitar a identificação das alterações.

Exemplos:

```text
feat: adiciona endpoint POST /payments
```

```text
feat: adiciona endpoint GET /payments
```

Esse padrão permite identificar rapidamente o propósito de cada alteração no histórico do projeto.

---

# 🔀 Pull Requests

Durante o desenvolvimento da segunda funcionalidade, foram realizados Pull Requests seguindo o fluxo:

```text
feature/get-payments → dev
dev → stage
stage → prod
```

Como o projeto foi desenvolvido individualmente, a revisão dos Pull Requests foi realizada pelo próprio desenvolvedor, analisando os diffs e verificando as alterações antes do merge.

Em um ambiente de equipe, o ideal é que Pull Requests sejam revisados por outros desenvolvedores antes de chegarem à produção.

---

# 📚 Conceitos praticados

Durante o workshop foram utilizados os principais conceitos:

### Git

```text
git init
git status
git add
git commit
git diff
git log
git switch
git pull
git push
```

### GitHub

* Repositório remoto
* Branches
* Pull Requests
* Diff
* Merge
* Histórico de alterações

### Fluxo de ambientes

```text
dev → stage → prod
```

### Fluxo de funcionalidades

```text
feature → dev → stage → prod
```

---

# ⚠️ Limitações

Este projeto possui finalidade **exclusivamente educacional**.

A API não representa um sistema real de pagamentos.

Atualmente:

* não existe banco de dados;
* os pagamentos são armazenados apenas em memória;
* os dados são perdidos quando o servidor é reiniciado;
* não existe autenticação;
* não existe autorização;
* não existe integração com gateways de pagamento;
* não foram implementadas validações avançadas.

Essas limitações são intencionais, pois o objetivo principal do workshop foi praticar **Git, GitHub e o fluxo de desenvolvimento entre ambientes**.

---

# ✅ Resultado do Workshop

Ao final do desafio, a API possui:

* [x] `POST /payments`
* [x] `GET /payments`
* [x] Repositório Git
* [x] Repositório GitHub
* [x] Branch `dev`
* [x] Branch `stage`
* [x] Branch `prod`
* [x] Feature branch
* [x] Commits
* [x] Pull Request `feature → dev`
* [x] Pull Request `dev → stage`
* [x] Pull Request `stage → prod`
* [x] Testes realizados com Postman
* [x] README
* [x] `.gitignore`

---

## 🎓 Aprendizado

O principal aprendizado deste projeto foi compreender, na prática, como uma alteração de código pode ser desenvolvida e promovida de forma controlada:

```text
Desenvolvimento
      ↓
   Feature
      ↓
     dev
      ↓
    stage
      ↓
    prod
```

O projeto demonstra que **Git não é apenas uma ferramenta para salvar versões do código**, mas também uma ferramenta fundamental para organizar o trabalho de desenvolvimento, rastrear alterações e controlar a chegada de novas funcionalidades aos diferentes ambientes.
