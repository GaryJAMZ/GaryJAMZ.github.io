setInterval(() =>{
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let año = document.getElementById('año');


    let day = document.getElementById('day');
    let mon = document.getElementById('mon');
    let year = document.getElementById('year');

    let day_punto = document.querySelector('.day_punto');
    let mon_punto = document.querySelector('.mon_punto');
    let year_punto = document.querySelector('.year_punto');

    let d = new Date().getDay();
    let mo = new Date().getMonth();
    let y = new Date().getFullYear();

    d = (d < 10) ? "0" + d : d;
    mo = (mo < 10) ? "0" + mo : mo;
    y = (y < 10) ? "0" + y : y;

    mo = parseInt(mo) + 1;

    dia.innerHTML = d + "<br><span>dia</span>";
    mes.innerHTML = mo + "<br><span>mes</span>";
    año.innerHTML = y + "<br><span>año</span>";

    

    day.style.strokeDashoffset = 440 - (440 * d) / 30;
    mon.style.strokeDashoffset = 440 - (440 * mo) / 20;
    year.style.strokeDashoffset = 440 - (440 * y) / 10;


    day_punto.style.transform = `rotate(${d * 3}deg)`;
    mon_punto.style.transform = `rotate(${mo * 15}deg)`;
    year_punto.style.transform = `rotate(${y * 2}deg)`;
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