const piano = document.querySelector("#piano");
const caminhar = document.querySelector("#caminhar");
const futebol = document.querySelector("#futebol");
const btnMotivacional = document.querySelector("#btn-motivacional");
var imgHobbie = document.querySelector("#imgHobbie");
var legenda = document.querySelector("#textoLegenda");
var frase = document.querySelector("#frase-motivacional");
var contador = 0;

piano.addEventListener("click", () => {
    imgHobbie.src = "imagens/foto-piano.jpeg";
    legenda.innerHTML = "Minha foto tocando piano";
});

caminhar.addEventListener("click", () => {
    imgHobbie.src = "imagens/parque-bacacheri.jpg";
    legenda.innerHTML = "Foto do parque Bacacheri";
});

futebol.addEventListener("click", () => {
    imgHobbie.src = "imagens/jogando-futebol.jpeg";
    legenda.innerHTML = "Foto de uma bola de futebol";
});




btnMotivacional.addEventListener("click", () => {
    contador++;
    if (contador <= 3) {
        frase.style.color = "red";
        frase.innerHTML = "&quot;Siga em frente&#x2757;&quot; &#x1F60E;";
        setTimeout(() => {
            frase.innerHTML = "Frase de Motivação do meu filme favorito:";
            frase.style.color = "black";
        }, 10000);

    } else {
        btnMotivacional.style.background = "red";
        btnMotivacional.style.color = "white";
        btnMotivacional.innerHTML = "Quebrou :("
        frase.innerHTML = "Espere 10 segundos para utilizar o botão novamente";
        frase.style.color = "black";
        setTimeout(() => {
            contador = 0;
            btnMotivacional.style.background = "#6c92df";
            btnMotivacional.innerHTML = "Clique aqui"
            frase.innerHTML = "Frase de Motivação do meu filme favorito:";
            
        }, 10000);
    }
        
    console.log(contador)
});
