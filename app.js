console.log("hello it is working");


//          DATASET ON WHICH ALGORITHMS ARE IMPLEMENTED ###########################################

const city = ["Bangalore", "Darjeeling", "Dehradun", "Delhi", "Kanyakumari", "Kargil", "Kolkata", "Leh", "Mijoram", "Mumbai", "Rajkot"];
const temperatureInCelcious = [26, 16, 21, 26, 27, 2, 28, 8, 24, 33, 33];
const precipitation = [23, 18, 12, 10, 77, 22, 8, 23, 9, 2, 0];
const temperatureInKelvin = new Array(10);
var temparatureMembershipValue = new Array(10);
var precipitationMembershipValue = new Array(10);

for (let i = 0; i < temperatureInCelcious.length; i++) { 
    temperatureInKelvin[i] = temperatureInCelcious[i] + 273.15;
}

//          MAIN TABLE
var MainTable = document.getElementById("main-table");
var MainTableString = "<tr><th>City</th><th>Temperature (C)</th><th>Chances of Precipitation</th></tr>";
for (let i = 0; i < city.length; i++) {
    MainTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td><td>" + precipitation[i] + "</td></tr>";
}
MainTable.innerHTML = MainTableString;

//          CELCIOUS TABLE
var CelciousTable = document.getElementById("table-celcious");
var CelciousTableString = "<tr><th>City</th><th>Temperature (C)</th></tr>";
for (let i = 0; i < city.length; i++) {
    CelciousTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td></tr>";
}
CelciousTable.innerHTML = CelciousTableString;

//          KELVIN TABLE
var KelvinTable = document.getElementById("table-kelvin");
var KelvinTableString = "<tr><th>City</th><th>Temperature (K)</th></tr>";
for (let i = 0; i < city.length; i++) {
    KelvinTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInKelvin[i] + "</td></tr>";
}
KelvinTable.innerHTML = KelvinTableString;   //                                                         THESE ARE CONSTANT TABLES JUST FOR SHOWCASEING THE DATASET


//      ALL HTML ELIMENTS AND VARIABLES ##########################################################

//             TABLES

var tablePrevAlgoCelcious = document.getElementById("prev-algo-celcious-table");
var tablePrevALgoKelvin = document.getElementById("prev-algo-kelvin-table");
var tableOurAlgoCelcious = document.getElementById("our-algo-celcious-table");
var tableOurAlgoKelvin = document.getElementById("our-algo-kelvin-table");
var table2ndQuery = document.getElementById("second-query-table");
var table3rdQuery = document.getElementById("third-query-table");

//             1st QUERY PREVIOUS ALGO INPUTBOXES  

var inputPrevAlgoCelciousDataArround = document.getElementById("prev-algo-data-arround-celcious");
var inputPrevAlgoCelciousAlphaCut = document.getElementById("prev-algo-alpha-cut-celcious");
var inputPrevAlgoKelvinDataArround = document.getElementById("prev-algo-data-arround-kelvin");
var inputPrevAlgoKelvinAlphaCut = document.getElementById("prev-algo-alpha-cut-kelvin");

//             1st QUERY OUR ALGO INPUTBOXES

var inputOurAlgoCelciousDataArround = document.getElementById("ours-algo-data-arround-celcious");
var inputOurAlgoCelciousAlphaCut = document.getElementById("ours-algo-alpha-cut-celcious");
var inputOurAlgoKelvinDataArround = document.getElementById("ours-algo-data-arround-kelvin");
var inputOurAlgoKelvinAlphaCut = document.getElementById("ours-algo-alpha-cut-kelvin");

//             2nd QUERY INPUTBOXES

var input2ndQueryPrecDataArround = document.getElementById("second-query-data-arround");
var input2ndQueryAlphaCut = document.getElementById("second-query-alpha-cut");

//             3rd QUERY INPUTBOXES

var input3rdQueryTempDataArround = document.getElementById("third-query-data-arround-temp");
var input3rdQueryPrecDataArround = document.getElementById("third-query-data-arround-prec");
var input3rdQueryTempAlphaCut = document.getElementById("third-query-alpha-cut-temp");
var input3rdQueryPrecAlphaCut = document.getElementById("third-query-alpha-cut-prec");

//             BUTTONS

var btnPrevAlgoCelcious = document.getElementById("prev-algo-celcious-result");
var btnPrevAlgoKelvin = document.getElementById("prev-algo-kelvin-result");
var btnOurAlgoCelcious = document.getElementById("ours-algo-celcious-result");
var btnOurAlgoKelvin = document.getElementById("ours-algo-kelvin-result");
var btn2ndQuery = document.getElementById("second-query-result");
var btn3rdQuery = document.getElementById("third-query-result");


//      MAIN WORKING SECTION ###########################################################################################

//             1st QUERY PREVIOUS ALGORITHM CELCIOUS PART

btnPrevAlgoCelcious.addEventListener("click", function (e) {
    var valuePrevAlgoCelciousDataArround = parseFloat(inputPrevAlgoCelciousDataArround.value);
    var valuePrevAlgoCelciousAlphaCut = parseFloat(inputPrevAlgoCelciousAlphaCut.value);

    inputPrevAlgoKelvinDataArround.value = valuePrevAlgoCelciousDataArround + 273.15;  ///
    inputPrevAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;                  //
    inputOurAlgoCelciousDataArround.value = valuePrevAlgoCelciousDataArround;           //  THIS PART IS OPTIONAL. IMPLEMENTED JUST FOR CONVINIENT
    inputOurAlgoCelciousAlphaCut.value = valuePrevAlgoCelciousAlphaCut;                 //  SO THAT WE DONT HAVE TO TYPE INPUT FOR EVERY QUERY
    inputOurAlgoKelvinDataArround.value = valuePrevAlgoCelciousDataArround + 273.15;    //  
    inputOurAlgoKelvinAlphaCut.value = valuePrevAlgoCelciousAlphaCut;                  ///

    let tableStringPrevAlgoCelcious = "<tr><th>City</th><th>Temp(C)</th></tr>"
    previousAlgorithm(temperatureInCelcious, temparatureMembershipValue, valuePrevAlgoCelciousDataArround);
    for (let i = 0; i < city.length; i++) {
        if (temparatureMembershipValue[i] * 100 >= valuePrevAlgoCelciousAlphaCut) {
            tableStringPrevAlgoCelcious += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td></tr>";
        }
    }
    tablePrevAlgoCelcious.innerHTML = tableStringPrevAlgoCelcious;


});


//             1st QUERY PREVIOUS ALGORITHM KELVIN PART

btnPrevAlgoKelvin.addEventListener("click", function (e) {
    var valuePrevAlgoKelvinDataArround = parseFloat(inputPrevAlgoKelvinDataArround.value);
    var valuePrevAlgoKelvinAlphaCut = parseFloat(inputPrevAlgoKelvinAlphaCut.value);

    let tableStringPrevAlgoKelvin = "<tr><th>City</th><th>Temp(K)</th></tr>"
    previousAlgorithm(temperatureInKelvin, temparatureMembershipValue, valuePrevAlgoKelvinDataArround);
    for (let i = 0; i < city.length; i++) {
        if (temparatureMembershipValue[i] * 100 >= valuePrevAlgoKelvinAlphaCut) {
            tableStringPrevAlgoKelvin += "<tr><td>" + city[i] + "</td><td>" + temperatureInKelvin[i] + "</td></tr>";
        }
    }
    tablePrevALgoKelvin.innerHTML = tableStringPrevAlgoKelvin;
});

//             1st QUERY OUR ALGORITHM CELCIOUS PART

btnOurAlgoCelcious.addEventListener("click", function (e) {
    var valueOurAlgoCelciousDataArround = parseFloat(inputOurAlgoCelciousDataArround.value);
    var valueOurAlgoCelciousAlphaCut = parseFloat(inputOurAlgoCelciousAlphaCut.value);

    let tableStringOurAlgoCelcious = "<tr><th>City</th><th>Temp(C)</th></tr>";
    ourAlgorithm(temperatureInCelcious, temparatureMembershipValue, valueOurAlgoCelciousDataArround);
    for (let i = 0; i < city.length; i++) {
        if (temparatureMembershipValue[i] * 100 >= valueOurAlgoCelciousAlphaCut) {
            tableStringOurAlgoCelcious += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td></tr>";
        }
    }
    tableOurAlgoCelcious.innerHTML = tableStringOurAlgoCelcious;
});

//             1st QUERY OUR ALGORITHM KELVIN PART

btnOurAlgoKelvin.addEventListener("click", function (e) {
    var valueOurAlgoKelvinDataArround = parseFloat(inputOurAlgoKelvinDataArround.value);
    var valueOurAlgoKelvinAlphaCut = parseFloat(inputOurAlgoKelvinAlphaCut.value);

    let tableStringOurAlgoKelvin = "<tr><th>City</th><th>Temp(C)</th></tr>";
    ourAlgorithm(temperatureInKelvin, temparatureMembershipValue, valueOurAlgoKelvinDataArround);
    for (let i = 0; i < city.length; i++) {
        if (temparatureMembershipValue[i] * 100 >= valueOurAlgoKelvinAlphaCut) {
            tableStringOurAlgoKelvin += "<tr><td>" + city[i] + "</td><td>" + temperatureInKelvin[i] + "</td></tr>";
        }
    }
    tableOurAlgoKelvin.innerHTML = tableStringOurAlgoKelvin;
});

//             2nd QUERY

btn2ndQuery.addEventListener("click", function (e) {
    var value2ndQueryPrecDataArround = parseFloat(input2ndQueryPrecDataArround.value);
    var value2ndQueryAlphaCut = parseFloat(input2ndQueryAlphaCut.value);
    let tableString2ndQuery = "<tr><th>City</th><th>Temp(C)</th><th>Precipitation</th></tr>";
    ourAlgorithm(precipitation, precipitationMembershipValue, value2ndQueryPrecDataArround);
    for (let i = 0; i < city.length; i++) {
        if (precipitationMembershipValue[i] * 100 >= value2ndQueryAlphaCut) {
            tableString2ndQuery += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td><td>" + precipitation[i] + "</td></tr>";
        }
    }
    table2ndQuery.innerHTML = tableString2ndQuery;

});

//             3rd QUERY

btn3rdQuery.addEventListener("click", function (e) {
    var value3rdQueryTempDataArround = parseFloat(input3rdQueryTempDataArround.value);
    var value3rdQueryPrecDataArround = parseFloat(input3rdQueryPrecDataArround.value);
    var value3rdQueryTempAlphaCut = parseFloat(input3rdQueryTempAlphaCut.value);
    var value3rdQueryPrecAlphaCut = parseFloat(input3rdQueryPrecAlphaCut.value);
    console.log(value3rdQueryPrecDataArround);
    console.log(value3rdQueryPrecAlphaCut);
    let tableString3rdQuery = "<tr><th>City</th><th>Temp(C)</th><th>Precipitation</th></tr>";
    ourAlgorithm(temperatureInCelcious, temparatureMembershipValue, value3rdQueryTempDataArround);
    ourAlgorithm(precipitation, precipitationMembershipValue, value3rdQueryPrecDataArround);
    for(let i = 0; i < city.length; i++){
        if((temparatureMembershipValue[i]*100 >= value3rdQueryTempAlphaCut) ){
            if((precipitationMembershipValue[i]*100 >= value3rdQueryPrecAlphaCut)){
                tableString3rdQuery+= "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td><td>" + precipitation[i] + "</td></tr>";

            }
        }
    }
    table3rdQuery.innerHTML = tableString3rdQuery;

});

// ALGORITHMS #######################################################################

//             PREVIOUS ALGORTHM

function previousAlgorithm(array, arrayMembershipValue, fuzzyData) {
    var min = Math.min(...array);
    var max = Math.max(...array);
    var range = max - min;
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var avg = sum / array.length;
    var temp = avg;
    while (avg <= range) {
        avg = + avg + temp;
    }
    for (let i = 0; i < array.length; i++) {
        arrayMembershipValue[i] = 1 - (Math.abs(fuzzyData - array[i]) / avg);
    }
    console.log(arrayMembershipValue);
}

//             OUR ALGORITHM

function ourAlgorithm(array, arrayMembershipValue, fuzzyData) {
    var min = Math.min(...array);
    var max = Math.max(...array);
    var range = max - min;
    for (let i = 0; i < array.length; i++) {
        arrayMembershipValue[i] = 1 - Math.abs(array[i] - fuzzyData) / range;
        arrayMembershipValue[i] = (arrayMembershipValue[i] <= 0) ? 0 : arrayMembershipValue[i];
    }
    console.log("our algo")
    console.log(arrayMembershipValue);
}
