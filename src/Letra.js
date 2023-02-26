export default function Letra(props){
    let c = 0;
    function tem (letra){
        
        let novoEscondido = props.escondido
        props.setJatem([...props.jaTem,letra])
        for(let i=0; i<props.palavra.length; i++){
           if (letra === props.palavra[i]){
            novoEscondido[i] = letra
            c+=1
           }
        }
        if (c === 0){
            props.setErros(props.erros + 1)
        }
        console.log(props.erros)
    }
    if (props.erros === 6){
           
        props.setEstado(true)
        props.setEscondido(props.palavra)
        props.setCor("palavrasort perdeu")
    } else if (!props.escondido.includes("_ ")){
        
        props.setEstado(true)
        props.setCor("palavrasort ganhou")
    }
    return (
        
        <>
            <button onClick={() => tem(props.letra)} disabled={props.estado || props.jaTem.includes(props.letra)} > {props.letra}</button>  
        </>
    )
}