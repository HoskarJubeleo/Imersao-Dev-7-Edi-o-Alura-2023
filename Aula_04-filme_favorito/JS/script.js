const filmes = document.querySelector(".filmes");
const filmes_link_trailer = document.querySelector(".filmes_link_trailer");
const img = document.querySelector(".img");
const test = document.querySelector(".test");
const testa = document.querySelector(".testa");

const input_nome = document.querySelector('#input_nome');
const input_trailer = document.querySelector('#input_trailer');
const btn_search = document.querySelector('#btn_search');

const tdsFilmes = [];
const tdsTrailer = [];

btn_search.addEventListener("click", function(){
    event.preventDefault(); 
    if(input_nome.value == ''){
        alert("Coloque o Link do Banner do filme");
        return false;
    } else if(input_trailer.value == ''){
        alert("Coloque o Link do Trailer do filme");
        return false;      
    }

/*      VALIDACAO => nao unica maneira que conseguir implementar, nao esta funcionado direito, alguns links mesmo sendo img ele nao aceita 
        nao se ha algum erro de logica quem souver manda mensagem pra mim
        DISCORD: bruce_kenway#5515 
*/
    /*  
    testa.innerHTML = testa.innerHTML = '<a href=' + input_trailer.value + '> <img class="test" src=' + input_nome.value + '>';
    if(testa.onerror = true) {
        alert('Nao é uma Img ou Link esta Conrrompido');
        clear();
        return false
    }
 */

    filmes_link_trailer.innerHTML = filmes_link_trailer.innerHTML = '<a href=' + input_trailer.value + '> <img class="img" src=' + input_nome.value + '>';
    clear();

});

function clear(){
    input_nome.value = '';
    input_trailer.value = '';
}
