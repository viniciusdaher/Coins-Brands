import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

export function Variation(props){
    if (props.variation > 0){
        
        return <li style={{color:"#32921B" }} 
        className="result"><BiUpArrowAlt/> {props.variation?.replace(".", ",") + "%"} </li>
              
    }else if(props.variation< 0){
        
        return <li style={{color: "#AC1111"}} 
        className="result"><BiDownArrowAlt/> {props.variation?.replace(".", ",") + "%"}</li>
    
    }else if(props.variation == 0){
        
        return <li className="result"> {props.variation?.replace(".", ",") + "%"}</li>
    
    }else{
        return false;
    }
}