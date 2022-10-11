function inserir(number){
   let numero = document.getElementById('operacao').innerHTML;
   document.getElementById('operacao').innerHTML = numero + number;

}

function limpar(){
    document.querySelector('#operacao').innerHTML = "";

}

function apagar(){
    let operacao = document.querySelector('#operacao').innerHTML;
    document.querySelector('#operacao').innerHTML = operacao.substring(0, operacao.length -1);

}

function calcular(){
    let resultado = document.querySelector('#operacao').innerHTML;
    if(resultado != ""){
        document.querySelector('#operacao').innerHTML = eval(resultado); 
    
    }else {
        mensagem();
        setTimeout(pararFuncao,1000);
    }
    
   function mensagem(){
        document.querySelector('#operacao').innerHTML = 'campo vazio';
    }
    
    function pararFuncao(){
        document.querySelector('#operacao').innerHTML = "";
    }    
}