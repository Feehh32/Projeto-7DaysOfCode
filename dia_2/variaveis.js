function exibir(){
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    let linguagem = document.querySelector('#linguagem').value;
    let divExibir = document.querySelector('.resultado');
    let divPergunta = document.querySelector('.pergunta-extra');
    let mensagem = "<p class='texto-resposta'>Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!</P>";
    let divPerguntaTexto = document.querySelector('#pergunta-texto');

    if (nome == "" || idade == "" || linguagem == "" || idade < 0){

        alert("Preencha corretamente os campos acima");
       
    }else {

        divExibir.innerHTML += mensagem;
        document.querySelector('#botao-exibir').disabled = true;
        divPergunta.style.display ='inline-block';
        divPerguntaTexto.innerHTML += "<h2 class='texto'>Você gosta de estudar " + linguagem + 
        "? Responda com o número 1 para SIM ou 2 para NÃO.</h2>";

    }
     
}

function mostra1() {
    let resposta = document.querySelector('#resposta');
    let mensagem = "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>";
    let botao1 = document.querySelector('#botao1').disabled = true;
    let botao2 = document.querySelector('#botao2').disabled = true;

    resposta.style.display ='inline-block';
    resposta.innerHTML += mensagem;
   
}

function mostra2() {
    let resposta = document.querySelector('#resposta');
    let mensagem = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>";
    let botao1 = document.querySelector('#botao1').disabled = true;
    let botao2 = document.querySelector('#botao2').disabled = true;

    resposta.style.display ='inline-block';
    resposta.innerHTML += mensagem;
}