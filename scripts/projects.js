
async function buildProjectsCarousel(){
    const root = document.querySelector("#projects .content");
    const projects = await buildProjects();
    root.append(projects); 
}

async function buildProjects(){
    const container = buildElement("div",{className:"content"});
    const projects = await getProjectsShortFormat();
    for(const project of projects){
        const projectElement = buildProject(project);
        container.appendChild(projectElement);
    }
    return container;
}

function buildProject(data){
    const root = buildElement("div",{className:"container"});
    const img = buildElement("div",{style:"height:270px;background: url('./media/nodes.jpg') center center/cover"});
    const info = buildInfo(data);
    root.append(img,info);
    return root;
}   

function buildInfo(data){
    const info = buildElement("div",{className:"info"});

    const up = buildElement("div",{className:"up"});
    const title = buildElement("h3",{className:"fs-600",textContent:data.title});
    const badgesSection = buildBadgesSection(data.tags);
    const excerpt = buildElement("p",{className:"text fs-200",textContent:data.excerpt});
    up.append(title,badgesSection,excerpt);

    l(data);
    const down = buildLinkSection(data.slug);

    info.append(up,down);
    return info;
}

function buildBadgesSection(badges){
    const badgeContainer = buildElement("div",{className:"badges"});
    for(const badge of badges){
        const badgeElement = buildElement("div",{className:"badge text",textContent:badge});
        badgeContainer.appendChild(badgeElement);
    }
    return badgeContainer;
}

function buildLinkSection(pageName){
    const container = buildElement("div",{className:"down"});
    const link = buildElement("a",{className:"link",textContent:"voir le projet",href:`./pages/${pageName}.html`});   
    container.append(link);
    return container;   
}

buildProjectsCarousel();