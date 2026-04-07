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