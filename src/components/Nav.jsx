import "../style/nav.scss"
import { FaBitcoin, FaRegNewspaper, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
import { RiArrowRightSFill } from "react-icons/ri";
import { useState } from "react";




export function Nav(){
    const [menuMode, setMenuMode] = useState(false);
    const isOpenMenu = () => {
        const container = document.getElementsByClassName("container")[0]
        if(menuMode == false){
            setMenuMode(true)
            container.style.filter = "blur(4px)";
            document.querySelector('body').style.overflow = "hidden"
        }else{
            container.style.filter = "blur(0px)";
            document.querySelector('body').style.overflow = "visible"
            setMenuMode(false);
        }
    }
    return (
        <>
   
    <div className={`menu ${menuMode ? "menu" : "closed-menu"} `}>
        <div onClick={isOpenMenu} className="push-menu">
            <div className="class-icon">
                <RiArrowRightSFill className={`icon ${menuMode ? "inverted-icon" : "icon"}`}/>
            </div>
        </div>
        <nav>
            <img src="./img/logo.png" rel="logo-coins-Brands" />
            <button id="cotacao"type="button"><a href="#"><FaBitcoin/> COTAÇÂO</a></button>
            <button id="bolsa-de-valores"type="button"><FcBullish/> BOLSA DE VALORES</button>
            <button id="noticias" type="button"><FaRegNewspaper/> NOTICIAS</button>
            
        </nav>
        <footer>
                <a href="https://github.com/viniciusdaher" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/vinicius-daher-317246217/" target="_blank"><FaLinkedin/></a>
                <h5>Criador por Vinícius Daher</h5>
            </footer>
    </div>   
        </>
    );
}

