const motos = [
  {
    nome: 'Honda Biz 125 2025',
    img: 'assets/images/moto1.jpg',
    link: 'motos/moto1.html',
  },
  {
    nome: 'Yamaha XTZ 250',
    img: 'assets/images/moto2.jpg',
    link: 'motos/moto2.html',
  },
  {
    nome: 'Harley-Davidson Iron 883',
    img: 'assets/images/moto3.jpg',
    link: 'motos/moto3.html',
  },
  {
    nome: 'Indian Scout',
    img: 'assets/images/moto4.jpg',
    link: 'motos/moto4.html',
  },
  {
    nome: 'Kawasaki Z900',
    img: 'assets/images/moto5.jpg',
    link: 'motos/moto5.html',
  },
];

let motosRenderizadas = false;

function carregarMotoViaIframe(link) {
  const container = document.getElementById('moto-lista');
  container.innerHTML = `
    <iframe src="${link}" width="100%" height="600px" frameborder="0"></iframe>
  `;
}

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
      carregarMotoViaIframe(moto.link);
    });
    container.appendChild(card);
  });
}

document.getElementById('btn-ver-motos').addEventListener('click', () => {
  if (!motosRenderizadas) {
    renderizarMotos();
    motosRenderizadas = true;
  }
  document.getElementById('moto-lista').scrollIntoView({ behavior: 'smooth' });
});
