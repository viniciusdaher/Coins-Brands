
import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../../style/graphic.scss"
import { DataGraphic } from './DataGraphic';
import { Variation } from './Variation';


export function Graphic(props) {

    const [info, setInfo] = useState([])
    const [days, setDays] = useState('7')
    const [newlist, setNewList] = useState([])
    const MockResponsiveContainer = props => <div {...props} />


    
  useEffect(() => {
      fetch('https://economia.awesomeapi.com.br/json/daily/' + props.metadata.code + '-BRL/' + days)
      .then((response) => response.json())
      .then((data) => setInfo(Object.values(data)))
      }, [props.metadata.code, days])
    
    return (
     <div className="information-panel" >
       <div className="list-panel activate">
          <ul>
            <li>COMPRA</li>
            <li className="result">{props.metadata?.bid?.replace(".", ",")}</li>
          </ul>
          <ul>
            <li>VENDA</li>
            <li className="result">{props.metadata?.ask?.replace(".", ",")}</li>
          </ul>
          <ul>
            <li>MÁXIMO DIA</li>
            <li className="result">{props.metadata?.high?.replace(".", ",")}</li>
          </ul>
          <ul>
            <li>MÍNIMO DIA</li>
            <li className="result">{props.metadata?.low?.replace(".", ",")}</li>
          </ul>
        </div> 
        <div id="graphic" className="graphic">
        <div className="time-filter">
          <ul>
            <li onClick={() => setDays('30')}>1M</li>
            <li onClick={() => setDays('15')}>15D</li>
            <li onClick={() => setDays('7')}>1S</li>
          </ul>
        </div>
          <div>
            <ResponsiveContainer hidth="100%" height={200}>
              <AreaChart 
                data={info.map((a) => {
                  return {valor: a.ask,
                          name: props.metadata.code + "/" + props.metadata.codein,
                          date: DataGraphic(a.timestamp)}

               })}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="0 1" />
                <XAxis dataKey="date" />
                <YAxis type="number" domain={['auto', '10']}/>
                <Tooltip />
                <Area type="monotone" dataKey="valor" stroke="#239f99" fill="#3C6E71" />
              </AreaChart>
            </ResponsiveContainer>
            </div>
          </div>
          <ul className="variation">
            <li>VARIAÇÃO</li>
            <Variation variation={props.metadata?.pctChange}/>
          </ul>
              
        </div>
     
    );
}
