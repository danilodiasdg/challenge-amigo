//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultados = document.getElementById("resultado");

function adicionarAmigo() {
  let nomeInserido = document.getElementById("amigo").value;
  resultados.innerHTML = "";

  // Verificar se o nome está vazio
  if (nomeInserido.trim() === "") {
    alert("Insira um nome válido!");
  }
  // Verificar se o nome contém apenas letras e espaços
  else if (!/^[a-zA-Z\s]+$/.test(nomeInserido)) {
    alert("O nome deve conter apenas letras e espaços.");
  }
  // Verificar se o nome já está na lista
  else if (amigos.includes(nomeInserido)) {
    alert("Esse amigo já está inserido no sorteio!");
    limparCampo();
  } else {
    amigos.push(nomeInserido);
    exibirNome();
    limparCampo();
  }
}

function exibirNome() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  // Verifica se existem menos de dois amigos na lista
  if (amigos.length < 2) {
    alert(
      "É necessário inserir pelo menos dois amigos para realizar o sorteio."
    );
  } else {
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    resultados.innerHTML =
      "Parabéns (" + amigos[amigoAleatorio] + "), você foi sorteado!";
    listaAmigos.innerHTML = "";
    amigos = []; // Limpa a lista de amigos após o sorteio
  }
}

function limparCampo() {
  nomeSugerido = document.getElementById("amigo");
  nomeSugerido.value = "";
}
