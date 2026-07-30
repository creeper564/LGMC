const IP="play.lgmc.fr";


function copyIP(){

navigator.clipboard.writeText(IP);


let notification=document.getElementById("notify");


notification.style.display="block";


setTimeout(()=>{

notification.style.display="none";

},2500);


}