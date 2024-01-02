
const l = console.log;

function initListeners(){
    const menu = document.querySelector("#header .menu-wrapper");
    const subMenuWrapper = document.querySelector("#header .menu-wrapper");
    const elements = document.querySelectorAll("#header .nav-item");

    menu.addEventListener("mouseover",()=>{
        menu.style.display = "block";
    });

    menu.addEventListener("mouseout",()=>{
        menu.style.display = "none";
    });

    (elements).forEach(element => {
        element.addEventListener("mouseover",()=>{
            const content = menuContent[element.querySelector("a.nav-link").id];
            subMenuWrapper.innerHTML = content;
            menu.style.display = "block";
            const left = element.getBoundingClientRect().left;
            menu.style.left = left+"px"; 
        })
        element.addEventListener("mouseout",()=>{
            menu.style.display = "none";
        })
    });
}

initListeners();