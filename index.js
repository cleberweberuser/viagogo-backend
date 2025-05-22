const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let token = '';

async function getToken() {
  const res = await axios.post('https://api.viagogo.net/oauth2/token', new URLSearchParams({
    grant_type: 'client_credentials'
  }), {
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  token = res.data.access_token;
}
getToken();

app.get('/api/events', async (req, res) => {
  try {
    const response = await axios.get('https://api.viagogo.net/public/v1/events', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        countryCode: 'BR',
        pageNumber: 1,
        pageSize: 10
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar eventos' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));