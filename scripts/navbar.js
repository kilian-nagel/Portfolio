
const linksClassName = "nav-link";
const mobileLinks = [
    { textContent: "biographie",id: "lien-biographie",href:baseUrl+"index.html#biographie",color:"black"},
    { textContent: "projets",id:"lien-projets",href:baseUrl+"index.html#projects",color:"black"},
    { textContent: "projet professionnel",id:"lien-professionnel",href:baseUrl+"/pages/projet-professionnel.html",color:"black"},
    { textContent: "contact",id:"lien-contact",href:baseUrl+"mailto:nagelkilian05@gmail.com",color:"black"},
]

const normalLinks = [
    { textContent: "biographie",href:baseUrl+"index.html#biographie"},
    { textContent: "projets",href:baseUrl+"index.html#projects"},
    { textContent: "projet professionnel",href:baseUrl+"pages/projet-professionnel.html"},
    { textContent: "contact",href:"mailto:nagelkilian05@gmail.com"},
]

function buildNavbar() {
    const nav = buildElement("nav", { className: "nav" });
    const logo = buildLogo();
    const navItems = buildNavItems(normalLinks);
    const mailLink = buildMailLink();
    const mobileNavBtn = buildMobileNavIcon();

    nav.append(logo,navItems,mailLink,mobileNavBtn);
    return nav;
}

function buildLogo() {
    const logo = buildElement("a");
    logo.href = baseUrl+"index.html#home";

    const span = buildElement("span", { className: "fs-200 bold-900", textContent: "KN" });
    logo.appendChild(span);
    return logo;
}

function buildNavItems(links) {
    const ul = buildElement("ul",{className:"nav-items"});
    for(const link of links){
        const liElement = buildElement("li",{className:"nav-item"});
        const linkElement = buildElement("a",{...link});
        linkElement.addEventListener("click",()=>{
            const fullscreenMenu = document.getElementById('fullscreenMenu');
            fullscreenMenu.classList.remove("menu-open");
        })
        liElement.appendChild(linkElement);
        ul.appendChild(liElement);
    }
    return ul;
}

function buildMailLink(){
    const link = buildElement("a",{href:"mailto:nagelkilian05@gmail.com",className:"link mail",textContent:"nagelkilian05@gmail.com"});
    return link;
}

function buildMobileNavIcon(){
    const icon = buildElement("img",{id:"toggleMenu",style:"width: 20px;height:20px",src:"https://i.imgur.com/wFB9N9S.png",alt:"icone menu"});
    return icon
}


function buildMobileNav(){
    const root = buildElement("div",{id:"fullscreenMenu",className:"fullscreen-menu"});
    const header = buildMobileNavHeader();
    const main = buildMobileNavMain();
    root.append(header,main);
    return root;
}

function buildMobileNavHeader(){
    const header = buildElement("div");
    header.style = "display:flex;justify-content:space-between;padding:var(--spacing-md) var(--spacing-xl)";

    const logo = buildLogo();
    logo.style.color = "black";

    const closeBtn = buildElement("img",{id:"hideMenuBtn",style:"width: 16px;height:16px",src:"https://i.imgur.com/OwAPDLJ.png",alt:"icone menu"});
    header.append(logo,closeBtn);
    return header;
}

function buildMobileNavMain(){
    const div = buildElement("div",{className:"main"});
    const items = buildNavItems(mobileLinks);
    div.append(items);
    return div; 
}

function changeElementsAttribute(){
    changeAttributeOfElements();
}

const header = document.getElementById("header");
const submenuWrapper = buildElement("div",{className:"submenu-wrapper"});
header.append(buildNavbar(),buildMobileNav(),submenuWrapper);