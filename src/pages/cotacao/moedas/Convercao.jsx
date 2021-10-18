export function Convercao(props){
    if (props.montante !== "" && props.moeda !== []){
        const r = props.montante * props.moeda
        return <h3>{r.toFixed(2).toString().replace(".", ",")}</h3>
    }else{
        return <h3></h3>
    }
    
}