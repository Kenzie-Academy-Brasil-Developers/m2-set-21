function criaTorres(chamaDiscos) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    let torre = document.createElement("div");
    torre.id = `torre${i}`;
    torre.className = "torre";
    container.appendChild(torre);
  }

  chamaDiscos();
}

function criaDiscos() {
  const torre1 = document.getElementById("torre1");
  for (let i = 1; i <= 4; i++) {
    let disco = document.createElement("div");
    disco.id = `disco${i}`;
    disco.className = "disco";
    torre1.appendChild(disco);
  }
}

criaTorres(criaDiscos);

let discoSelecionado,
  larguraDisco1,
  larguraDisco2,
  torreAnterior,
  jogada = 0;

function controleHanoi(e) {
  let torreSelecionada = e.currentTarget;
  let discosTorre = torreSelecionada.childElementCount;

  if (jogada === 0) {
    discoSelecionado = torreSelecionada.lastElementChild;
    if (discoSelecionado === null) {
      alert("Escolha uma torre com discos.");
    } else {
      discoSelecionado.style.border = "2px solid white";
      larguraDisco1 = discoSelecionado.clientWidth;
      torreAnterior = torreSelecionada;
      desabilitarTorre(torreSelecionada);
      jogada = 1;
    }
  }

  if (jogada === 1) {
    if (discosTorre !== 0) {
      let ultimoDisco = torreSelecionada.lastElementChild;
      larguraDisco2 = ultimoDisco.clientWidth;
    }

    if (discosTorre === 0) {
      torreSelecionada.appendChild(discoSelecionado);
      habilitarTorre(torreAnterior);
      discoSelecionado.style.border = "none";
      jogada = 0;
    }

    if (larguraDisco1 < larguraDisco2) {
      torreSelecionada.appendChild(discoSelecionado);
      habilitarTorre(torreAnterior);
      discoSelecionado.style.border = "none";
      jogada = 0;
    }

    if (larguraDisco1 > larguraDisco2) {
      alert("Não coloque um disco maior em cima de um menor");
      habilitarTorre(torreAnterior);
      discoSelecionado.style.border = "none";
      jogada = 0;
    }
  }

  verificaVitoria();
}

function desabilitarTorre(torre) {
  torre.style.pointerEvents = "none";
}

function habilitarTorre(torre) {
  torre.style.pointerEvents = "auto";
}

function verificaVitoria() {
  const ultimaTorre = document.getElementById("torre3");
  const numeroDiscos = ultimaTorre.childElementCount;

  if (numeroDiscos === 4) {
    setTimeout(() => alert("Você ganhou!"), 500);
    desabilitarTorre(ultimaTorre);
  }
}

function adicionaEvento() {
  const torres = document.querySelectorAll(".torre");
  torres.forEach((torre) => torre.addEventListener("click", controleHanoi));
}
adicionaEvento();

function reiniciarJogo() {
  jogada = 0;
  criaTorres(criaDiscos);
  adicionaEvento();
}

const reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", reiniciarJogo);
