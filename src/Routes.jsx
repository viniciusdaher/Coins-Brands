import {Switch, Route} from "react-router-dom"
import Home from "./pages/cotacao/moedas"
import Noticias from "./pages/noticias"

export function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/bolsa-de-valores">
                bolsa de valores
            </Route>
            <Route exact path="/noticias">
                <Noticias/>
            </Route>
        </Switch>
    )
}