function writeCards(name, event){
    let newArray = [];
    for(let i = 0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}


function countDown(){
    for (let countDown = 10; countDown > -1; countDown--) {
        console.log(countDown);
    }
}