document.getElementById('menu-butao').addEventListener('click', function () {
    const lateral = document.getElementById('lateral');

    lateral.classList.toggle('active');

    if(lateral.classList.contains('active')) {
        this.textContent = '☰';
    } else { 
        this.textContent = '☰';
    }
    });


    