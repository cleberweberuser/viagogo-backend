const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/events', (req, res) => {
  res.json({
    message: 'API funcionando!',
    exemplo: [
      { nome: 'Evento 1', local: 'São Paulo' },
      { nome: 'Evento 2', local: 'Rio de Janeiro' }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});