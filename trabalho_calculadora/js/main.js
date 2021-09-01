//----------------------------------------CRIAÇÃO DDOS BOTÕES-------------------------------------------------------

// Atribuindo valores dos Botões (nome e a ação('ONCLICK')) em Teclado

const teclado = [
  { nome: 1, action: 'adicionarValor(1)' },
  { nome: 2, action: 'adicionarValor(2)' },
  { nome: 3, action: 'adicionarValor(3)' },
  { nome: 4, action: 'adicionarValor(4)' },
  { nome: 5, action: 'adicionarValor(5)' },
  { nome: 6, action: 'adicionarValor(6)' },
  { nome: 7, action: 'adicionarValor(7)' },
  { nome: 8, action: 'adicionarValor(8)' },
  { nome: 9, action: 'adicionarValor(9)' },
  { nome: 0, action: 'adicionarValor(0)' },
  { nome: '➕', action: 'adicionarValorAtividade(`+`)' },
  { nome: '➖', action: 'adicionarValorAtividade(`-`)' },
  { nome: '✖', action: 'adicionarValorAtividade(`*`)' },
  { nome: ',', action: 'adicionarValorAtividade(`.`)' },
  { nome: '%', action: ' adicionarValorAtividade(`/100*`)' },
  { nome: '➗', action: 'adicionarValorAtividade(`/`)' },
  { nome: '⌫', action: 'apagarValor()' },
  { nome: 'C', action: 'limparTela()' },
  { nome: '=', action: 'calcularTotal()' },
]


//Evento para chamada iniciar o script após o carregamento da pagina para evitar erro em que as divs não existem
//>Criação dos botões utilizando os objetos de Teclado

addEventListener('load', () => {
  const botoes = document.getElementById('botoes')
  teclado.map((tecla) => {
    botoes.innerHTML += `<button onclick="${tecla.action}">${tecla.nome}</button>`
  })
})


//--------------------------------CALCULOS-------------------------------------------------------------------

//Função para adicionar Numeros no input (os NUMEROS são adicionados como STRING)
function adicionarValor(valor) {
  const resposta = document.getElementById('telinha')
  resposta.value += valor
  atividade = false
  cache += valor
}

//Função para apagar o ultimo digito do input
 function apagarValor() {
  const resposta = document.getElementById('telinha')
  resposta.value = resposta.value.substr(0, resposta.value.length - 1)
  cache = cache.substr(0, cache.length - 1)
}

//Função para adicinar numeros de atividade, e verificação re repetição dos mesmos (+++,---,*** etc)
 function adicionarValorAtividade(valor) {
  cache = ''
  if (!atividade) {
    const resposta = document.getElementById('telinha')
    resposta.value += valor
    atividade = true
    return
  }
  const resposta = document.getElementById('telinha')
  resposta.value = resposta.value.substr(0, resposta.value.length - 1)
  resposta.value += valor
  
}

//Função para limpar o input inteiro
const limparTela = () => {
  document.getElementById('telinha').value = ""
  cache = '0'
}

//Função para calcular o valor final em STRING utilizando EVAL()
const calcularTotal = () => {
  const tela = document.getElementById('telinha')
  const resultado = eval(tela.value)
  if(!resultado){
    tela.value = 'ERROR'
  }else{
    tela.value = resultado
  }
  atividade = false
  cache = ''
}

//Variavel para armazenar o ultimo valor
let cache = ''

//Variavel para verificação de tecla de função para evitar multiplas teclas de função seguidas (++++ ou ---- etc.)
let atividade = false

//----------------------------------ACINAMENTO PELAS TECLAS-------------------------------------------------------

//atribuição das funções acionadas pelas teclas do computador ('KEYDOWN')

const teclasAceitas = {
  '1': function () { adicionarValor(1) },
  '2': () => { adicionarValor(2) },
  '3'() { adicionarValor(3) },
  '4'() { adicionarValor(4) },
  '5'() { adicionarValor(5) },
  '6'() { adicionarValor(6) },
  '7'() { adicionarValor(7) },
  '8'() { adicionarValor(8) },
  '9'() { adicionarValor(9) },
  '0'() { adicionarValor(0) },
  '/'() { adicionarValorAtividade('/') },
  '*'() { adicionarValorAtividade('*') },
  '-'() { adicionarValorAtividade('-') },
  '+'() { adicionarValorAtividade('+') },
  ','() { adicionarValorAtividade('.') },
  '.'() { adicionarValorAtividade('.') },
  'Enter'() { calcularTotal() },
  'Backspace'() { apagarValor() },
}

//Criando um evento para acionar a função TeclasAceitas 
addEventListener('keydown', event => {
  const tecla = event.key
  console.log(tecla)
  if (teclasAceitas[tecla]) teclasAceitas[tecla]()
})