let btn_cm = document.querySelector(".container_money_converter");
let btn_ct = document.querySelector(".container_temp_converter");
let btn_cd = document.querySelector(".container_distance_converter");
let form = document.querySelector("form")

let btn_money = document.querySelector("#btn_money");
let btn_temp = document.querySelector("#btn_temp");
let btn_distance = document.querySelector("#btn_distance");

let input_name = document.querySelector("#input_name");
let inp_name_money = document.querySelector(".inp_name_money");
let inp_name_temp = document.querySelector(".inp_name_temp");
let inp_name_dist = document.querySelector(".inp_name_dist");

let input_value = document.querySelector("#input_value");
let inp_value_money = document.querySelector(".inp_value_money");
let inp_value_temp = document.querySelector(".inp_value_temp");
let inp_value_dist = document.querySelector(".inp_value_dist");

let result = document.querySelector('.result');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');

let btn_radio = document.getElementsByName('radio');
let btn_radio2 = document.getElementsByName('radio2');


let calc 

parseFloat(inp_value_money);
parseFloat(inp_value_temp);
parseFloat(inp_value_dist);

/* =====================> MENU */

function btn_cm_op(){
    closeAba();
    btn_cm.style.display = "flex";
    clear();
}

function btn_ct_op(){
    closeAba();
    btn_ct.style.display = "flex";
    clear();
}

function btn_cd_op(){
    closeAba();
    btn_cd.style.display = "flex";
    clear();
}

/* =====================> Conversor de Moedas */
btn_money.addEventListener("click", function() {

    event.preventDefault(); 

    if(btn_radio[0].checked){
        calc = (4.86 * inp_value_money.value); // COTACAO 15/11/23 as 19:43
        result.innerHTML = `Ola ${inp_name_money.value}, US$ ${inp_value_money.value} sao R$ ${calc.toFixed(2)}      | COTACAO 15/11/23 as 19:43 |`;
    } else {
        calc = 183590.27 * inp_value_money.value // COTACAO 15/11/23 as 19:43
        result.innerHTML = `Ola ${inp_name_money.value}, BTC$ ${inp_value_money.value} sao R$ ${calc.toFixed(2)}     | COTACAO 15/11/23 as 19:43 |`;
    }
});

/* =====================> Conversor de Temperatura */

btn_temp.addEventListener("click", function() {
    event.preventDefault(); 

    if(btn_radio2[0].checked){
        calc = inp_value_temp.value * 1.8 + 32
        result2.innerHTML = `Ola ${inp_name_temp.value}, ${inp_value_temp.value}°C fica ${calc.toFixed(2)}°F`;
    } else {
        calc = inp_value_temp.value * 1 + 273.15
        result2.innerHTML = `Ola ${inp_name_temp.value}, ${inp_value_temp.value}°C fica ${calc.toFixed(2)}°K`;
    }

});

/* =====================> Conversor de Distancia */

btn_distance.addEventListener("click", function() {

    event.preventDefault(); 

    calc = 9500000000000 * inp_value_dist.value;
    result3.innerHTML = `Ola ${inp_name_dist.value}, ${inp_value_dist.value} ANOS-LUZ e igual a ${calc.toFixed(2)} KM`;

});

function closeAba(){
    btn_cm.style.display = "none"  
    btn_ct.style.display = "none" 
    btn_cd.style.display = "none"
}

function clear(){
    inp_name_money.value = '';
    inp_value_money.value = '';

    inp_name_temp.value = '';
    inp_value_temp.value = '';

    inp_name_dist.value = '';
    inp_value_dist.value = '';

    result.innerHTML = ''
    result2.innerHTML = ''
    result3.innerHTML = ''
}
