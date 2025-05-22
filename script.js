document.getElementById('donation-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  const res = await fetch('/doar/pix', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  document.getElementById('mensagem').innerText = json.mensagem;
});

function doarCartao() {
  alert("Simulação: Cartão processado com sucesso! Pontos Livelo serão creditados.");
}
