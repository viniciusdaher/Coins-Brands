import "../../style/info.scss"
import { BiDownArrow } from "react-icons/bi";
import { OpenGraphic } from "./OpenGraphic";

export function Info(props){
    
    if(props.valor != ""){
        return <h3> <a onClick={OpenGraphic} href="#graphic"><BiDownArrow id="iconArrow"/></a> Saiba mais sobre o <strong>{props.valor.replace("/Real Brasileiro", "")}</strong></h3>
    }else{
        return <h3>Escolha uma <strong>moeda</strong> para saber mais</h3>
    }
}