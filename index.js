import { ContaCorrente } from './ContaCorrente.js'
import { Cliente } from './Cliente.js'

const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309

const contaRicardo = new ContaCorrente()
contaRicardo.agencia = 1001
contaRicardo.cliente = cliente1
contaRicardo.depositar(300)

const contaAlice = new ContaCorrente()
contaAlice.agencia = 1002
contaAlice.cliente = cliente2

contaRicardo.transferir(100, contaAlice)

// console.log(contaRicardo)
// console.log(contaAlice)
console.log(contaAlice.saldo)
