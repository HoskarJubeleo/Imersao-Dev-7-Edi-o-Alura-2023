/*  ==========================> VAR PAINEL */
const resp_game = document.querySelector(".resp_game");
const dica1_game = document.querySelector(".dica1_game");
const dica2_game = document.querySelector(".dica2_game");
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


/* const dg1 = document.querySelector("#dg1"); const dp1 = document.querySelector("#dp1"); const pg1 = document.querySelector("#pg1"); const pp1 = document.querySelector("#pp1");
const dg2 = document.querySelector("#dg2"); const dp2 = document.querySelector("#dp2"); const pg2 = document.querySelector("#pg2"); const pp2 = document.querySelector("#pp2");
const dg3 = document.querySelector("#dg3"); const dp3 = document.querySelector("#dp3"); const pg3 = document.querySelector("#pg3"); const pp3 = document.querySelector("#pp3");
const dg4 = document.querySelector("#dg4"); const dp4 = document.querySelector("#dp4"); const pg4 = document.querySelector("#pg4"); const pp4 = document.querySelector("#pp4");
const dg5 = document.querySelector("#dg5"); const dp5 = document.querySelector("#dp5"); const pg5 = document.querySelector("#pg5"); const pp5 = document.querySelector("#pp5"); */

/* ==========================> SCRIPT GAME */
let max = 1000;
let min = 1;
let numeroSecreto  = parseInt(Math.random() * (max - min) + min);
let c = 5;
/* ==========================> INTERACAO CHAT */



form.addEventListener('submit', e => {
    for(c; c > 0; --c){
        var chute = prompt("Digite um valor de 1 á 1001");
        
        tentativas_game.textContent = c;
    
        if(chute == numeroSecreto){
            alert("VENCEU")
        } else if( chute > numeroSecreto){
            alert("NUMERO É MENOR")
        } else if(chute < numeroSecreto){
            alert("NUMERO É MAIOR")
        }

        alert(`VOCE TEM ${c} CHANCES AINDA`);
    }
    
    alert(`VOCE PERDEU O RESULTADO ERA ${numeroSecreto}`);
})


/* ==========================> SCRIPT PAINEL */



function clear(){ // LIMPAR INPUT DO CHAT
    input_text.value = '';
}

function reload(){ //Novo Jogo
    window.location.reload();
}

function verfV(){
    if(input_text.value == numeroSecreto){ // VERIFICA A VITORIA
        alert('VOCE VENCEU')
    } 
}