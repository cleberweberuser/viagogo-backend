# Viagogo API Proxy (Backend)

Este é um backend em Node.js que atua como intermediário entre seu site em HTML e a API oficial da Viagogo.

## 🚀 Funcionalidade
- Faz autenticação OAuth2 com a Viagogo
- Expõe rota `/api/events` para consultar eventos no Brasil

## 📦 Estrutura do projeto

```
backend/
├── index.js          # Código principal do servidor
├── package.json      # Dependências e configuração
└── README.md         # Este arquivo
```

## 🔧 Como rodar localmente

1. Instale as dependências:
```bash
npm install
```

2. Crie um arquivo `.env` com suas credenciais da Viagogo:
```
CLIENT_ID=sua_client_id_aqui
CLIENT_SECRET=seu_client_secret_aqui
```

3. Rode o servidor:
```bash
node index.js
```

## ☁️ Deploy no Render

1. Crie um repositório no GitHub com esses arquivos
2. Acesse [https://render.com](https://render.com) e clique em "New Web Service"
3. Conecte ao GitHub e selecione o repositório
4. Configure:
   - Environment: Node
   - Start Command: `node index.js`
   - Environment Variables: `CLIENT_ID` e `CLIENT_SECRET`
5. Após o deploy, você verá uma URL pública como:  
   `https://seu-backend.onrender.com/api/events`

Use essa URL no seu site HTML para buscar os eventos.

---

Desenvolvido para integração com Viagogo. Qualquer uso deve seguir os termos da Viagogo.