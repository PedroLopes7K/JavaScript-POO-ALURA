// nomes de classe sempre com letras maiusculas
class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  // metodos são funçoes no contexto de objetos
  // não precisam da palavra function
  depositar(valor) {
    this.saldo = this.saldo + valor
  }

  exibirSaldo() {
    console.log(this.saldo)
  }
}

// const pedro = new Cliente('Pedro', 'pedro@email', '34948493', 100)
// pedro.depositar(30)
// pedro.exibirSaldo()
