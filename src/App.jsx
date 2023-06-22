import { useState } from 'react'
import { MeuComponente } from './assets/components/meuComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <MeuComponente></MeuComponente>
      <MeuBotao conteudo='me clique'></MeuBotao>
      <MeuBotao conteudo='depois aqui'></MeuBotao>
      <MeuBotao conteudo='por fim aqui'></MeuBotao>
    </>
  )
}

function MeuBotao(props) {
  console.log(props)
  return(
    <button>{props.conteudo}</button>
  )
}

export default App
