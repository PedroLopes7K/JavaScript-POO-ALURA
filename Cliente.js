export class Cliente {
  nome
  _cpf

  // construtotres são usados para inicializar atributos
  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }
  get cpf() {
    return this._cpf
  }
}
