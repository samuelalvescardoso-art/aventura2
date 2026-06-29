const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click, function()'{
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAtribbute('data-proximo');

    atual.classlist.remove('ativo');
    Document.getElementById(proximoPasso).classList.add('ativo');
 })

})
    
