let a = document.getElementById("a");
let b = document.getElementById("b");
let operador = document.getElementById("operador");
let resultado;
let res = document.getElementById("output");
let operacion;
let vacio = document.getElementById("vacio");
let revb = document.querySelector(".b");
let reva = document.querySelector(".a");


function sumas(){
    operador.innerHTML = "+";
    operacion = 1;
    revb.classList.remove('none');
    reva.classList.remove('raiz');
    revb.classList.remove('exponente');
}
function restas(){
    operador.innerHTML = "-";
    operacion = 2;
    revb.classList.remove('none');
    reva.classList.remove('raiz');
    revb.classList.remove('exponente');
}
function multiplicaciones(){
    operador.innerHTML = "X";
    operacion = 3;
    revb.classList.remove('none');
    reva.classList.remove('raiz');
    revb.classList.remove('exponente');
}
function divisiones(){
    operador.innerHTML = "/";
    operacion = 4;
    revb.classList.remove('none');
    reva.classList.remove('raiz');
    revb.classList.remove('exponente');
}
function raiz(){
    operador.innerHTML = "&#8730;";
    operacion = 5;
    revb.classList.remove('none');
    reva.classList.add('raiz');
    revb.classList.remove('exponente');
}
function exponente(){
    operador.innerHTML = "X<sup> x</sup>";
    operacion = 6;
    revb.classList.remove('none');
    reva.classList.remove('raiz');
    revb.classList.add('exponente');
}
function factorial(){
    operador.innerHTML = "!";
    operacion = 7;
    revb.classList.add('none');
    reva.classList.remove('raiz');
    revb.classList.remove('exponente');
}
function resultados(){
    switch(operacion){
        case 1:
            resultado = (parseInt($(a).val())) + (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 2:
            resultado = (parseInt($(a).val())) - (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 3:
            resultado = (parseInt($(a).val())) * (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 4:
            resultado = (parseInt($(a).val())) / (parseInt($(b).val()));
            res.innerHTML = resultado;
            break;
        case 5:
            if($(a).val() == ""){
                resultado = Math.sqrt(parseInt($(b).val()));
                res.innerHTML = resultado;
            }else{
                resultado = Math.pow(parseInt($(b).val()),1/parseInt($(a).val()));
                res.innerHTML = resultado;
            }
            break;
        case 6:
            if($(b).val() == ""){
                resultado = Math.pow(parseInt($(a).val()),2);
                res.innerHTML = resultado;
            }else{
                resultado = Math.pow(parseInt($(a).val()),parseInt($(b).val()));
                res.innerHTML = resultado;
            }
            break;
        case 7:
            resultado = ($(a).val());
            for (let i= (($(a).val())-1);i>0;i--){
                resultado = ( resultado * i);
            }
            res.innerHTML = resultado;
            break;
        default:
            alert("Seleccione una operacion a ejecutar");
    }
}