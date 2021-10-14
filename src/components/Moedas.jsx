import "../../style/cotacao.scss"

export function Moedas(props){
    
    
    return (  
            <option value={props.Paises.name}>
                {props.Paises.code}
            </option>
    
      );
    
}