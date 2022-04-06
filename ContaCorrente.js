import { Cliente } from './Cliente.js'

export class ContaCorrente {
  // ATRIBUTOS
  agencia
  _cliente
  // o atributo permanece estatico.
  //Quando e criado um novo objeto, não e criado um novo atributo "numeroDeContas"
  static numeroDeContas = 0
  // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0
  // variaves com _ devem ser consideradas privadas

  // ASSESSORES
  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) {
      this._cliente = novoCliente
    }
  }
  get cliente() {
    return this._cliente
  }

  get saldo() {
    return this._saldo
  }

  // CONSTRUTOR
  constructor(agencia, cliente) {
    this.agencia = agencia
    this._cliente = cliente
    // refere-se ao numero de contas como um todo
    ContaCorrente.numeroDeContas += 1
  }

  // METODOS (FUNÇOES)
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valor
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return
    }
    this._saldo += valor
  }

  transferir(valor, conta) {
    this.sacar(valor)
    conta.depositar(valor)
  }
}
