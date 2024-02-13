
function buildBadge(text) {
    const badge = buildElement("span", { className: "badge text" });
    badge.textContent = text;
    return badge;
}

function buildSection(data) {
    const section = buildElement("section", { id: "presentation" });
    section.appendChild(buildImage(data.image));
    const info = buildInfo(data);
    section.appendChild(info);
    return section;
}

function buildImage(src) {
    return buildElement("img", {
        src: src,
        alt: "image d'un ordinateur avec une page ouverte sur un site web",
        style: "max-width: 640px;"
    });
}

function buildInfo(data) {
    const info = buildElement("div", { className: "info" });
    const up = buildUp(data);
    info.appendChild(up);

    const down = buildDown(data);
    down.append(buildLink(data.link));
    info.appendChild(down);
    return info;
}

function buildUp(data) {
    const up = buildElement("div", { className: "up" });
    up.appendChild(buildTitle(data.title));
    up.appendChild(buildBadges(data.tags));
    up.appendChild(buildDescription(data.excerpt));
    return up;
}

function buildTitle(title) {
    const titleElement = buildElement("h3", { className: "bold-900 fs-800" });
    titleElement.textContent = title;
    return titleElement;
}

function buildBadges(badges) {
    const badgesContainer = buildElement("div", { className: "badges" });
    badges.forEach(text => {
        badgesContainer.appendChild(buildBadge(text));
    });
    return badgesContainer;
}

function buildDescription(description) {
    const descriptionElement = buildElement("p", { className: "text fs-200" });
    descriptionElement.textContent = description;
    return descriptionElement;
}

function buildDown(data) {
    return buildElement("div", { className: "down" });
}

function buildLink(link) {
    const linkElement = buildElement("a", { className: "link", href: link, target: "_blank" });
    linkElement.textContent = "github";
    return linkElement;
}

function buildPresentationSection(data) {
    return buildSection(data);
}

function fillPageContent(data){
    l(data.content);
    document.querySelector("#sections > .content").innerHTML = data.content.html;
}

/* Info section 
=============== */


function buildCategoryContent(infoType, textContent) {
    const container = buildElement("div", {});
    const categoryText = buildElement("p", { className: "category text",textContent:infoType});
    const text = buildElement("p",{className:"text",textContent:textContent});
    container.append(categoryText,text);

    return container;
}

function buildInfoSection(data) {
    const root = buildElement("div", { id: "info" });
    const container = buildElement("div",{className:"content"});

    const typeOfProject = buildCategoryContent("Type de projet", data.typeOfProject);
    const dates = buildCategoryContent("Dates", data.dates);
    const typeOfApplication = buildCategoryContent("Type d'application", data.typeOfApplication);
    container.append(typeOfProject,dates,typeOfApplication);

    root.append(container);
    return root;
}

function buildPage(data){
    const presentation = buildPresentationSection(data);
    const info = buildInfoSection(data);
    fillPageContent(data);

    const sections = document.getElementById("sections");
    document.querySelector("main").insertBefore(info,sections);
    document.querySelector("main").insertBefore(presentation,info);
}

(async()=>{
    const data = await getProjectsLongFormat("ckadrcx4g00pw01525c5d2e56");
    buildPage(data);
})();