let clear = document.getElementById('clr');
let erase = document.getElementById('erase');
let equal= document.getElementById('ans')

let btn0= document.getElementById('block0')
let btn1= document.getElementById('block1')
let btn2= document.getElementById('block2')
let btn3= document.getElementById('block3')
let btn4= document.getElementById('block4')
let btn5= document.getElementById('block5')
let btn6= document.getElementById('block6')
let btn7= document.getElementById('block7')
let btn8= document.getElementById('block8')
let btn9= document.getElementById('block9')
let btnplus= document.getElementById('plus')
let btnminus= document.getElementById('minus')
let btnmultiply= document.getElementById('multiply')
let btndivide= document.getElementById('divide')
let btndot= document.getElementById('dot')
let btnper= document.getElementById('per')
var display = document.getElementById('input')



btn0.onclick=()=>{
    type_to(0)
}
btn1.onclick=()=>{
    type_to(1)
}
btn2.onclick=()=>{
    type_to(2)
}
btn3.onclick=()=>{
    type_to(3)
}
btn4.onclick=()=>{
    type_to(4)
}
btn5.onclick=()=>{
    type_to(5)
}
btn6.onclick=()=>{
    type_to(6)
}
btn7.onclick=()=>{
    type_to(7)
}
btn8.onclick=()=>{
    type_to(8)
}
btn9.onclick=()=>{
    type_to(9)
}
btnplus.onclick=()=>{
    type_to("+")
}
btnminus.onclick=()=>{
    type_to("-")
}
btnmultiply.onclick=()=>{
    type_to("*")
}
btndivide.onclick=()=>{
    type_to("/")
}
btndot.onclick=()=>{
    type_to(".")
}


clear.onclick=()=>{
    display.innerText =""
}

erase.onclick=()=>{
    erase_screen();
}

equal.onclick=()=>{
    calculate();
}

var type_to = text=>{
    
    if(display.innerText==""){
        display.innerText=text
    }
    else if(display.innerText.length <=10){
        display.innerText =display.innerText + text;
    }
    else{
        alert("Limit Exceed")
    }

}

var calculate=()=>{
    var res = display.innerText
    display.innerText= eval(res);
}

var erase_screen=()=>{
    display.innerText=  display.innerText.substr(0,display.innerText.length-1);
}