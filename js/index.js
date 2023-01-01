`use strict`


function refreshTime() {
    var time = new Date().toLocaleTimeString("es-CL");
    document.getElementById("time").textContent = time;

    var date = new Date().toLocaleDateString("es-CL");
    document.getElementById("date").textContent = date;
}
setInterval(refreshTime, 10);