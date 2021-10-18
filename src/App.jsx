import { Nav} from "./components/Nav";
import "../src/style/global.scss" 
import {BrowserRouter } from "react-router-dom"
import { Routes } from "./Routes";

export function App() {
    return (
    <BrowserRouter>
        <Routes/>
        <Nav/>
    </BrowserRouter>
    );

}