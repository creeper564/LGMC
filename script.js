function copyIP(){

const ip = "COMMING SOON"; // Remplace par ton IP

navigator.clipboard.writeText(ip);

document.getElementById("copied").innerHTML =
"✅ IP copiée : " + ip;

setTimeout(function(){

document.getElementById("copied").innerHTML="";

},3000);

}
