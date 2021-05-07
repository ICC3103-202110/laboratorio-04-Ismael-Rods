//first commit
function view(counter) {
    return `
            Counter: ${counter}\n
            (+) (-)\n
            (q) for quit\n`;
    
}
const update = (msg,counter) => {
    if (msg === '+')
        return counter +1;
    else if (msg === '-')
        return counter -1;
}   
"use strict";
const prompt = require('prompt-sync')();

function app(counter) {
    
    while(true){
        try {

            console.log(view(counter))
            let  input = prompt('What would you do?');
            console.clear();
            if (input==='q')
                break;
            else if (input==='+' || input==='-') {
                counter = update(input,counter);
            }
            else {
                throw 'Error enter (+) (-) (q)'
            }
        }
      catch(e) {
        console.log(e);
      } 
    }
}


console.log(app(0));