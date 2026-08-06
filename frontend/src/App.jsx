import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isPopupAberto, setIsPopupAberto] = useState(false);
  const [voiceIssWorking, setVoiceIsWorking] = useState(false);
  return (
    <>
      <section id="center">
        <div>
          <h1>Bem-Vindo</h1>
          <h4>Esse é um programa de escrita por voz.<br/>
          Você pode apertar em iniciar, falar algo <br/>
          depois pode ver o que foi dito
          </h4>
        </div>

        <section id="spacer"></section>

        <div>

        </div>
      </section>
    </>
  )
}

export default App
