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
