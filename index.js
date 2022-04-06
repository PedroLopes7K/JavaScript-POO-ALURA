import { ContaCorrente } from './ContaCorrente.js'
import { Cliente } from './Cliente.js'

const cliente1 = new Cliente('Ricardo', 11122233309)
const cliente2 = new Cliente('Alice', 88822233309)
// console.log(cliente1)

const contaRicardo = new ContaCorrente(1001, cliente1)
contaRicardo.depositar(300)

const contaAlice = new ContaCorrente(1002, cliente2)

contaRicardo.transferir(100, contaAlice)

console.log(contaRicardo)
console.log(contaAlice)
console.log(contaAlice.saldo)
