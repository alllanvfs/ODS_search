function filtrarOng() {
    // Pegando o valor do input
    var input = document.getElementById("ong-input").value.toLowerCase();
    
    // Selecionando todas as ongs
    var ongs = document.getElementsByClassName("ong");
    
    // Iterando sobre as ongs para ocultar as que não foram selecionadas
    for (var i = 0; i < ongs.length; i++) {
        var ong = ongs[i];
        
        // Se o nome da ong no HTML for igual ao nome digitado
        if (ong.textContent.toLowerCase().includes(input)) {
            ong.classList.remove("oculto");
            ong.classList.add("centro");
        } else {
            ong.classList.add("oculto");
            ong.classList.remove("centro");
        }
    }
}