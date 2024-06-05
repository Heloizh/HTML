//função abrir e fechar menu
function toggleInnerContainer() {
    const menuAcessibilidade = document.querySelector('.menu-acessibilidade');
    const arrowSymbol = document.querySelector('.arrow-symbol');

    arrowSymbol.classList.toggle('open');
    menuAcessibilidade.classList.toggle('show');

    if (arrowSymbol.classList.contains('open')) {
        document.querySelector('.inner-container').classList.add('hidden');
    } else {
        document.querySelector('.inner-container').classList.remove('hidden');
    }
}
