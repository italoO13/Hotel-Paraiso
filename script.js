const navResponsivo = document.querySelector(".hamburguer");



function abreMenu () {
    const menu = document.querySelector(".container-header nav");
    const textoMenu = document.querySelectorAll(".container-header nav a")
    if (menu.className.indexOf("nav-ativo") <= -1) {
        menu.classList.add("nav-ativo");
        navResponsivo.children[1].style.display="none";
        navResponsivo.children[2].style.transform = "rotate(-50deg) translateY(-5px)";
        navResponsivo.children[0].style.transform = "rotate(60deg) translateY(5px)";

        for (index = 0; index< textoMenu.length;index+=1){
            textoMenu[index].style.color="var(--corPrimaria)";
        }
    } else {
        menu.classList.remove("nav-ativo");
        navResponsivo.children[1].style.display="block"
        navResponsivo.children[0].style.transform = "rotate(0)";
        navResponsivo.children[2].style.transform = "rotate(0)";
    }

}



navResponsivo.addEventListener("click",abreMenu);