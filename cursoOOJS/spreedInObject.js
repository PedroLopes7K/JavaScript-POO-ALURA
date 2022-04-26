const clientes = [
  {
    nome: 'André',
    cpf: '12312312312',
    dependentes: [
      {
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
      },
      {
        nome: 'Samia',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
      }
    ]
  },
  {
    nome: 'Juliana',
    cpf: '56767867867',
    dependentes: [
      {
        nome: 'Sophia',
        parentesco: 'filha',
        dataNasc: '30/08/2020'
      }
    ]
  },
  {
    nome: 'Amaral',
    cpf: '48579349023'
  },
  {
    nome: 'Juliana',
    cpf: '48579349023'
  }
]

let arrayDependentes = []

for (let i = 0; i <= clientes.length - 1; i++) {
  clientes[i]?.dependentes
    ? // ? arrayDependentes.push(clientes[i].nome + Array(clientes[i].dependentes))
      arrayDependentes.push(clientes[i].dependentes)
    : console.log(clientes[i].nome + ' não possui dependentes.')
}
console.log(arrayDependentes)
