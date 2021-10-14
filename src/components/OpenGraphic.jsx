

export function OpenGraphic(){
    document.getElementsByClassName("graphic")[0].style.display = "block";
    document.getElementsByClassName("list-panel")[0].style.display = "flex";
    document.getElementsByClassName("variation")[0].style.display = "initial";
    document.getElementsByClassName("metadata")[0].style.display = "flex";
    document.getElementsByClassName("metadata")[0].style.animation = "open 1s ease-out  alternate forwards";
    document.getElementById("title").style.animation = "uptitle 1s ease-out alternate forwards";
}