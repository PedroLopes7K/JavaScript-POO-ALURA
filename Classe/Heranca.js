class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor) {
    this.saldo = this.saldo + valor
  }

  exibirSaldo() {
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoup) {
    super(nome, email, cpf, saldo)
    this.saldoPoup = saldoPoup
  }

  depositarPoup(valor) {
    this.saldoPoup += valor
  }
}

const pedro = new ClientePoupanca(
  'Pedro',
  'Pedro@gmail.com',
  '21223444',
  100,
  200
)
console.log(pedro)
pedro.depositarPoup(56)
pedro.depositar(60)
console.log(pedro)
