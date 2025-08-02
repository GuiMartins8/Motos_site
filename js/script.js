const motos = [
  {
    nome: 'Honda Biz 125 2025',
    img: 'assets/images/moto1.jpg',
    link: 'motos/moto1.html',
    slug: 'biz-125',
  },
  {
    nome: 'Yamaha XTZ 250',
    img: 'assets/images/moto2.jpg',
    link: 'motos/moto2.html',
    slug: 'xtz-250',
  },
  {
    nome: 'Harley-Davidson Iron 883',
    img: 'assets/images/moto3.jpg',
    link: 'motos/moto3.html',
    slug: 'iron-883',
  },
  {
    nome: 'Indian Scout',
    img: 'assets/images/moto4.jpg',
    link: 'motos/moto4.html',
    slug: 'indian-scout',
  },
  {
    nome: 'Kawasaki Z900',
    img: 'assets/images/moto5.jpg',
    link: 'motos/moto5.html',
    slug: 'z900',
  },
];

let motosRenderizadas = false;

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
      history.pushState({ moto: moto.slug }, '', `?moto=${moto.slug}`);
      carregarMotoViaIframe(moto.link);
      toggleInterface('detalhe');
    });
    container.appendChild(card);
  });
}

function carregarMotoViaIframe(link) {
  document.getElementById('moto-lista').innerHTML = `
    <iframe src="${link}" width="100%" height="600px" frameborder="0"></iframe>
  `;
}

function toggleInterface(estado) {
  const btnVer = document.getElementById('btn-ver-motos');
  const btnVoltar = document.getElementById('btn-voltar');

  if (estado === 'detalhe') {
    btnVer.style.display = 'none';
    btnVoltar.style.display = 'inline-block';
  } else {
    btnVer.style.display = 'inline-block';
    btnVoltar.style.display = 'none';
    document.getElementById('moto-lista').innerHTML = '';
    motosRenderizadas = false;
  }
}

document.getElementById('btn-ver-motos').addEventListener('click', () => {
  if (!motosRenderizadas) {
    renderizarMotos();
    motosRenderizadas = true;
  }
  document.getElementById('moto-lista').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-voltar').addEventListener('click', () => {
  history.pushState({}, '', window.location.pathname); // limpa o query param
  toggleInterface('lista');
  renderizarMotos();
  motosRenderizadas = true;
  document.getElementById('moto-lista').scrollIntoView({ behavior: 'smooth' });
});

// Ao carregar a página com ?moto=slug
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('moto');
  if (slug) {
    const moto = motos.find((m) => m.slug === slug);
    if (moto) {
      carregarMotoViaIframe(moto.link);
      toggleInterface('detalhe');
    }
  }
});
