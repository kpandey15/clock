const ok = setInterval(clocktiming,1000);

function clocktiming(){
    const date = new Date();
    const time = date.toLocaleTimeString();
    
    document.getElementById('clock').innerHTML = time;
}



