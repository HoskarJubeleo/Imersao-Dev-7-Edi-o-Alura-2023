const criar_tabela = document.querySelector(".criar_tabela");
const form = document.querySelector(".form");
const input_player1 = document.querySelector("#input_player1");
const input_player2 = document.querySelector("#input_player2");
const btn_player = document.querySelector("#btn_player");

const table_pontos = document.querySelector(".table_pontos");
const tabelaJogadores = document.querySelector("#tabelaJogadores");

const zerar_placar = document.querySelector("#zerar_placar");

btn_player.addEventListener("click", function(){
    event.preventDefault();       

        if(input_player1.value == ''){
            objt_player1.nome = 'Player1';
        }
        
        if(input_player2.value == ''){
            objt_player2.nome = 'Player2';
        } else {
            objt_player1.nome = input_player1.value; 
            objt_player2.nome = input_player2.value; 
        }

        clear();
        criar_tabela.style.display = "none"
});

/* ===================> objetos JS */

let objt_player1 = {
    nome: input_player1.value,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

let objt_player2 = {
    nome: input_player2.value,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

/* ====================> tabela*/

btn_player.addEventListener("click", function(){
    attTabela();
})

function attTabela(){
    tabelaJogadores.innerHTML = `
    <tr>
        <td>${objt_player1.nome}</td>
        <td>${objt_player1.vitoria}</td>
        <td>${objt_player1.empate}</td>
        <td>${objt_player1.derrota}</td>
        <td>${objt_player1.pontos}</td>
        <td class="btn"> <button onclick="btn_vp(objt_player1)"> <span>Vitoria</span> </button> </td>
        <td class="btn"> <button onclick="btn_ep(objt_player1)"> <span>Empate</span>  </button> </td>
        <td class="btn"> <button onclick="btn_dp(objt_player1)"> <span>Derrota</span> </button> </td>
        </tr>
        <tr>
        <td>${objt_player2.nome}</td>
        <td>${objt_player2.vitoria}</td>
        <td>${objt_player2.empate}</td>
        <td>${objt_player2.derrota}</td>
        <td>${objt_player2.pontos}</td>
        <td class="btn"> <button onclick="btn_vp(objt_player2)"> <span>Vitoria</span> </button> </td>
        <td class="btn"> <button onclick="btn_ep(objt_player2)"> <span>Empate</span>  </button> </td>
        <td class="btn"> <button onclick="btn_dp(objt_player2)"> <span>Derrota</span> </button> </td>
    </tr>
`
}
/* =================> functions buttons */

function btn_vp(jogador){
    jogador.vitoria ++;
    jogador.pontos = jogador.pontos + 3;
    attTabela();
};

function btn_ep(jogador){
    jogador.empate ++;
    jogador.pontos ++;
    attTabela();
};

function btn_dp(jogador){
    jogador.derrota ++;
    attTabela();
};

zerar_placar.addEventListener("click", function(){

    objt_player1.vitoria = 0,
    objt_player1.empate =  0,
    objt_player1.derrota = 0,
    objt_player1.pontos = 0

    objt_player2.vitoria = 0,
    objt_player2.empate =  0,
    objt_player2.derrota = 0,
    objt_player2.pontos = 0
    

    criar_tabela.style.display = "flex"


});

function clear(){
    input_player1.value = ''
    input_player2.value = ''
}