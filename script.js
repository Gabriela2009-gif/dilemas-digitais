document.addEventListener('DOMContentLoaded', () => {
  
  // 1. ALTERNAR TEMA (DARK / LIGHT)
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });

  // 2. FILTRAGEM DE CARDS
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 3. SIMULADOR DE TEMPO DE TELA
  const slider = document.getElementById('time-slider');
  const sliderValue = document.getElementById('slider-value');
  const timeImpact = document.getElementById('time-impact');

  function atualizarCalculo() {
    const horas = parseInt(slider.value);
    sliderValue.innerText = `${horas} horas/dia`;

    const diasPorAno = Math.round((horas * 365) / 24);
    timeImpact.innerHTML = `Passando <strong>${horas}h</strong> por dia no celular, você passará cerca de <strong>${diasPorAno} dias inteiros</strong> do seu ano olhando para a tela!`;
  }

  slider.addEventListener('input', atualizarCalculo);
  atualizarCalculo();

  // 4. QUIZ RÁPIDO DE CONSCIENTIZAÇÃO
  const quizButtons = document.querySelectorAll('.btn-quiz');
  const quizResult = document.getElementById('quiz-result');

  quizButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pontos = parseInt(e.target.getAttribute('data-value'));
      quizResult.classList.remove('hidden');

      if (pontos === 2) {
        quizResult.innerText = 'Excelente! Você adota um comportamento preventivo ativo contra os riscos e desinformação no ambiente digital.';
      } else if (pontos === 1) {
        quizResult.innerText = 'Atenção moderada. Lembre-se de checar fontes com mais frequência, principalmente em conteúdos com apelativo emocional.';
      } else {
        quizResult.innerText = 'Cuidado! A navegação automática sem verificação aumenta as chances de cair em golpes e espalhar notícias falsas.';
      }
    });
  });

});