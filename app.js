const city = ["Bangalore", "Darjeeling", "Dehradun", "Delhi", "Kanyakumari", "Kargil", "Kolkata", "Leh", "Mijoram", "Mumbai", "Rajkot"];
const temperatureInCelcious = [26, 16, 21, 26, 27, 2, 28, 8, 24, 33, 33];
const precipitation = [23, 18, 12, 10, 77, 22, 8, 23, 9, 2, 0];
const temperatureInKelvin = new Array(10);

for(let i = 0; i < temperatureInCelcious.length; i++){
    temperatureInKelvin[i] = temperatureInCelcious[i] + 273.15;
}

// MAIN TABLE
var MainTable = document.getElementById("main-table");
var MainTableString = "<tr><th>City</th><th>Temperature (C)</th><th>Chances of Precipitation</th></tr>";
for(let i = 0; i < city.length; i++){
    MainTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td><td>" + precipitation[i] + "</td></tr>";
}
MainTable.innerHTML = MainTableString;

// CELCIOUS TABLE
var CelciousTable = document.getElementById("table-celcious");
var CelciousTableString = "<tr><th>City</th><th>Temperature (C)</th></tr>";
for(let i = 0; i < city.length; i++){
    CelciousTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td></tr>";
}
CelciousTable.innerHTML = CelciousTableString;

// KELVIN TABLE
var KelvinTable = document.getElementById("table-kelvin");
var KelvinTableString = "<tr><th>City</th><th>Temperature (K)</th></tr>";
for(let i = 0; i < city.length; i++){
    KelvinTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInKelvin[i] + "</td></tr>";
}
KelvinTable.innerHTML = KelvinTableString;

var tablePrevAlgoCelcious = document.getElementById("prev-algo-celcious-table");
var tablePrevALgoKelvin = document.getElementById("prev-algo-kelvin-table");
var tableOurAlgoCelcious = document.getElementById("our-algo-celcious-table");
var tableOurAlgoKelvin = document.getElementById("our-algo-kelvin-table");
var tableQuery2;
var tableQuery3;

var inputPrevAlgoCelciousDataArround = document.getElementById("prev-algo-data-arround-celcious");
var inputPrevAlgoCelciousAlphaCut = document.getElementById("prev-algo-alpha-cut-celcious");
var inputPrevAlgoKelvinDataArround = document.getElementById("prev-algo-data-arround-kelvin");
var inputPrevAlgoKelvinAlphaCut = document.getElementById("prev-algo-alpha-cut-kelvin");

var inputOurAlgoCelciousDataArround = document.getElementById("ours-algo-data-arround-celcious");
var inputOurAlgoCelciousAlphaCut = document.getElementById("ours-algo-alpha-cut-celcious");
var inputOurAlgoKelvinDataArround = document.getElementById("ours-algo-data-arround-kelvin");
var inputOurAlgoKelvinAlphaCut = document.getElementById("ours-algo-alpha-cut-kelvin");

var btnPrevAlgoCelcious = document.getElementById("prev-algo-celcious-result");
var btnPrevAlgoKelvin = document.getElementById("prev-algo-kelvin-result");
var btnOurAlgoCelcious = document.getElementById("ours-algo-celcious-result");
var btnOurAlgoKelvin = document.getElementById("ours-algo-kelvin-result");


btnPrevAlgoCelcious.addEventListener("click", function(e){
    var valuePrevAlgoCelciousDataArround = inputPrevAlgoCelciousDataArround.value;
    var valuePrevAlgoCelciousAlphaCut = inputPrevAlgoCelciousAlphaCut.value;

    inputPrevAlgoKelvinDataArround.value = parseFloat(valuePrevAlgoCelciousDataArround) + 273.15;
    inputPrevAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;
    inputOurAlgoCelciousDataArround.value = valuePrevAlgoCelciousDataArround;
    inputOurAlgoCelciousAlphaCut.value = valuePrevAlgoCelciousAlphaCut;
    inputOurAlgoKelvinDataArround.value = parseFloat(valuePrevAlgoCelciousDataArround) + 273.15;
    inputOurAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;
});

btnPrevAlgoKelvin.addEventListener("click", function(e){
    tablePrevALgoKelvin.innerHTML = "";
});

btnOurAlgoCelcious.addEventListener("click", function(e){
    tableOurAlgoCelcious.innerHTML = "";
});

btnOurAlgoKelvin.addEventListener("click", function(e){
    tableOurAlgoKelvin.innerHTML = "";
});

console.log("hello it is working");