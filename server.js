const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

// Rota de teste
app.get('/', (req, res) => {
  res.send({ message: "API funcionando!" });
});

// Rota de pagamento
app.post('/criar-pagamento', async (req, res) => {
  const { name, email, cpf, amount } = req.body;

  try {
    const response = await axios.post('https://srv.lemonpag.com/v1/transaction', {
      amount: amount,
      externalRef: "",
      postbackUrl: "",
      customer: {
        name: name,
        email: email,
        phone: "11999999999",
        document: {
          type: "cpf",
          number: cpf
        }
      },
      traceable: false,
      metadata: "{\"provider\":\"Checkout Transparent\"}",
      items: [
        {
          title: "Doação com Pontos Livelo",
          unitPrice: amount,
          quantity: 1,
          tangible: false,
          externalRef: "",
          product_image: ""
        }
      ],
      paymentMethod: "pix",
      installments: "1"
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'secret_Zxk1lcsTAkvqOKwj',
        'x-public-key': 'public_1FkP30Pa5pOBuNlf'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao criar transação Pix' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
