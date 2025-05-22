const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/doar/pix', (req, res) => {
  const { nome, email, valor } = req.body;
  if (valor >= 50) {
    res.json({ mensagem: `Obrigado, ${nome}! Você receberá 5.000 pontos Livelo.` });
  } else {
    res.json({ mensagem: "O valor mínimo para ganhar pontos é R$50." });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
