// Code your solutions in this file
const names=[];
function writeCards(names,type){
    const messages = []
    for (let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return messages
}

function countDown(i){
    while (i>=0){
        console.log(i--);
    }
}