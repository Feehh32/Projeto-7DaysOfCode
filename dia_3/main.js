function escolherArea(front,back){
    const area = document.querySelector("#input-front-back").value;

    if(area == 1){

        document.querySelector(".pergunta-frontEnd").style.display = 'inline-block';

        front = "Front-end";

        cursos.push(front);
        
    }else if(area == 2){

        document.querySelector(".pergunta-backEnd").style.display = 'inline-block';

        back = "Back-end";
        cursos.push(back);
    }else if(area !== 1 || area != 2 || area == ""){

        alert("Preencha os campos corretamente");

    }

}

function escolheTecFront (vue,react) {
    const tecFront = document.querySelector("#input-vue-react").value;

    if(tecFront == 1){

        document.querySelector(".especializacao-front").style.display = 'inline-block';
        vue = "Vue";
        cursos.push(vue);

    }else if(tecFront == 2){

        document.querySelector(".especializacao-front").style.display = 'inline-block';
        react = "React";
        cursos.push(react);

    }else if(tecFront !== 1 || tecFront != 2 || tecFront == ""){

        alert("Preencha os campos corretamente");

    }

}

function escolheTecBack(c,java) {
    const tecBack = document.querySelector("#input-java-c").value;

    if(tecBack == 1){

        document.querySelector(".especializacao-back").style.display = 'inline-block';
        c = "C#";
        cursos.push(c);

    }else if(tecBack == 2){

        document.querySelector(".especializacao-back").style.display = 'inline-block';
        java = "java";
        cursos.push(java);

    }else if(tecBack != 1 || tecBack != 2 || tecBack == ""){
        
        alert("Preencha os campos corretamente");

    }
}

function escolheEspecFront(frontEnd,fullstack1){
    const espcFront = document.querySelector("#input-espec-front").value;
    const divLista =  document.querySelector('.lista');

    if(espcFront == 1){

        document.querySelector(".adicionais").style.display = 'inline-block';
        frontEnd = "Especialização em Front-end";
        cursos.push(frontEnd);

    }else if(espcFront == 2){

        document.querySelector(".adicionais").style.display = 'inline-block';
        fullstack1 = "Especialização em fullstack";
        cursos.push(fullstack1);

    }else if(espcFront != 1 || espcFront != 2 || espcFront == ""){
        
        alert("Preencha os campos corretamente");

    }

    for(let exibir = 0; exibir < cursos.length; exibir++){

       divLista.innerHTML += "<p class='escolha'>" + cursos[exibir] + "</p>";
       divLista.style.display = 'flex';
    }
}

function escolheEspecBack(backEnd,fullstack2){
    const espcFront = document.querySelector("#input-espec-back").value;
    const divLista =  document.querySelector('.lista');


    if(espcFront == 1){

        document.querySelector(".adicionais").style.display = 'inline-block';
        backEnd = "Especialização em Back-end";
        cursos.push(backEnd);

    }else if(espcFront == 2){

        document.querySelector(".adicionais").style.display = 'inline-block';
        fullstack2 = "Especialização em fullstack";
        cursos.push(fullstack2);

    }else if(espcFront != 1 || espcFront != 2 || espcFront == ""){
        
        alert("Preencha os campos corretamente");

    }

    for(let exibir = 0; exibir < cursos.length; exibir++){
        
        divLista.innerHTML += "<p class='escolha'>" + cursos[exibir] + "</p>";
        divLista.style.display = 'flex';

    }

}

function adicionar() {
    const adicionar = document.querySelector('#input-adicionar').value;
    const divlista = document.querySelector('.lista');
    let existe = false;
    
    for(let i = 0; i < cursos.length; i++){
        if(cursos[i] == adicionar || adicionar == "" ){
            alert("Campo vazio ou campo repetido");
            existe = true; 
            break;
        }
    }

    if(existe == false){ 
        cursos.push(adicionar); 
        divlista.innerHTML += "<p class='escolha'>" + adicionar + "</p>";   
     }
}

const escFront = "";
const escBack = "";
const escVue = "";
const escReact = "";
const escC = "";
const escJava = "";
const espcFrontEnd = "";
const fullstackFront = "";
const espcFrontBack = "";
const fullstackBack = "";
const cursos = [];
