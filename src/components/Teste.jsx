import { useState, useEffect } from "react";
import { Moedas } from "./Moedas";

export function Teste(){
    
    const [moeda, setMoeda] = useState([]);
        useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CLP-BRL,COP-BRL,MXN-BRL,ARS-BRL")
    .then((response) => response.json())
    .then((data) => setMoeda(Object.values(data))) 
    },[])
    
    console.log(Object.values(moeda))
   
    
    return <select>
         
         {moeda.map(paises => {
                    return <Moedas key={paises.name} id={paises.code} Paises={paises}/>
                })}
         
        
    </select>
}