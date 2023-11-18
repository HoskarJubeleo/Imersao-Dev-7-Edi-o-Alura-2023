/*  ==========================> VAR PAINEL */
const resp_game = document.querySelector(".resp_game");
const dica1_game = document.querySelector(".dica1_game");
const dica2_game = document.querySelector(".dica2_game");
const resp1 = document.querySelector(".resp1");
const resp2 = document.querySelector(".resp2");
const revela_resp_game = document.querySelector(".revela_resp_game");
const tentativas_game = document.querySelector(".tentativas_game");

/*  ==========================> VAR CHAT */
const form = document.querySelector("#form");
const window_chat = document.querySelector(".window_chat");
const d_game = document.querySelector(".d_game");
const d_player = document.querySelector(".d_player");
const p_game = document.querySelector(".p_game");
const p_player = document.querySelector(".p_player");
const input_text = document.querySelector("#input_text");
const btn_enviar = document.querySelector("#btn_enviar");

/* ==========================> SCRIPT GAME */
let max = 1000;
let min = 1;
let numeroSecreto  = parseInt(Math.random() * (max - min) + min);
let c = 5;
let numImpPar = (numeroSecreto%2);
tentativas_game.innerHTML = c; 
/* ==========================> INTERACAO CHAT */

    btn_enviar.addEventListener("click", function(){
        event.preventDefault(); 
    
        c--
        
        if(input_text.value != ''){
            var newBoxMensage = document.createElement("div");
            newBoxMensage.classList.add("d_player");
            window_chat.appendChild(newBoxMensage);
            
            var newMensage = document.createElement("p");
            newMensage.classList.add("p_player");
            newMensage.innerHTML = input_text.value;
            newBoxMensage.appendChild(newMensage);
      
        } else {
            return false;
        }
    
        verfV();
    
        if(input_text.value != numeroSecreto){
            var newBoxMensage = document.createElement("div");
            newBoxMensage.classList.add("d_game");
            window_chat.appendChild(newBoxMensage);
            
            var newMensage = document.createElement("p");
            newMensage.classList.add("p_game");
            if(input_text.value > numeroSecreto){
                newMensage.innerHTML = 'Voce Errou, o Numero é Menor';
            } else {
                newMensage.innerHTML = 'Voce Errou, o Numero é Maior';
            }
            
            newBoxMensage.appendChild(newMensage);
      
        }
    
        clear();
        tentativas_game.innerHTML = c; 
        if(c < 0){
            tentativas_game.innerHTML = 0;
            alert('VOCE PERDEU! :(')
            reload();
        }
        
    });

/* ==========================> SCRIPT PAINEL */

dica1_game.addEventListener("click", function(){
    if(numImpPar == 0){
        resp1.innerHTML = 'O Numero é PAR';
    } else {
        resp1.innerHTML = 'O Numero é IMPAR';
    }

    dica1_game.classList.add("clear_eye");
})

dica2_game.addEventListener("click", function(){
    if(500 > numeroSecreto){
        resp2.innerHTML = 'O Numero é Menor que 500';
    } else {
        resp2.innerHTML = 'O Numero é Maior que 500';
    }
    dica2_game.classList.add("clear_eye");
})

revela_resp_game.addEventListener("click", function(){
    resp_game.innerHTML = numeroSecreto;
    revela_resp_game.classList.add("clear_eye");
})



function clear(){ // LIMPAR INPUT DO CHAT
    input_text.value = '';
}

function reload(){ //Novo Jogo
    window.location.reload();
}

function verfV(){
    if(input_text.value == numeroSecreto){ // VERIFICA A VITORIA
        alert('VOCE VENCEU! :)')
        window.location.reload();
    }  
}
