let prevButton = document.querySelector('.arrows .reverse');
let nextButton = document.querySelector('.arrows button:not(.reverse)');
let items = document.querySelectorAll('.list .item, .list .active');
let indicators = document.querySelectorAll('.indicator ul li');
let number = document.querySelector('.indicator .number');

let active = 0;
let lastPosition = items.length - 1;
let firstPosition = 0;

// Atualiza o carrossel para o índice atual
function updateCarousel() {
  // remove ativo anterior
  document.querySelector('.list .active').classList.remove('active');
  document.querySelector('.indicator ul li.active').classList.remove('active');

  // adiciona o novo ativo
  items[active].classList.add('active');
  indicators[active].classList.add('active');

  // atualiza número (formato 01, 02, 03)
  number.textContent = (active + 1).toString().padStart(2, '0');
}

// Avançar
function nextCarousel() {
  active = active + 1 > lastPosition ? firstPosition : active + 1;
  updateCarousel();
}

// Voltar
function prevCarousel() {
  active = active - 1 < firstPosition ? lastPosition : active - 1;
  updateCarousel();
}

// Eventos
nextButton.addEventListener('click', nextCarousel);
prevButton.addEventListener('click', prevCarousel);
