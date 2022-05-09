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