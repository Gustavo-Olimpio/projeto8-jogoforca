import {useState} from "react"
import Letra from './Letra'
import Jogo from './Jogo'
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function App() {
  const [estado,setEstado] = useState(true)
  const [jaTem,setJatem] = useState([])
  const [palavra,setPalavra] = useState("")
  const [escondido,setEscondido] = useState("")
  const [erros,setErros] = useState(0)
  const [cor,setCor] = useState("palavrasort")
  console.log(palavra)
  return (
    <div>
      <Jogo erros={erros} cor={cor} setEstado={setEstado} setPalavra={setPalavra} setEscondido={setEscondido} escondido={escondido} setErros={setErros} setJatem={setJatem} setCor={setCor}/> 
      <div className='divLetras'>
        <div className='letras'>
          {alfabeto.map((f) => <Letra key={f} setCor={setCor} setErros={setErros} erros={erros} palavra={palavra} setEscondido={setEscondido} escondido={escondido} jaTem={jaTem} setJatem={setJatem} letra={f} estado={estado} setEstado={setEstado} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
