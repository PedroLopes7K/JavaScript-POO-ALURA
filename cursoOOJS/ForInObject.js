// FOR IN EM OBJETOS É PARECIDO COM FOR OF EM ARRAYS

const cliente = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: ['5591235498', '5521988743124'],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011'
    },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}

let imprimirDadosPrimitivos = ''

for (let info in cliente) {
  // console.log(info)
  if (
    typeof cliente[info] === 'object' ||
    typeof cliente[info] === 'function'
  ) {
    continue // como no python, continue volta para o inicio do loop, passando para a proxima iteração
  } else {
    imprimirDadosPrimitivos += ` ${info} ==> ${cliente[info]}\n`
  }
}
console.log(imprimirDadosPrimitivos)
// console.log(cliente['dependentes'])
