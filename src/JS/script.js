// Ativar links ativo no header
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens no orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Duvidas frequentes

const duvidas = document.querySelectorAll(".duvidas button");

function ativarDuvida(event) {
  const duvida = event.currentTarget;
  const controls = duvida.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  duvida.setAttribute("aria-expanded", ativa);
}

function eventosDuvidas(duvida) {
  duvida.addEventListener("click", ativarDuvida);
}

duvidas.forEach(eventosDuvidas);

//Trocar imagens

const foto = document.querySelectorAll(".hoverdron-img img");
const fotoContainer = document.querySelector(".hoverdron-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  fotoContainer.prepend(img);
}

function eventoFoto(img) {
  img.addEventListener("click", trocarImagem);
}

foto.forEach(eventoFoto);

// Animações
if (window.SimpleAnime) {
  new SimpleAnime();
}

const barraDecorativa = document.querySelector(".introducao-conteudo");
const spanDecorativo = document.querySelectorAll(".sublinhado");

function carregarBarra() {
  if (barraDecorativa) {
    barraDecorativa.classList.add("carregado");
  }
}
function carregarSpan() {
  spanDecorativo.forEach((span) => span.classList.add("carregado"));
}

window.addEventListener("load", function () {
  setTimeout(carregarBarra, 1000);
  setTimeout(carregarSpan, 800);
});

// Menu mobile

const menuIcon = document.getElementById('menu-icon');
const modal = document.querySelector('.modal');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    modal.classList.toggle('active');
});