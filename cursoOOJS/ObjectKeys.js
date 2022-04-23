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

const cliente2 = {
  nome: 'Pedro',
  idade: 19,
  carro: 'Azul'
}

// oferecer seguro se cliente tiver dependentes
function oferecerSeguro(obj) {
  // cria um array de strings com os nomes das chaves do objeto passado
  const arrayChaves = Object.keys(obj)
  if (arrayChaves.includes('dependentes')) {
    console.log(`Propor Desconto para ${obj.nome}!`)
  } else {
    console.log(`${obj.nome} não possui dependentes.`)
  }
}

oferecerSeguro(cliente)
oferecerSeguro(cliente2)

//  assim  como object keys, object.values pega os valores dentro do objeto
console.log(Object.values(cliente))
