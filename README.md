# Backend Viagogo (Exemplo)

Este é um backend básico com Express para retornar eventos fictícios, pronto para hospedar no Render.

## 📁 Estrutura

- `index.js` - Código do servidor Express
- `package.json` - Dependências e configuração
- `README.md` - Este guia

## 🚀 Como usar no Render

1. Crie um repositório no GitHub com esses arquivos.
2. Acesse [https://dashboard.render.com](https://dashboard.render.com)
3. Clique em **New > Web Service**
4. Conecte seu repositório do GitHub
5. Configure assim:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Clique em "Create Web Service"

✅ O backend responderá em:  
```
https://seu-backend.onrender.com/api/events
```

Você pode então integrar isso ao seu site HTML usando JavaScript com `fetch()`.