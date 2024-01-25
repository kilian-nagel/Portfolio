
function initListeners(){
    const cursor = document.querySelector(".circle-follow-cursor");
    const project = document.querySelector("#projects");

    function handleMouseMove(e){    
        if(checkIfCursorPosInProject(x,y)){
            l("true");
            cursor.style.display = 'flex';
        } else  {
            l("false");
            cursor.style.display = 'none';
        }
        cursor.style.top = e.pageY - (cursor.offsetHeight/2) + "px";
        cursor.style.left = e.pageX - (cursor.offsetWidth/2) + "px";
    }

    project.addEventListener("mousemove",handleMouseMove);
}

function checkIfContainerInContainer(elt){
    parent = elt.parentNode;
    if(parent===null) return;
    while(parent!==null){
        l(parent);
        if(parent.className==="container"){
            return true;
        }
        if(parent.id==="projects"){
            return false;
        }
        parent = parent.parentNode;
    }
    return false;
}

function checkIfCursorPosInProject(x,y){
    const project = document.querySelector("#projects .container");
    const minY = project.getBoundingClientRect().top;
    const maxY = project
    const x =  
}

initListeners();