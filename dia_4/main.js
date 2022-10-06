function jogar(){
    divInicio.style.display = 'none';
    divChute.style.display  = 'flex';
    btnReiniciar.style.display = 'none';
}

function verificar(){
    const numUsuario = document.querySelector('#chute').value;
   
    if(numUsuario < 0){
        alert("Digite um número positivo");

    }else if(numUsuario == numSecreto){

            btnReiniciar.style.display = 'flex';
            divChute.style.display = 'none';
            divResultado.style.display = 'flex';  
            divResultado.innerHTML += '<p class="texto"> Você acertou o número que eu havia criado era '
            + numSecreto + ', mas eu ja tinha certeza que conseguiria. Que tal tentar novamente?'; 
            chance++;
             
        }else if (numUsuario != numSecreto){

                chance -=1;
                divChances.innerHTML = "";
                divChute.style.display = 'none';
                divChances.style.display = 'flex';
                divChances.innerHTML += "<h3> ERRADO!!!</h3>" + "<p class='texto'>Você ainda tem mais " + chance + " tentativas."
                divChances.innerHTML += '<button class="botao" id="btnTentativa" type="button" onclick="tentativa()">' + "Tentar novamente" + '</button>'
            }
            
    if(chance == 0){

        btnReiniciar.style.display = 'flex'
                    divResultado.style.display = 'flex';
        divChute.style.display = 'none';
        divChances.style.display = 'none';
        divResultado.innerHTML += "<p class='texto'> Que pena suas chances ternminaram, o número era " 
        + numSecreto + ". Gostaria de tentar novamente?</p>";
    }  
}

function tentativa(){

    divChute.style.display = 'flex';
    divChances.style.display = 'none';
}

const numSecreto = Math.round(Math.random()*15);
const divInicio = document.querySelector('.principal');
const divChute = document.querySelector('.caixa-de-chute');
const botaoJogar = document.querySelector('#jogar');
const divResultado = document.querySelector('.resultado')
const btnChute = document.querySelector ('#btn-chute');
const divChances = document.querySelector('.chances');
const btnReiniciar = document.querySelector('#reiniciar');
const btnTentativa = document.querySelector('#btn-tentativa');
let chance = 3;

botaoJogar.onclick = jogar;
btnChute.onclick = verificar;



