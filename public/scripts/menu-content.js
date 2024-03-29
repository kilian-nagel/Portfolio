

const biographieData = [
    {
        title:"Compétences",
        text:"Mes compétences techniques et interpersonnelles",
        url:baseUrl+"index.html#skills"
    },
    {
        title:"Mon parcours",
        text:"Mon parcours scolaire",
        url:baseUrl+"index.html#parcours"
    },
];

const contactData = [
    {
        title:"Mail",
        text:"Contacter par mail",
        url:"mailto:nagelkilian05@gmail.com"
    },
    {
        title:"Télephone",
        text:"Contacter par téléphone"
    },
];

const menuContent = {
    "lien-biographie":biographieData,
    "lien-contact":contactData,
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
    const linkWrapper = buildElement("a","");
    linkWrapper.setAttribute('href',data.url);
    const container = buildElement("div",{"className":"container"});
    const title = buildElement("h3",{"className":"fs-0","textContent":data.title});
    const text = buildElement("p",{"className":"text fs-0","textContent":data.text});

    container.appendChild(title);
    container.appendChild(text);
    linkWrapper.appendChild(container);
    return linkWrapper;
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