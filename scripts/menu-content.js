const biographieData = [
    {
        title:"Compétences",
        text:"Mes compétences techniques et interpersonnelles"
    },
    {
        title:"Mon parcours",
        text:"Mon parcours scolaire"
    },
    {
        title:"Centres d'întérêts",
        text:"Mes activités extrascolaires"
    }
];

const contactData = [
    {
        title:"Mail",
        text:"Contacter par mail"
    },
    {
        title:"Télephone",
        text:"Contacter par téléphone"
    },
];

const projectsData = [
    {
        title:"Scolaires",
        text:"Projets scolaires"
    },
    {
        title:"Personnels",
        text:"Projets personnels"
    },
];

const menuContent = {
    "lien-biographie":biographieData,
    "lien-contact":contactData,
    "lien-projets":projectsData
}

function buildSubmenuContent(data){
    const root = buildElement("div",{"className":"menu"});
    const content = buildElement("div",{"className":"content"});

    for(let submenuData of data){
        const submenu = buildSubmenuContainer(submenuData);
        content.appendChild(submenu);
    }

    root.appendChild(content);
    return root;
}

function buildSubmenuContainer(data){
    const container = buildElement("div",{"className":"container"});
    const title = buildElement("h3",{"className":"fs-0","text":data.title});
    const text = buildElement("p",{"className":"text fs-0","text":data.text});

    container.appendChild(title);
    container.appendChild(text);
    return container;
}

function buildElement(elementType,data){
    const element = document.createElement(elementType);
    if(data.hasOwnProperty("className") && !isStringEmpty(data.className) && isString(data.className)){
        element.className = data.className;
    }
    if(data.hasOwnProperty("text") && !isStringEmpty(data.className) && isString(data.className)){
        element.textContent = data.text;
    }
    return element;
}

function popDirectory(path){
    var path = window.location.pathname;
    var pathArray = path.split('/');
    pathArray.pop();
    var newPath = pathArray.join('/');
    newPath += "/";
    return newPath;
}

function resolveFilepath(fileName){
    let curPath = getCwdPath();
    if(curPath.includes("pages")){
        if(fileName=="index.html"){
            curPath = popDirectory(curPath);
            console.log(curPath);
            curPath += "index.html";
        } else {
            curPath = curPath + fileName;
        }
    } else {
        if(fileName==="index.html"){
            curPath = curPath + fileName;
        } else {
            curPath = popDirectory(curPath);
            curPath = curPath + `pages/${fileName}`;
        }
    }
    return curPath;
}

function getCwdPath() {
    return popDirectory(window.location.pathname);
}

function isStringEmpty(str){
    return str === "";
}

function isString(str){
    return typeof str === 'string' || str instanceof String;
}

console.log(resolveFilepath("index.html"));