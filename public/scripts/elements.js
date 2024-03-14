
function buildElement(elementType,data){
    const element = document.createElement(elementType);
    for(property in data){
        if(!isStringEmpty(data[property]) && isString(data[property])){
            element[property] = data[property];
        }
    }
    return element;
}