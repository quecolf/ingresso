function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let pista = document.getElementById('qtd-pista');
    let superior = document.getElementById('qtd-superior');
    let inferior = document.getElementById('qtd-inferior');
    let calculoIngressoRestante;
    
    if (tipoIngresso == 'pista') {
        verificaQuantidaDeIngressos(quantidade, pista);
    } else if (tipoIngresso == 'inferior') {
        verificaQuantidaDeIngressos(quantidade, inferior);
    } else {
        verificaQuantidaDeIngressos(quantidade, superior);
    }

    limpaQuantidade();
}        

function verificaQuantidaDeIngressos(quantidade, tipo) {
    if (quantidade <= parseFloat(tipo.innerHTML)) {
        calculoIngressoRestante = tipo.innerHTML - quantidade;
        tipo.innerHTML = calculoIngressoRestante;
        alert('Compra realizada com sucesso!');
    } else {
        alert('Infelizmente não há ingressos suficientes para esta compra');
    }
}

function limpaQuantidade() {
    let quantidade = document.getElementById('qtd');
    quantidade.value = '';
}