import { useState, useEffect } from "react";
import "../../../style/cotacao.scss"
import { Convercao } from "./Convercao";
import { Graphic } from "./Graphic";
import { Info } from "./Info";
import { Moedas } from "./Moedas";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsArrowLeftRight } from "react-icons/bs";

export default function Cotacao() {
    const [moeda, setMoeda] = useState([])
    const [valor, setValor] = useState("")
    const [tooltip, setTooltip] = useState("tooltip")
    const [converter, setConverter] = useState([])
    const [montante, setMontante ] = useState("")

  
                
    useEffect(() => {
        moeda.filter((pais) => {
            if(pais.name === valor){
                setConverter(pais)
            }
        })
    }, [valor])

    useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CLP-BRL,COP-BRL,MXN-BRL,ARS-BRL")
    .then((response) => response.json())
    .then((data) => setMoeda(Object.values(data)))
    }, [])
   
    
    return (
        <>
        <div className="container">
            <h2 id="title">COTAÇÃO</h2>
            <section>
                
            
                
                <div className="button">
                    <span className={tooltip}>
                        {valor === "" ? "Selecione qual moeda deseja conveter" : valor.replace("/Real Brasileiro", "") }
                    </span>
                    <input onChange={(e) => setMontante(e.target.value)} 
                    type="number" 
                    placeholder="Digite o valor">
                    </input>
                    <select 
                    onMouseEnter={() => setTooltip("tooltip")}
                    onMouseLeave={() => setTooltip("offtooltip")}  
                    id="dropdawn" 
                    onChange={(e) => setValor(e.target.value)}>
                    <option> </option>    
                        {moeda.map(paises => {
                    return <Moedas key={paises.name} Paises={paises}/>
                })}
                    </select>
                
                
                </div>
                <h4>Conveter para</h4>
                <h4 id="arrow"><BsArrowLeftRight/></h4>
                <div className="button ">
                    <div className="display">
                    <Convercao montante={montante} moeda={converter.ask}/>
                    </div>
                    <select className="display-select">
                        <option>BRL</option>
                    </select>
                </div>
            </section>
            <div className="info">
                    <Info  valor={valor}/>
            </div>
            <div className="metadata">
                <Graphic metadata={converter}/>
            </div>
        </div>
        
    </> 
    );
}    



