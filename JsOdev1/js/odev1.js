const weekday = ["Pazar","P.tesi","Salı","Çarşamba","Perşembe","Cuma","C.tesi"];

const d = new Date();
let day = weekday[d.getDay()];





function showTime(){
    let date = new Date();
    
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + "  " + session + "  " + day;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

let name = prompt("Lütfen İsminizi Giriniz: ")

if (name <= 0){

    let firstName = document.querySelector("#firstName")
    firstName.innerHTML = "İsimsiz Şahsiyet"
    
}else {
    let firstName = document.querySelector("#firstName")
    firstName.innerHTML = `${name}`
}

