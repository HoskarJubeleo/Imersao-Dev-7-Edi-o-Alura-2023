let btn_cm = document.querySelector(".container_money_converter");
let btn_ct = document.querySelector(".container_temp_converter");
let btn_cd = document.querySelector(".container_distance_converter");

let form = document.querySelector("#form");
let form2 = document.querySelector("#form2");
let form3 = document.querySelector("#form3");
let input_name = document.querySelector("#input_name");
let input_name2 = document.querySelector("#input_name2");
let input_name3 = document.querySelector("#input_name3");
let input_value1 = document.querySelector("#input_value1");
let input_value2 = document.querySelector("#input_value2");
let input_value3 = document.querySelector("#input_value3");
let btn_radio = document.getElementsByName('radio');
let btn_radio2 = document.getElementsByName('radio2');

let calc 

parseFloat(input_value1);
parseInt(input_value2);
parseFloat(input_value3);


/* =====================> MENU */

function btn_cm_op(){
    btn_cm.style.display = "flex";
    btn_ct.style.display = "none";
    btn_cd.style.display = "none";
}

function btn_ct_op(){
    btn_cm.style.display = "none";
    btn_ct.style.display = "flex";
    btn_cd.style.display = "none";
}

function btn_cd_op(){
    btn_cm.style.display = "none";
    btn_ct.style.display = "none";
    btn_cd.style.display = "flex";
}

/* =====================> Conversor de Moedas */

form.addEventListener('submit', function(e) {
    

    if(btn_radio[0].checked){
        calc = 4.86 * input_value1.value // COTACAO 15/11/23 as 19:43
        alert(`Ola ${input_name.value}, US$ ${input_value1.value} sao R$ ${calc}      | COTACAO 15/11/23 as 19:43 |`);
    } else {
        calc = 183590.27 * input_value1.value // COTACAO 15/11/23 as 19:43
        alert(`Ola ${input_name.value}, BTC$ ${input_value1.value} sao R$ ${calc}     | COTACAO 15/11/23 as 19:43 |`);
    }

    event.preventDefault(); 
});

/* =====================> Conversor de Temperatura */

form2.addEventListener('submit', function(e) {

    if(btn_radio2[0].checked){
        calc = input_value2.value * 1.8 + 32
        alert(`Ola ${input_name2.value}, ${input_value2.value}°C fica ${calc}°F`);
    } else {
        calc = input_value2.value * 1 + 273.15
        alert(`Ola ${input_name2.value}, ${input_value2.value}°C fica ${calc}°K`);
    }

    event.preventDefault();
});

/* =====================> Conversor de Distancia */

form3.addEventListener('submit', function(e) {

    calc = 9500000000000 * input_value3.value;
    alert(`Ola ${input_name3.value}, ${input_value3.value} ANOS-LUZ e igual a ${calc} KM`);

    event.preventDefault();
});
