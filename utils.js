function generateRandomNumber (){
    return Math.floor(Math.random() * 1000) + 1;
}

function CelToFahren(c){
    return (c*9)/5 + 32;
}

module.exports = {
    generateRandomNumber,
    CelToFahren
}