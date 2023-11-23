let inputs = document.querySelectorAll("input");
let btn = document.querySelector("button");
let outputs = document.querySelectorAll(".outputs span");
btn.addEventListener("click", calculateData);
inputs.forEach((i)=>{
    i.addEventListener("blur",dataCheck);
})
function calculateData(){
    let currentDate = new Date();
    outputs[0].innerHTML=Number((currentDate.getFullYear())-(inputs[2].value));
    if(inputs[1].value>(currentDate.getMonth()+1)){
        outputs[1].innerHTML=Number((inputs[1].value)-(currentDate.getMonth()+1))
    }
    else if(inputs[1].value<=currentDate.getMonth()+1){
        outputs[1].innerHTML=Number((currentDate.getMonth()+1)-(inputs[1].value))
    }
    if(inputs[0].value>(currentDate.getDate())){
        outputs[2].innerHTML=Number((inputs[0].value)-(currentDate.getDate()))
    }
    else if(inputs[0].value<=currentDate.getDate()){
        outputs[2].innerHTML=Number((currentDate.getDate())-(inputs[0].value))
    }
}
/*function: responsively for check each input individualy*/
function dataCheck(inputTarg){
    if(inputTarg.target.value==""||inputTarg.target.value<=0){
        inputTarg.target.nextElementSibling.style.display="inline";
    }
    else if(inputTarg.target.value!=""||inputTarg.target.value>0){
        inputTarg.target.nextElementSibling.style.display="none"; 
    }
}