function Cliente(nome, email, cpf, saldo) {
  this.nome = nome
  this.email = email
  this.cpf = cpf
  this.saldo = saldo
  this.depositar = valor => {
    this.saldo += valor
  }
}

// novo clientepoupanca baseado em cliente

function ClientePoupanca(nome, email, cpf, saldo, saldoPoup) {
  // chamando o construtor de Cliente. ClientePoupanca herda todas propriedades e comportamentos
  Cliente.call(this, nome, email, cpf, saldo)
  // atributo diferente de Cliente
  this.saldoPoup = saldoPoup
}

const amanda = new ClientePoupanca(
  'Amanda',
  'Amanda@yahoo.com',
  127365348,
  120,
  90
)
console.log(amanda)

// adicionando um novo metodo para ClientePoupanca através do seu prototipo
ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor
}
// esse metodo não se aplica ao Cliente, apenas a ClientePoupanca

amanda.depositarPoup(50)
console.log(amanda)
