function setupCarouselControls(){
    let container = document.querySelector("#projects .content");
    let backwardArrow = document.querySelector("#projects .backward-arrow");
    let forwardArrow = document.querySelector("#projects .forward-arrow");

    setupControlHorizontalScroll(container,forwardArrow,+400);
    setupControlHorizontalScroll(container,backwardArrow,-400);
}

function setupControlHorizontalScroll(container,button,distance){
    button.addEventListener("click",()=>{
        container.scrollTo({
            left: container.scrollLeft+distance, 
            behavior: "smooth"
        });
    });
}

setupCarouselControls();