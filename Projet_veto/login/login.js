const btn_log = document.querySelector("#btn_log");



btn_log.addEventListener("click", function(event) {
    if (event.password == "lamaison12") {
        window.location.href = "http://127.0.0.1:5500/Client/presentation.html";
    } else {
        window.location.href = "http://127.0.0.1:5500/Vet/client.html";
    }
})

