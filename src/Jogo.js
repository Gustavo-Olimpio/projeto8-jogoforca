
import palavras from './palavras'
export default function Jogo(props){
    const arrayErros = ['assets/forca0.png','assets/forca1.png','assets/forca2.png','assets/forca3.png','assets/forca4.png','assets/forca5.png','assets/forca6.png']
    
    let ps = ""
    function shuffleArray(arr) {
        
        // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
    function sortearPalavra(){
        //reset
        props.setErros(0)
        props.setJatem([])
        props.setCor("palavrasort")

        //reset
        props.setEstado(false)
        shuffleArray(palavras)
        ps=palavras[0].split('')
        let underline = ps.map(function(a){
            a="_ "
            return a
        })
        props.setEscondido(underline)
        props.setPalavra(ps)
        
        
       
    }
    
    return (
        <div className="imgebtn">
            <img data-test="game-image" src={arrayErros[props.erros]} alt="Minha Figura"></img>
            <div data-test="choose-word" className="escPalavra" onClick={sortearPalavra}>Escolher palavra</div>
            <div data-test="word" className={props.cor}>{props.escondido}</div>
        </div>
    )
}
