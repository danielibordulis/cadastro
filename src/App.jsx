import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cadastro from './app/cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cadastro/>
    </>
  )
}

export default App
