
document.addEventListener('DOMContentLoaded', function() {
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', function() {
            const passoAtual = this.parentNode;
            const proximoPasso = document.getElementById('passo-' + this.dataset.proximo);

            passoAtual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        });
    });
});
