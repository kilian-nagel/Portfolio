
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
            const success = setupContent(subMenuWrapper,getSubmenuContent(element.querySelector("a.nav-link").id));
            if(!success) return;

            menu.style.display = "block";
            setLeftOffset(menu,getLeftOffsetLeft(element));
        })
        element.addEventListener("mouseout",()=>{
            menu.style.display = "none";
        })
    });
}

/* Content 
=============== */

function getSubmenuContent(contentId){
    return menuContent[contentId];
}

function setupContent(element,content){
    if(content===undefined || content==="" || content===null) return false;
    element.innerHTML = content;
    return true;
}

/* Offset
=============== */

function setLeftOffset(element,offset){
    element.style.left = offset+"px";
}

function getLeftOffsetLeft(element){
    return element.getBoundingClientRect().left - getDocumentWidthMinusNavbarWidth()/2;
}

/* Méthodes pour obtenir les tailles 
=============== */

function getDocumentWidthMinusNavbarWidth(){
    return getElementWidth("body")-getElementWidth("#header");
}

function getElementWidth(query){
    const el = document.querySelector(query);
    return el.offsetWidth;
}

initListeners();