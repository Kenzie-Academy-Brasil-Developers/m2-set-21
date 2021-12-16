class Heroi {
  constructor(nome, poder, energia, idade) {
    this._nome = nome;
    this._poder = poder;
    this._energia = energia;
    this._idade = idade;
  }

  get nome() {
    return this._nome;
  }

  set nome(valor) {
    if (typeof valor === "string") {
      this._nome = valor;
    }
  }

  get poder() {
    return this._poder;
  }

  set poder(valor) {
    const poderesValidos = ["Fogo", "Água", "Ar"];
    if (poderesValidos.includes(valor)) {
      this._poder = valor;
    }
  }

  get energia() {
    return this._energia;
  }

  set energia(valor) {
    if (typeof valor === "number") {
      this._energia = valor;
    }
  }

  get idade() {
    return this._idade;
  }

  set idade(valor) {
    if (typeof valor === "number") {
      this._idade = valor;
    }
  }

  luta(adversario) {
    // Falta o empate
    if (this.energia > 10 && adversario.energia > 10) {
      if (this.energia > adversario.energia) {
        this.energia -= 5;
        adversario.energia -= 10;

        return `Você ganhou a luta, ${this.nome}`;
      }
      adversario.energia -= 5;
      this.energia -= 10;

      return `Perdeuuuu! O adversário,${adversario.nome}, ganhou!`;
    } else {
      return "Vocês não estao aptos para lutar ;-;";
    }
  }
}
