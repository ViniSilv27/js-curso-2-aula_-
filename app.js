let listaDeNumeros = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
mensagemInicial();

function exibirTextoNaTela(teg, texto){
    let campo = document.querySelector(teg);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1','Bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p','escolha um número de 0 a 100:');
}



function verificarChute(){
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!!!');
        let palavraTentativa = tentativas > 1  ? 'tentativas' : 'tentativa';
        let mensagem = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        tentativas++
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o número secreto é menor');
        }
        else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        limpaChute();
    }
}

function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let listaCompleta = listaDeNumeros.length;
    if (listaCompleta == numeroLimite){
        listaDeNumeros = [];
    }
    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    } else{
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;

    }
}

function limpaChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    limpaChute();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

