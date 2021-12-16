const form = document.querySelector("form");

const validaDados = (dados) => {
  const dadosValidos = {
    nome: "string",
    poder: ["Fogo", "Água", "Ar"],
    idade: "number",
    energia: "number",
  };

  const camposErrados = {};
  let eInvalido = false;

  for (const chave in dadosValidos) {
    const tipoAtualValido = dadosValidos[chave];
    const valorAtual = Number(dados[chave])
      ? parseInt(dados[chave])
      : dados[chave];

    let campoErrado = false;

    if (Array.isArray(tipoAtualValido)) {
      if (!tipoAtualValido.includes(valorAtual)) {
        campoErrado = true;
      }
    } else if (typeof valorAtual !== tipoAtualValido) {
      campoErrado = true;
    }

    if (campoErrado) {
      camposErrados[
        chave
      ] = `O campo ${chave} precisa ser do tipo ${tipoAtualValido}`;
      eInvalido = true;
    }
  }

  const resposta = {
    invalido: eInvalido,
    camposErrados,
  };

  return resposta;
};

const BANCO = [];

const createHero = (evt) => {
  evt.preventDefault();

  const inputs = evt.target;

  const heroValues = {};

  for (let i = 0; i < inputs.length; i++) {
    const { name, value } = inputs[i];

    if (name) {
      heroValues[name] = value;
    }
  }

  const verificaDados = validaDados(heroValues);

  if (verificaDados.invalido) {
    console.log(verificaDados);
  }

  console.log("Acertouuu");

  const { nome, idade, poder, energia } = heroValues;
  const novoHeroi = new Heroi(nome, poder, energia, idade);

  BANCO.push(novoHeroi);
  console.log(BANCO);
};

form.addEventListener("submit", createHero);
