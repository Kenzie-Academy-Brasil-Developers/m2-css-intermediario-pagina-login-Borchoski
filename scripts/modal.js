const butEsqueceu = document.getElementById("butEsqueceu")
const butRecuperar = document.getElementById("butRecuperar")
const butX = document.getElementById("butX")

butEsqueceu.addEventListener("click", function(){
    document.getElementById("modalTotal").classList.add("modal")
})

butRecuperar.addEventListener("click", function(){
    alert("Email enviado")
    document.getElementById("modalTotal").classList.remove("modal")
})

butX.addEventListener("click", function(){
    document.getElementById("modalTotal").classList.remove("modal")
})