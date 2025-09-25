import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ejercicio } from './Ejercicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gato powerlifter</h1>
      <h2>Gestiona tus entrenes de forma gratuita</h2>
      <section className="homeButtons">
        <button>Añadir series</button>
        <button>Registro</button>
      </section>
      <Ejercicio nombre="Peso muerto"></Ejercicio>
      <Ejercicio nombre="Press Banca"></Ejercicio>
      <Ejercicio nombre="Sentadilla"></Ejercicio>
    </>
  )
}

export default App
