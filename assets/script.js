//VARIÁVEIS GLOBAIS (ELEMENTOS DO DOM)
let label = document.querySelectorAll("label");
let inputs = document.getElementsByClassName("data-in");
let inputGround = document.getElementsByClassName("input");
let msg = document.getElementsByClassName("errmsg");
let btn = document.querySelector("img");
let outputs = document.getElementsByClassName("data");
//ATRIBUIÇÃO DOS EVENTOS
btn.addEventListener("click", CalcAge);
inputs[0].addEventListener("blur", dados);
inputs[1].addEventListener("blur", dados);
inputs[2].addEventListener("blur", dados);
//FUNÇÃO DE TRATAMENTO DE DADOS
function dados(){
    let erro="This field is required";
    if(inputs[0].value==''){
        inputs[0].style.border="1px solid #ec0f0f";
        msg[0].innerHTML=erro;
        label[0].style.color="#ec0f0f";
    }
    else if(inputs[0].value!=''){
        inputs[0].style.border="1px solid #000";
        msg[0].innerHTML='';
        label[0].style.color="rgb(116, 116, 118)";
    }
    if(inputs[1].value==''){
        inputs[1].style.border="1px solid #ec0f0f";
        msg[1].innerHTML=erro;
        label[1].style.color="#ec0f0f";
    }
    else if(inputs[1].value!=''){
        inputs[1].style.border="1px solid #000";
        msg[1].innerHTML='';
        label[1].style.color="rgb(116, 116, 118)";
    }
    if(inputs[2].value==''){
        inputs[2].style.border="1px solid #ec0f0f";
        msg[2].innerHTML=erro;
        label[2].style.color="#ec0f0f";
    }
    else if(inputs[2].value!=''){
        inputs[2].style.border="1px solid #000";
        msg[2].innerHTML='';
        label[2].style.color="rgb(116, 116, 118)";
    }
}
//FUNÇÃO CALCULAR DIA, MES E ANO DE VIDA
function CalcAge(){
    if(inputs[0].value==''||inputs[1].value==''||inputs[2].value==''){
        dados();
    }
    else{
    let day = parseInt(inputs[0].value);
    let month = parseInt(inputs[1].value);
    let year = parseInt(inputs[2].value);
    let currentFullDate = new Date();
    let currentDay = currentFullDate.getDate();
    let currentMonth = currentFullDate.getMonth()+1;
    let currentYear = currentFullDate.getFullYear();
    //CALCULO DO DADO FORNECIDO PELO DADO DA DATA ATUAL
    outputs[0].innerHTML=currentYear-year;
    outputs[1].innerHTML=currentMonth-month;
    outputs[2].innerHTML=currentDay-day;
    //FORMATAÇÃO DA SAÍDA DE DADOS
    outputs[0].innerHTML<0?outputs[0].innerHTML=0:outputs[0].innerHTML=currentYear-year;
    outputs[1].innerHTML<0?outputs[1].innerHTML=0:outputs[1].innerHTML=currentMonth-month;
    outputs[2].innerHTML<0?outputs[2].innerHTML=0:outputs[2].innerHTML=currentDay-day;
    }
}
