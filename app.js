const city = ["Bangalore", "Darjeeling", "Dehradun", "Delhi", "Kanyakumari", "Kargil", "Kolkata", "Leh", "Mijoram", "Mumbai", "Rajkot"];
const temperatureInCelcious = [26, 16, 21, 26, 27, 2, 28, 8, 24, 33, 33];
const precipitation = [23, 18, 12, 10, 77, 22, 8, 23, 9, 2, 0];
const temperatureInKelvin = new Array(10);

for(let i = 0; i < temperatureInCelcious.length; i++){
    temperatureInKelvin[i] = temperatureInCelcious[i] + 273.15;
}



var MainTable = document.getElementById("main-table");
var MainTableString = "<tr><th>City</th><th>Temperature (C)</th><th>Chances of Precipitation</th></tr>";

for(let i = 0; i < city.length; i++){
    MainTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td><td>" + precipitation[i] + "</td></tr>";
}

MainTable.innerHTML = MainTableString;





var CelciousTable = document.getElementById("table-celcious");

var CelciousTableString = "<tr><th>City</th><th>Temperature (C)</th></tr>";
for(let i = 0; i < city.length; i++){
    CelciousTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInCelcious[i] + "</td></tr>";
}

CelciousTable.innerHTML = CelciousTableString;





var KelvinTable = document.getElementById("table-kelvin");

var KelvinTableString = "<tr><th>City</th><th>Temperature (K)</th></tr>";
for(let i = 0; i < city.length; i++){
    KelvinTableString += "<tr><td>" + city[i] + "</td><td>" + temperatureInKelvin[i] + "</td></tr>";
}

KelvinTable.innerHTML = KelvinTableString;

