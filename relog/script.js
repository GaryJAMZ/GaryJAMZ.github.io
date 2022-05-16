setInterval(() =>{
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let año = document.getElementById('año');
    let dayweek = document.getElementById('dayweek');


    let day = document.getElementById('day');
    let mon = document.getElementById('mon');
    let year = document.getElementById('year');

    let puntoday = document.querySelector('.day_punto');
    let puntomon = document.querySelector('.mon_punto');
    let puntoyear = document.querySelector('.year_punto');

    let d = new Date().getDate();
    let mo = new Date().getMonth();
    let y = new Date().getFullYear();

    let dw = new Date().getDay();
    let dweek;

    switch (dw) {
        case 0:
            dweek = "Domingo";
            break;
        case 1:
            dweek = "Lunes";
            break;
        case 2:
            dweek = "Martes"
            break;
        case 3:
            dweek = "Miercoles"
            break;
        case 4:
            dweek = "Jueves"
            break;
        case 5:
            dweek = "Viernes"
            break;
        default:
            dweek = "Sabado"
            break;
    }

    d = (d < 10) ? "0" + d : d;
    mo = (mo < 10) ? "0" + mo : mo;
    y = (y < 10) ? "0" + y : y;

    mo = parseInt(mo) + 1;

    dia.innerHTML = d + "<br><span>dia</span>";
    mes.innerHTML = mo + "<br><span>mes</span>";
    año.innerHTML = y + "<br><span>año</span>";
    dayweek.innerHTML = dweek;
    
    let year_real = y - 2000;

    let mesall;
    if (mo == 1 || 3 || 5 || 7 || 8 || 10 || 12){
        mesall = 31;
    }else if(mo == 4 || 6 || 9 || 11){
        mesall = 30;
    }else{
        mesall = 28;
    }

    day.style.strokeDashoffset = 440 - (440 * d) / mesall;
    mon.style.strokeDashoffset = 440 - (440 * mo) / 12;
    year.style.strokeDashoffset = 440 - (440 * year_real) / 100;

    let mondeg = 360 / mesall;

    puntoday.style.transform = `rotate(${d * mondeg}deg)`;
    puntomon.style.transform = `rotate(${mo * 30}deg)`;
    puntoyear.style.transform = `rotate(${year_real * 3.6}deg)`;
})
setInterval(() =>{
    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let ampm = document.getElementById('ampm');

    let hor = document.getElementById('hor');
    let min = document.getElementById('min');
    let seg = document.getElementById('seg');

    let hor_punto = document.querySelector('.hor_punto');
    let min_punto = document.querySelector('.min_punto');
    let seg_punto = document.querySelector('.seg_punto');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12){
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    horas.innerHTML = h + "<br><span>Horas</span>";
    minutos.innerHTML = m + "<br><span>Minutos</span>";
    segundos.innerHTML = s + "<br><span>Segundos</span>";
    ampm.innerHTML = am;

    hor.style.strokeDashoffset = 440 - (440 * h) / 12;
    min.style.strokeDashoffset = 440 - (440 * m) / 60;
    seg.style.strokeDashoffset = 440 - (440 * s) / 60;

    hor_punto.style.transform = `rotate(${h * 30}deg)`;
    min_punto.style.transform = `rotate(${m * 6}deg)`;
    seg_punto.style.transform = `rotate(${s * 6}deg)`;
})