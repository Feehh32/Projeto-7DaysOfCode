function adicionar(){

 let adicionarOutroItem = "sim";

    while(adicionarOutroItem == "sim"){

        let adicionar = prompt("Qual item você gostaria de adicionar?");
        let categoria = prompt("Em qual categoria você gostaria de guardá-lo: frutas, bebidas, congelados, doces (digite com letras minusculas) ");
       
        if(categoria == "frutas"){
            frutas.push(adicionar);

        } else if(categoria == "bebidas"){
            bebidas.push(adicionar);

            } else if(categoria == "congelados"){
                congelados.push(adicionar);

                }else if (categoria == "doces"){
                    doces.push(adicionar)

                }else {
                    alert('digite uma categoria válida')
                }

        adicionarOutroItem = prompt("gostaria de adicionar mais um item? (sim/não)");
    }
    
}

function exibirLista(){
    divAdicionar.style.display = "none";
    divExibir.style.display = "flex";

    if(frutas != ""){
        divExibir.innerHTML  += "<p class='texto'>Frutas:</p>";

        for(let i = 0; i < frutas.length; i++){
           divExibir.innerHTML += "<p>" + frutas[i] + "</p>";
        }
    }

    if(bebidas != ""){
        divExibir.innerHTML  += "<p class='texto'>Bebidas:</p>";

        for(let i = 0; i < bebidas.length; i++){
           divExibir.innerHTML += "<p>" + bebidas[i] + "</p>";

        }
    }

    if(congelados != ""){
        divExibir.innerHTML  += "<p class='texto'>Congelados:</p>";

        for(let i = 0; i < congelados.length; i++){
           divExibir.innerHTML += "<p>" + congelados[i] + "</p>";

        }
    }

    if(doces != ""){

        divExibir.innerHTML  += "<p class='texto'>Doces:</p>";
        for(let i = 0; i < doces.length; i++){

           divExibir.innerHTML += "<p>" + doces[i] + "</p>";
        }
    }

}

function voltar(){
    divAdicionar.style.display = "flex";
    divExibir.style.display = "none";
    
}

let listaDeCompras = [
    frutas = [], bebidas = [], congelados = [], doces = []
]


let divExibir = document.querySelector("#exibir");
let divAdicionar = document.querySelector("#adicionar");

divExibir.innerHTML += "<button type='button' class='botao' onclick='voltar()'>Voltar</button>"


  

