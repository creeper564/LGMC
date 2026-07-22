function copyIP(){

    const ip = "play.lgmc.fr"; 
    // Remplace cette IP par celle de ton serveur Minecraft


    navigator.clipboard.writeText(ip)
    
    .then(()=>{

        document.getElementById("message").innerHTML =
        "✅ IP copiée : " + ip;

    })


    .catch(()=>{

        document.getElementById("message").innerHTML =
        "❌ Impossible de copier l'IP";

    });



    setTimeout(()=>{

        document.getElementById("message").innerHTML = "";

    },3000);


}
