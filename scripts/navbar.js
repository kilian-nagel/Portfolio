
const linksClassName = "nav-link";
const linksData = [
    { textContent: "biographie",id: "lien-biographie",href:"#biographie"},
    { textContent: "projets",id:"lien-projets",href:"#projects"},
    { textContent: "projet professionnel",id:"lien-professionnel",href:"./pages/projet-professionnel.html"},
    { textContent: "contact",id:"lien-contact",href:"mailto:nagelkilian05@gmail.com"},
]

function buildNavbar() {
    const nav = buildElement("nav", { className: "nav" });
    const logo = buildLogo();
    const navItems = buildNavItems();
    const mailLink = buildMailLink();
    const mobileNavBtn = buildMobileNavIcon();

    nav.append(logo,navItems,mailLink,mobileNavBtn);
    return nav;
}

function buildLogo() {
    const logo = buildElement("a");
    logo.href = "#home";

    const span = buildElement("span", { className: "fs-200 bold-900", textContent: "KN" });
    logo.appendChild(span);
    return logo;
}

function buildNavItems() {
    const ul = buildElement("ul",{className:"nav-items"});
    for(const link of linksData){
        const liElement = buildElement("li",{className:"nav-item"})
        const linkElement = buildElement("a",{...link,className:linksClassName});
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
    const icon = buildElement("img",{id:"toggleMenu",style:"width: 20px;height:20px;display:none",src:"https://i.imgur.com/wFB9N9S.png",alt:"icone menu"});
    return icon
}


function buildMobileNav(){
    const root = buildElement("div",{id:"fullscreenMenu",className:"fullscreen-menu"});
    const header = buildMobileNavHeader();
    const main = buildMobileNavMain();
    root.append(header,main);
}

function buildMobileNavHeader(){
    const header = buildElement("div",{className:"header"});
    const logo = buildLogo();
    const closeBtn = buildElement("img",{id:"hideMenuBtn",style:"width: 16px;height:16px",src:"https://i.imgur.com/OwAPDLJ.png",alt:"icone menu"});
    header.append(logo,closeBtn);
}

function buildMobileNavMain(){
    const div = buildElement("div",{className:"main"});
    const title = buildElement("h3",{className:"fs-800"});
    const items = buildNavItems();
    div.append(title,items);
    return div;
}

const header = document.getElementById("header");
const submenuWrapper = buildElement("div",{className:"submenu-wrapper"});
header.append(buildNavbar(),submenuWrapper);