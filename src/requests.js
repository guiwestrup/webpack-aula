const botaoBuscar = document.getElementById('botaoBuscar')

botaoBuscar.addEventListener('click', function () {
  buscarCep(document.getElementById('cep').value)
})

function buscarCep (cep) {
  fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`)
    .then(response => {
      return response.json()
    })
    .then(res => {
      console.log(res)
      let p = document.createElement('p')
      let element = document.createTextNode(`Rua: ${res.address} Bairro: ${res.district} Cidade: ${res.city} Estado: ${res.state}`)
      p.appendChild(element)
      document.getElementById('resultado').appendChild(p)
    })
    .catch(error => {
      document.getElementById('error').appendChild(document.createTextNode(error))
    })
}

