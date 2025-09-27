import { useState } from 'react'
import './App.css'
import { Ejercicio } from './Ejercicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold mb-3">Gato Powerlifter</h1>
      <h2 className="h4 mb-4">
        Gestiona tus entrenes de forma gratuita
      </h2>
      
      <div className="row g-4">
        <div className="col-md-4">
          <Ejercicio nombre="Peso muerto" />
        </div>
        <div className="col-md-4">
          <Ejercicio nombre="Press Banca" />
        </div>
        <div className="col-md-4">
          <Ejercicio nombre="Sentadilla" />
        </div>
      </div>
    </div>
  )
}

export default App
