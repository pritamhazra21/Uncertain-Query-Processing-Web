console.log("hello it is working");

const city = ["Bangalore", "Darjeeling", "Dehradun", "Delhi", "Kanyakumari", "Kargil", "Kolkata", "Leh", "Mijoram", "Mumbai", "Rajkot"];
const temperatureInCelcious = [26, 16, 21, 26, 27, 2, 28, 8, 24, 33, 33];
const precipitation = [23, 18, 12, 10, 77, 22, 8, 23, 9, 2, 0];
const temperatureInKelvin = new Array(10);
var temparatureMembershipValue = new Array(10);
var precipitationMembershipValue = new Array(10);


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

var tableStringPrevAlgoCelcious;
var tableStringPrevAlgoKelvin;
var tableStringOurAlgoCelcious;
var tableStringOurAlgoKelvin;

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
    var valuePrevAlgoCelciousDataArround = parseFloat(inputPrevAlgoCelciousDataArround.value);
    var valuePrevAlgoCelciousAlphaCut = parseFloat(inputPrevAlgoCelciousAlphaCut.value);

    inputPrevAlgoKelvinDataArround.value = valuePrevAlgoCelciousDataArround + 273.15;
    inputPrevAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;
    inputOurAlgoCelciousDataArround.value = valuePrevAlgoCelciousDataArround;
    inputOurAlgoCelciousAlphaCut.value = valuePrevAlgoCelciousAlphaCut;
    inputOurAlgoKelvinDataArround.value = valuePrevAlgoCelciousDataArround + 273.15;
    inputOurAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;

    tableStringPrevAlgoCelcious = "<tr><th>City</th><th>Temp(C)</th></tr>"
    previousAlgorithm(temperatureInCelcious, temparatureMembershipValue, valuePrevAlgoCelciousDataArround);
    for(let i = 0; i < city.length; i++){
        if(temparatureMembershipValue[i]*100 >= valuePrevAlgoCelciousAlphaCut){
            tableStringPrevAlgoCelcious += "<tr><td>"+ city[i] +"</td><td>"+ temperatureInCelcious[i] +"</td></tr>";
        }
    }
    tablePrevAlgoCelcious.innerHTML = tableStringPrevAlgoCelcious;


});

btnPrevAlgoKelvin.addEventListener("click", function(e){
    var valuePrevAlgoKelvinDataArround = parseFloat(inputPrevAlgoKelvinDataArround.value);
    var valuePrevAlgoKelvinAlphaCut = parseFloat(inputPrevAlgoKelvinAlphaCut.value);

    tableStringPrevAlgoKelvin = "<tr><th>City</th><th>Temp(K)</th></tr>"
    previousAlgorithm(temperatureInKelvin, temparatureMembershipValue, valuePrevAlgoKelvinDataArround);
    for(let i = 0; i < city.length; i++){
        if(temparatureMembershipValue[i]*100 >= valuePrevAlgoKelvinAlphaCut){
            tableStringPrevAlgoKelvin += "<tr><td>"+ city[i] +"</td><td>"+ temperatureInKelvin[i] +"</td></tr>";
        }
    }
    tablePrevALgoKelvin.innerHTML = tableStringPrevAlgoKelvin;
});

btnOurAlgoCelcious.addEventListener("click", function(e){
    var valueOurAlgoCelciousDataArround = parseFloat(inputOurAlgoCelciousDataArround.value);
    var valueOurAlgoCelciousAlphaCut = parseFloat(inputOurAlgoCelciousAlphaCut.value);
    tableStringOurAlgoCelcious = "<tr><th>City</th><th>Temp(C)</th></tr>";
    console.log(temperatureInCelcious)
    ourAlgorithm(temperatureInCelcious, temparatureMembershipValue, valueOurAlgoCelciousDataArround);
    for(let i = 0; i < city.length; i++){
        if(temparatureMembershipValue[i]*100 >= valueOurAlgoCelciousAlphaCut){
            tableStringOurAlgoCelcious += "<tr><td>"+ city[i] +"</td><td>"+ temperatureInCelcious[i] +"</td></tr>";
        }
    }
    tableOurAlgoCelcious.innerHTML = tableStringOurAlgoCelcious;
});

btnOurAlgoKelvin.addEventListener("click", function(e){
    var valueOurAlgoKelvinDataArround = parseFloat(inputOurAlgoKelvinDataArround.value);
    var valueOurAlgoKelvinAlphaCut = parseFloat(inputOurAlgoKelvinAlphaCut.value);
    tableStringOurAlgoKelvin = "<tr><th>City</th><th>Temp(C)</th></tr>";
    console.log(temperatureInKelvin)
    ourAlgorithm(temperatureInKelvin, temparatureMembershipValue, valueOurAlgoKelvinDataArround);
    for(let i = 0; i < city.length; i++){
        if(temparatureMembershipValue[i]*100 >= valueOurAlgoKelvinAlphaCut){
            tableStringOurAlgoKelvin += "<tr><td>"+ city[i] +"</td><td>"+ temperatureInKelvin[i] +"</td></tr>";
        }
    }
    tableOurAlgoKelvin.innerHTML = tableStringOurAlgoKelvin;
});




function previousAlgorithm(array, arrayMembershipValue, fuzzyData){
    var min = Math.min(...array);
    var max = Math.max(...array);
    var range = max-min;
    var sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    var avg = sum / array.length;
    var temp = avg;
    while(avg <= range){
        avg =+ avg + temp;
    }
    for(let i = 0; i < array.length; i++){
        arrayMembershipValue[i] = 1 - (Math.abs(fuzzyData- array[i]) / avg);
    }
    console.log(arrayMembershipValue);
}

function ourAlgorithm(array, arrayMembershipValue, fuzzyData){
    var min = Math.min(...array);
    var max = Math.max(...array);
    var range = max - min;
    for(let i = 0; i <array.length; i++){
        arrayMembershipValue[i] = 1 - Math.abs(array[i] - fuzzyData)/range;
        arrayMembershipValue[i] = (arrayMembershipValue[i] <= 0) ? 0 : arrayMembershipValue[i];
    }
    console.log("our algo")
    console.log(arrayMembershipValue);
}
