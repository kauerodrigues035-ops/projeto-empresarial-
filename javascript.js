// JAVA SCRIPT DA PAGINA INICIAL

document.getElementById('menu-butao').addEventListener('click', function () {
    const lateral = document.getElementById('lateral');
    const overlay = document.getElementById('overlay');

    lateral.classList.toggle('active');
    overlay.classList.toggle('active'); // Ativa/desativa o blur junto com a barra


    if (lateral.classList.contains('active')) {
        this.textContent = '☰';
    } else {                          //ABRE E FECHA O MENU
        this.textContent = '☰';
    }
});

//  Fecha o menu se clicar no desfoque (fora da barra)
document.getElementById('overlay').addEventListener('click', function () {
    const lateral = document.getElementById('lateral');
    const btn = document.getElementById('menu-butao');

    lateral.classList.remove('active');
    this.classList.remove('active');
    btn.textContent = '☰';
});



const Container = document.querySelector('.imagens');
const Slides = document.querySelectorAll('.imagens a');

let index = 0;
const totalImagens = Slides.length;

function carrossel() {
    index++;

    if (index > totalImagens - 1) {
        index = 0;
    }
    Container.style.transform = `translateX(${-index * 100}%)`;
}

function iniciarIntervalo() {
    setInterval(carrossel, 3000);
}
// Iniciar o carrossel pela primeira vez
iniciarIntervalo();



// Seleciona o input de busca e o container das imagens
const barraBusca = document.getElementById('barra-busca');
const containerImagens = document.querySelector('.imagens');
// 2. Seleciona todos os links que envolvem as imagens
const itensLivros = containerImagens.getElementsByTagName('a');

barraBusca.addEventListener('input', () => {
    const termoBusca = barraBusca.value.toLowerCase();

    //  Percorre cada link de livro
    for (let i = 0; i < itensLivros.length; i++) {
        const link = itensLivros[i];

        const imagem = link.querySelector('img')
        if (imagem) {

            const nomeLivro = imagem.getAttribute('alt').toLowerCase();

            //  Se o nome do livro contiver o que foi digitado, mostra. Se não, esconde.
            if (nomeLivro.includes(termoBusca)) {
                link.style.display = ""; // Volta ao padrão (flex/inline-block)
            } else {
                link.style.display = "none"; // Esconde o link e a imagem dentro dele
            }
        }
 }   });

