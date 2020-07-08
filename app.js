var minn=0
var secd=0
var msec=0
var minHeading= document.getElementById("min")
var secHeading= document.getElementById("sec")
var msecHeading= document.getElementById("msec")
var intervel
document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
function timer()
{
msec++

msecHeading.innerHTML =msec
if(msec>=100){
    secd++
    secHeading.innerHTML=secd
    msec=0
    
}
if(secd>= 60 )
{
    minn++
    minHeading.innerHTML=minn
secd=0



}}
function ONSTART(){

    intervel= setInterval(timer,10)
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;

}
function ONRESET(){

    minn=0;
    secd=0;
    msec=0;
    msecHeading.innerHTML=msec
    secHeading.innerHTML=secd
    minHeading.innerHTML=minn
    ONSTOP()
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
}
function ONSTOP(){

    clearInterval(intervel)
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;


}