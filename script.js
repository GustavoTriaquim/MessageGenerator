document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    "Você ilumina meus dias.",
    "Cada momento ao seu lado é um presente.",
    "Seu sorriso é a minha canção favorita.",
    "Meu amor por você só cresce a cada dia.",
    "Você é o meu refúgio.",
    "Com você, o mundo fica mais bonito.",
    "Amar você é a melhor parte da minha vida.",
    "Seu abraço é o meu lugar seguro.",
    "Nada é mais precioso do que o nosso amor.",
    "Você é a razão do meu sorriso.",
    "Ao seu lado, cada dia é uma aventura.",
    "Só você consegue me fazer sentir assim.",
    "Nosso amor é a minha fortaleza.",
    "Com você, todos os obstáculos se tornam pequenos.",
    "Cada dia é um capítulo novo na nossa história de amor.",
    "Você é a definição de perfeição.",
    "Nossa conexão é inexplicável.",
    "Com você, encontrei meu lar.",
    "Não existe lugar onde eu prefira estar.",
    "Você é o meu sonho real"
  ];

  const button = document.getElementById('generate-btn');
  const messageParagraph = document.getElementById('message');

  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageParagraph.textContent = messages[randomIndex];
  });
});