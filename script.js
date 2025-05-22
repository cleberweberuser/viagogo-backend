document.getElementById('doacaoForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    cpf: formData.get('cpf'),
    amount: parseInt(formData.get('amount')) * 100
  };

  try {
    const res = await fetch('/criar-pagamento', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    document.getElementById('resultado').innerText = JSON.stringify(json, null, 2);
  } catch (err) {
    document.getElementById('resultado').innerText = 'Erro ao gerar pagamento.';
  }
});
