function calpe(){
    var a1 = parseFloat(document.getElementById("a").value);
    var p1 = parseInt(document.getElementById("p").value);
    var ar=Math.trunc(a1)
    var arf=ar*12
    var aux=((a1-ar)*10)
    var arff=arf+(((a1-ar)*10))
    var final=703*(p1/(arff**2))
    document.getElementById("calpe").innerHTML=parseFloat(Math.round(final*100)/100).toFixed(1);
    if(final<18.5){
        document.getElementById("pi2").innerHTML=("Bajo Peso") 
    }
    if(final>=18.5 && final<=24.9 ){
        document.getElementById("pi2").innerHTML=("Normal") 
    }
    if(final>=25 && final<=29.9){
        document.getElementById("pi2").innerHTML=("Sobrepeso") 
    }
    if(final>30){
        document.getElementById("pi2").innerHTML=("Obeso")
    }
}
function pi2(){
}