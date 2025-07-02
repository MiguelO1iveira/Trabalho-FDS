const piano = document.querySelector("#piano");
const caminhar = document.querySelector("#caminhar");
const futebol = document.querySelector("#futebol");
var imgHobbie = document.querySelector("#imgHobbie");
var legenda = document.querySelector("#textoLegenda");

piano.addEventListener("click", () => {
    imgHobbie.src = "../imagens/Tocando Piano.jpeg";
    legenda.innerHTML = "Minha foto tocando piano";
});

caminhar.addEventListener("click", () => {
    imgHobbie.src = "../imagens/parque-bacacheri.jpg";
    legenda.innerHTML = "Foto do parque Bacacheri";
});

futebol.addEventListener("click", () => {
    imgHobbie.src = "../imagens/jogando-futebol.jpeg";
    legenda.innerHTML = "Foto de uma bola de futebol";
});