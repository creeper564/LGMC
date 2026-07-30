/* =====================
   CONFIGURATION LGMC
===================== */


const IP = "play.lgmc.fr";


const DISCORD_LINK = "https://discord.gg/Cd4FgajU35";


const SERVER_ID = "TON_ID_SERVEUR";





/* =====================
   COPIE IP MINECRAFT
===================== */


function copyIP(){


    navigator.clipboard.writeText(IP);



    const notification = 
    document.getElementById("notify");



    if(notification){


        notification.style.display="block";



        setTimeout(()=>{


            notification.style.display="none";


        },2500);


    }


}






/* =====================
   NOMBRE MEMBRES DISCORD
   (ACCUEIL UNIQUEMENT)
===================== */


const members = document.getElementById("members");



if(members){


fetch(
`https://discord.com/api/guilds/${SERVER_ID}/widget.json`
)


.then(response=>response.json())


.then(data=>{


    members.innerHTML =

    data.presence_count +

    " membres en ligne";


})


.catch(()=>{


    members.innerHTML =

    "Discord indisponible";


});


}







/* =====================
   ANIMATION APPARITION
===================== */


const cards = document.querySelectorAll(".card");



cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(30px)";



    setTimeout(()=>{


        card.style.transition=".8s";


        card.style.opacity="1";


        card.style.transform="translateY(0)";


    },200);



});
