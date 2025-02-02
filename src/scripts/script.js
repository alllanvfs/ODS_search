function filtrarOng() {
    var input = document.getElementById("ong-input").value.toLowerCase();
    
    var ongs = document.getElementsByClassName("ong");
    
    for (var i = 0; i < ongs.length; i++) {
        var ong = ongs[i];
        
        if (ong.textContent.toLowerCase().includes(input)) {
            ong.classList.remove("oculto");
            ong.classList.add("centro");
        } else {
            ong.classList.add("oculto");
            ong.classList.remove("centro");
        }
    }
}