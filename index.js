const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');

let indice = 0;

function proximaImagem() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    slides.style.transform = `translateX(-${indice * 100}%)`;
}

setInterval(proximaImagem, 3000);
