function mostrarMotos() {
  document.getElementById('moto-lista').style.display = 'flex';
}

const motos = [
  { nome: 'moto1', img: 'assets/images/moto1.jpg', link: 'motos/moto1.html' },
  { nome: 'moto2', img: 'assets/images/moto2.jpg', link: 'motos/moto2.html' },
  { nome: 'moto3', img: 'assets/images/moto3.jpg', link: 'motos/moto3.html' },
  { nome: 'moto4', img: 'assets/images/moto4.jpg', link: 'motos/moto4.html' },
  { nome: 'moto5', img: 'assets/images/moto5.jpg', link: 'motos/moto5.html' },
];

function renderizarMotos() {
  const container = document.getElementById('moto-lista');
  container.innerHTML = '';

  motos.forEach((moto) => {
    const card = document.createElement('div');
    card.className = 'moto-card';
    card.innerHTML = `
      <img src="${moto.img}" alt="${moto.nome}">
      <h3>${moto.nome}</h3>
    `;
    card.addEventListener('click', () => {
      window.location.href = moto.link;
    });
    container.appendChild(card);
  });
}

document.getElementById('btn-ver-motos').addEventListener('click', () => {
  document.getElementById('moto-lista').scrollIntoView({ behavior: 'smooth' });
});

let motosRenderizadas = false;

function mostrarMotos() {
  if (!motosRenderizadas) {
    renderizarMotos();
    motosRenderizadas = true;
  }
  document.getElementById('moto-lista').style.display = 'flex';
}
