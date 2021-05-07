//first commit
function view(counter) {
    return `Counter: ${counter}`
    
}
const update = (msg,counter) => {
    if (msg === '+')
        return counter +1
    else if (msg === '-')
        return counter -1
}   
console.log(update('-',5))