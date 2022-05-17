/*camando o id btn-mobile*/
const btnMobile = document.getElementById('btn-mobile');

/*criando a função*/
function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault;
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
/*tirando a demora ao clicar no menu burger e abrir */
btnMobile.addEventListener('touchstart', toggleMenu);