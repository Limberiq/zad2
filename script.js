function checkZodiac(){
    let zodiac = document.getElementById("zodiac").value;
    
    switch(zodiac){
    case "Козерог":
        alert("Привет, Козерог!");
        break;
    case "Рыбы":
        alert("Привет, Рыбы!");
        break;
    case "Овен":
        alert("Привет, Овен!");
        break;
    case "Телец":
        alert("Привет, Телец!");
        break;
    case "Близнецы":
        alert("Привет, Близнецы!");
        break;
    case "Рак":
        alert("Привет, Рак!");
        break;
    case "Лев":
        alert("Привет, Лев!");
        break;
    case "Дева":
        alert("Привет, Дева!");
        break;
    case "Весы":
        alert("Привет, Весы!");
        break;
    case "Скорпион":
        alert("Привет, Скорпион!");
        break;
    case "Стрелец":
        alert("Привет, Стрелец!");
        break;
    case "Водолей":
        alert("Привет, Водолей!");
        break;
    default:
        alert("Я не знаю такого знака зодиака :(");
    }
}