import { useRef, useEffect, useState } from 'react';
import './ComponenteDeVoz.css';

function ComponenteDeVoz({voiceIssWorking, setVoiceIsWorking}) {
  // Variaveis do Component
  const recognitionRef = useRef(null);
  const [gravando, setGravando] = useState(false);
  const [textoFalado, setTextoFalado] = useState("");

  useEffect(() => {
    // Codigo de "import" do SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setVoiceIsWorking(true);
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.lang = 'pt-BR';

      // Configuração do onresult, define um coportamente para quando o 
      // SpeechRecognition reconhece a voz e traduz para texto
      recognitionRef.current.onresult = (event) => {
        const texto = event.results[event.results.length - 1][0].transcript;
        console.log("Você disse: ", texto);
        setTextoFalado(textoAnterior => textoAnterior + " " + texto);
      };

    } else {
      // Ele basicamente só funciona com base Chromium
      console.log("Seu navegador não suporta a API de voz.");
    }

    // Se o componente for destruído (ex: usuário mudou de página)
    // Esse trecho de código faz o microfone parar automaticamente
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []); // <-- O array vazio garante que isso rode só na primeira renderização!

  // 4. Funções para controlar o objeto usando o .current
  const iniciarGravacao = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setGravando(true);
    }
  };

  const pararGravacao = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setGravando(false);
    }
  };

  return (
    <>
      <section>
        <h2>Reconhecimento de Voz</h2>
        <p>Status: {gravando ? "Gravando..." : "Parado"}</p>
        
        <button
          type="button"
          className="voiceButton"
          onClick={iniciarGravacao}
          disabled={gravando}>
          Iniciar
        </button>
        <button
          type="button"
          className="voiceButton"
          onClick={pararGravacao}
          disabled={!gravando}>
          Parar
        </button>
      </section>
      <section>
        <h3> Você disse:</h3>
        <p id='outputVoice' className='Saida'> {textoFalado} </p>
      </section>
    </>
  );
}

export default ComponenteDeVoz;