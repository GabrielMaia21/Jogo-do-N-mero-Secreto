let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemIniciar(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um Número entre 1 e 10");             
}

exibirMensagemIniciar();


function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
        let mensagemTentavias = `Você Descobriu o Número Secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p",mensagemTentavias);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(chute < numeroSecreto){
            exibirTextoNaTela("p","O número secreto é maior");
            limparCampo;
        } else{
            exibirTextoNaTela("p","O número secreto é menor");
        }
        limparCampo();
        tentativas++
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();    
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciar();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}