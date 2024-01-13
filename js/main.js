function calculate() {
                        var time = document.getElementById("time").value;
                        var speed = document.getElementById("speed").value;
                        var distance = document.getElementById("distance").value;
                        if (time === "" && speed !== "" && distance !== "") {
                        time = distance / speed;
                        } else if (speed === "" && time !== "" && distance !== "") {
                        speed = distance / time;
                        } else if (distance === "" && time !== "" && speed !== "") {
                        distance = time * speed;
                        }
                        
                        document.getElementById("result2").innerHTML = `Время (t): ${time} ч, Скорость (v): ${speed} км/ч, Расстояние (s): ${distance} км`;
                        }

function convertTemperature() {
const sourceScale = document.getElementById('sourceScale').value;
const targetScale = document.getElementById('targetScale').value;
const temperature = parseFloat(document.getElementById('temperature').value);

let result;

if (sourceScale === targetScale) {
result = temperature; // Если шкалы совпадают, результат такой же
} else if (sourceScale === 'kelvin') {
result = convertFromKelvin(temperature, targetScale);
} else if (sourceScale === 'celsius') {
result = convertFromCelsius(temperature, targetScale);
} else if (sourceScale === 'fahrenheit') {
result = convertFromFahrenheit(temperature, targetScale);
}

document.getElementById('result').innerText = `Результат: ${result}`;
}

function convertFromKelvin(temperature, targetScale) {
    if (targetScale === 'celsius') {
return temperature - 273.15; // Простая формула конвертации из Кельвина в Цельсий
} else if (targetScale === 'fahrenheit') {
return (temperature - 273.15) * 9/5 + 32; // Формула конвертации из Кельвина в Фаренгейт
} else {
return temperature; // Если целевая шкала также Кельвин, результат такой же
}
}

function convertFromCelsius(temperature, targetScale) {
    if (targetScale === 'kelvin') {
return temperature + 273.15; // Простая формула конвертации из Цельсия в Кельвины
} else if (targetScale === 'fahrenheit') {
return temperature * 9/5 + 32; // Формула конвертации из Цельсия в Фаренгейт
} else {
return temperature; // Если целевая шкала также Цельсий, результат такой же
}
}

function convertFromFahrenheit(temperature, targetScale) {
    if (targetScale === 'celsius') {
return (temperature - 32) * 5/9; // Простая формула конвертации из Фаренгейта в Цельсий
} else if (targetScale === 'kelvin') {
return (temperature - 32) * 5/9 + 273.15; // Формула конвертации из Фаренгейта в Кельвины
} else {
return temperature; // Если целевая шкала также Фаренгейт, результат такой же
}
}













function calculate1() {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var x3 = document.getElementById("x3").value;
    if (x1 === "" && x2 !== "" && x3 !== "") {
    x1 = x2 / x3;
    } else if (x2 === "" && x1 !== "" && x3 !== "") {
    x2 = x3 * x1;
    } else if (x3 === "" && x1 !== "" && x2 !== "") {
    x3 = x2 / x1;
    }
    
    document.getElementById("result3").innerHTML = `Давление (P): ${x1} , Перпед. сост. силы (Fn): ${x2} , Площадь (S): ${x3} `;
    }


    function calculate2() {
        var y1 = document.getElementById("y1").value;
        var y2 = document.getElementById("y2").value;
        var y3 = document.getElementById("y3").value;
        if (y1 === "" && y2 !== "" && y3 !== "") {
        y1 = y3 / y2;
        } else if (y2 === "" && y1 !== "" && y3 !== "") {
        y2 = y3 / y1;
        } else if (y3 === "" && y1 !== "" && y2 !== "") {
        y3 = y2 * y1;
        }
        
        document.getElementById("result4").innerHTML = `Объём (V): ${y1} , Плотность (P): ${y2} , Масса (m): ${y3} `;
        }
    