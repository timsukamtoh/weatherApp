function getTempC(kelvin){
    return Math.round(kelvin -= 273.15) + '\u00B0C'
}
function getTempF(kelvin){
    return Math.round(((kelvin -= 273.15)*9/5)+32) + '\u00B0F'
}
function getMph(speed){
    return Math.round(speed*2.237) + ' mph'
}

export{
    getMph,
    getTempC,
    getTempF
}