function Cliente(nome, email, cpf, saldo) {
  this.nome = nome
  this.email = email
  this.cpf = cpf
  this.saldo = saldo
  this.depositar = valor => {
    this.saldo += valor
  }
}

const pedro = new Cliente('Pedro', 'pedro@gmail.com', 1234567, 100)
console.log(pedro.saldo)
pedro.depositar(80)
console.log(pedro.saldo)
