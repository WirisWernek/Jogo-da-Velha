var jogador = null;
var jogadorselecionado = document.getElementById("jogador_selecionado");
var jogadores = ["X", "O"];
var quadrados = document.getElementsByClassName("quadrado");

mudarjogador(jogadores[getRandomInt() - 1]);

function escolherquadrado(id) {
  var quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== "-") {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  mudarjogador(jogador);
}
function mudarjogador(valor) {
  jogador = valor;
  jogadorselecionado.innerHTML = jogador;
}

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(3);
  return Math.floor(Math.random() * (3 - 1)) + 1;
}

function checavencedor() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);
}
