
function alternarTema() {
  const body = document.body;
  const icone = document.getElementById("icone-tema");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icone.src = "../Docs/Assets/light_mode_44dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg"; 
  } else {
    icone.src = "../Docs/Assets/dark_mode_44dp_1F1F1F_FILL0_wght400_GRAD0_opsz48.svg"; 
  }
}

let tamanhoFonte = parseInt(localStorage.getItem('fonte')) || 16;
document.body.style.fontSize = tamanhoFonte + 'px';

function mudarFonte(Delta) {
  tamanhoFonte = Math.min(Math.max(tamanhoFonte + Delta, 12), 24);
  document.body.style.fontSize = tamanhoFonte + 'px';
  localStorage.setItem('fonte', tamanhoFonte);
}
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value.trim();
  const privacidade = document.getElementById('privacidade').checked;

  if (nome.length < 2) {
    alert('Por favor, insira seu nome completo.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  if (assunto === '') {
    alert('Por favor, selecione um assunto.');
    return;
  }

  if (mensagem.length < 10) {
    alert('A mensagem deve ter pelo menos 10 caracteres.');
    return;
  }

  if (!privacidade) {
    alert('Você precisa concordar com a política de privacidade.');
    return;
  }

  alert('Mensagem enviada com sucesso!');
  this.reset();
});