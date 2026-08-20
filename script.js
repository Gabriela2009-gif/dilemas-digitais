// LÓGICA JAVASCRIPT

function responderQuiz(opcao) {
  const resultado = document.getElementById('quiz-result');
  
  if (opcao === 'sim') {
    resultado.innerText = 'Excelente! O hábito de checar fontes é a principal ferramenta contra a desinformação no Brasil.';
  } else {
    resultado.innerText = 'Fique atento! Grande parte das notícias falsas no Brasil circulam em redes de mensagens sem verificação prévia.';
  }
}

// Configura os escutadores de eventos quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  const btnSim = document.getElementById('btn-sim');
  const btnNao = document.getElementById('btn-nao');

  if (btnSim && btnNao) {
    btnSim.addEventListener('click', () => responderQuiz('sim'));
    btnNao.addEventListener('click', () => responderQuiz('nao'));
  }
});