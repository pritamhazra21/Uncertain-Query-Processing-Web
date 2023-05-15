

//          MAIN TABLE
var MainTable = document.getElementById("main-table");
var CelciousTable = document.getElementById("table-celcious");
var KelvinTable = document.getElementById("table-kelvin");



let url = 'http://localhost/testing/server.php?membership_col=temp_c_membership&membership_value=0';
fetch(url)
    .then(res => res.json())
    .then(out => {
        console.log('Fetched Data on page loading ', out);
        maintab(out);
        celtab(out);
        keltab(out);

    })
    .catch(err => { throw err });


function maintab(out) {
    let len = out.length;
    var MainTableString = "<tr><th>City</th><th>Temp</th><th>precipitation</th></tr>";

    for (let i = 0; i < len; i++) {
        MainTableString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].chances_of_precipitation + "</td></tr>";
    }
    console.log("Main table on page loading");
    MainTable.innerHTML = MainTableString;
}

function maintab1st(out) {
    let len = out.length;
    var MainTableString = "<tr><th>City</th><th>Temp</th><th>Fuzzy Data Temp</th><th>µ1</th><th>precipitation</th></tr>";
    
    for (let i = 0; i < len; i++) {
        MainTableString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].fuzzy_data_c + "</td><td>" + out[i].temp_c_membership + "</td><td>" + out[i].chances_of_precipitation + "</td></tr>";
    }
    console.log("Main table on 1st query");
    MainTable.innerHTML = MainTableString;
}

function maintab2nd(out) {
    let len = out.length;
    var MainTableString = "<tr><th>City</th><th>Temp</th><th>precipitation</th><th>Fuzzy Data Prec</th><th>µ2</th></tr>";
    
    for (let i = 0; i < len; i++) {
        MainTableString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].chances_of_precipitation + "</td><td>" + out[i].fuzzy_data_p + "</td><td> " + out[i].precipitation_membership + "</td></tr>";
    }
    console.log("Main table on 2nd query");
    MainTable.innerHTML = MainTableString;
}

function maintab3rd(out) {
    let len = out.length;
    var MainTableString = "<tr><th>City</th><th>Temp</th><th>Fuzzy Data Temp</th><th>µ1</th><th>precipitation</th><th>Fuzzy Data Prec</th><th>µ2</th><th>µ = µ1 ∩ µ2</th></tr>";

    for (let i = 0; i < len; i++) {
        MainTableString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].fuzzy_data_c + "</td><td>" + out[i].temp_c_membership + "</td><td>" + out[i].chances_of_precipitation + "</td><td>" + out[i].fuzzy_data_p + "</td><td> " + out[i].precipitation_membership + "</td><td>" + out[i].combined_membership + "</td></tr>";
    }
    console.log("Main table on 3rd query");
    MainTable.innerHTML = MainTableString;
}

function celtab(out) {
    let len = out.length;
    var CelTabString = "<tr><th>City</th><th>Temp (C)</th></tr>";

    for (let i = 0; i < len; i++) {
        CelTabString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td></tr>";
    }
    console.log("Celsious table on page loading");
    CelciousTable.innerHTML = CelTabString;
}

function celtabAfterQuery(out) {
    let len = out.length;
    var CelTabString = "<tr><th>City</th><th>Temp (C)</th><th>Fuzzy Data Temp</th><th>Membership Value</th></tr>";

    for (let i = 0; i < len; i++) {
        CelTabString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].fuzzy_data_c + "</td><td>" + out[i].temp_c_membership + "</td></tr>";
    }
    console.log("Celsious Table on submitting query");
    CelciousTable.innerHTML = CelTabString;
}

function keltab(out) {
    let len = out.length;
    var KelTabString = "<tr><th>City</th><th>Temp (K)</th></tr>";

    for (let i = 0; i < len; i++) {
        KelTabString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_kelvin + "</td></tr>";
    }
    console.log("Kelvin Table on page loading");
    KelvinTable.innerHTML = KelTabString;
}

function keltabAfterQuery(out) {
    let len = out.length;
    var KelTabString = "<tr><th>City</th><th>Temp (K)</th><th>Fuzzy Data Temp</th><th>Membership Value</th></tr>";

    for (let i = 0; i < len; i++) {
        KelTabString += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_kelvin + "</td><td>" + out[i].fuzzy_data_k + "</td><td>" + out[i].temp_k_membership + "</td></tr>";
    }
    console.log("Kelvin Table on submitting query");
    KelvinTable.innerHTML = KelTabString;
}




//      ALL HTML ELIMENTS AND VARIABLES ##########################################################

//             TABLES

var tablePrevAlgoCelcious = document.getElementById("prev-algo-celcious-table");
var tablePrevALgoKelvin = document.getElementById("prev-algo-kelvin-table");
var tableOurAlgoCelcious = document.getElementById("our-algo-celcious-table");
var tableOurAlgoKelvin = document.getElementById("our-algo-kelvin-table");
var table1stQuery = document.getElementById("first-query-table");
var table2ndQuery = document.getElementById("second-query-table");
var table3rdQuery = document.getElementById("third-query-table");

//             COMPARE QUERY PREVIOUS ALGO INPUTBOXES  

var inputPrevAlgoCelciousDataArround = document.getElementById("prev-algo-data-arround-celcious");
var inputPrevAlgoCelciousAlphaCut = document.getElementById("prev-algo-alpha-cut-celcious");
var inputPrevAlgoKelvinDataArround = document.getElementById("prev-algo-data-arround-kelvin");
var inputPrevAlgoKelvinAlphaCut = document.getElementById("prev-algo-alpha-cut-kelvin");

//             COMPARE QUERY OUR ALGO INPUTBOXES

var inputOurAlgoCelciousDataArround = document.getElementById("ours-algo-data-arround-celcious");
var inputOurAlgoCelciousAlphaCut = document.getElementById("ours-algo-alpha-cut-celcious");
var inputOurAlgoKelvinDataArround = document.getElementById("ours-algo-data-arround-kelvin");
var inputOurAlgoKelvinAlphaCut = document.getElementById("ours-algo-alpha-cut-kelvin");


//             1ST QUERY INPUTBOXES

var input1stQueryPrecDataArround = document.getElementById("first-query-data-arround");
var input1stQueryAlphaCut = document.getElementById("first-query-alpha-cut");

//             2nd QUERY INPUTBOXES

var input2ndQueryPrecDataArround = document.getElementById("second-query-data-arround");
var input2ndQueryAlphaCut = document.getElementById("second-query-alpha-cut");

//             3rd QUERY INPUTBOXES

var input3rdQueryTempDataArround = document.getElementById("third-query-data-arround-temp");
var input3rdQueryPrecDataArround = document.getElementById("third-query-data-arround-prec");
var input3rdQueryAlphaCut = document.getElementById("third-query-alpha-cut-prec");

//             BUTTONS

var btnPrevAlgoCelcious = document.getElementById("prev-algo-celcious-result");
var btnPrevAlgoKelvin = document.getElementById("prev-algo-kelvin-result");
var btnOurAlgoCelcious = document.getElementById("ours-algo-celcious-result");
var btnOurAlgoKelvin = document.getElementById("ours-algo-kelvin-result");
var btn1stQuery = document.getElementById("first-query-result");
var btn2ndQuery = document.getElementById("second-query-result");
var btn3rdQuery = document.getElementById("third-query-result");








//              COMPARE OLD ALGO CELCIUS


btnPrevAlgoCelcious.addEventListener("click", function (e) {
    var valuePrevAlgoCelciousDataArround = parseFloat(inputPrevAlgoCelciousDataArround.value);
    var valuePrevAlgoCelciousAlphaCut = parseFloat(inputPrevAlgoCelciousAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingPrevAlgorithm.php?fuzzy=' + valuePrevAlgoCelciousDataArround + '&data_col=temp_celsius&fuzzy_col=fuzzy_data_c&membership_col=temp_c_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=temp_c_membership&membership_value=' + valuePrevAlgoCelciousAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on Temperature(C) using previous algo\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Data Fetched for prev algo compare Celsious Table\n', out2);
            prevc(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Data Fetched for Main Celsious Table\n", out3);
            
            celtabAfterQuery(out3);
            
        })
        .catch(err => { throw err });

});
function prevc(out) {
    let len = out.length;
    var tableStringOurAlgoCelcious = "<tr><th>City</th><th>Temp (C)</th></tr>";
    for (let i = 0; i < len; i++) {
        tableStringOurAlgoCelcious += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td></tr>";
    }
    tablePrevAlgoCelcious.innerHTML = tableStringOurAlgoCelcious;
}



//              CPMPARE OLD ALGO KELVIN

btnPrevAlgoKelvin.addEventListener("click", function (e) {
    var valuePrevAlgoKelvinDataArround = parseFloat(inputPrevAlgoKelvinDataArround.value);
    var valuePrevAlgoKelvinAlphaCut = parseFloat(inputPrevAlgoKelvinAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingPrevAlgorithm.php?fuzzy=' + valuePrevAlgoKelvinDataArround + '&data_col=temp_kelvin&fuzzy_col=fuzzy_data_k&membership_col=temp_k_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=temp_k_membership&membership_value=' + valuePrevAlgoKelvinAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on Temperature(K) using previous algo\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Data Fetched for prev algo compare Kelvin Table\n', out2);
            prevk(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Data Fetched for Main Kelvin Table\n",out3);
            keltabAfterQuery(out3);
        })
        .catch(err => { throw err });
});

function prevk(out) {
    let len = out.length;
    var tableStringOurAlgoKelvin = "<tr><th>City</th><th>Temp (C)</th></tr>";
    for (let i = 0; i < len; i++) {
        tableStringOurAlgoKelvin += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td></tr>";
    }
    tablePrevALgoKelvin.innerHTML = tableStringOurAlgoKelvin;

}





//             COMPARE OUR ALGORITHM CELCIOUS PART

btnOurAlgoCelcious.addEventListener("click", function (e) {
    var valueOurAlgoCelciousDataArround = parseFloat(inputOurAlgoCelciousDataArround.value);
    var valueOurAlgoCelciousAlphaCut = parseFloat(inputOurAlgoCelciousAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + valueOurAlgoCelciousDataArround + '&data_col=temp_celsius&fuzzy_col=fuzzy_data_c&membership_col=temp_c_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=temp_c_membership&membership_value=' + valueOurAlgoCelciousAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on Temperature(C) using ours algo\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Data Fetched for ours algo compare Celsious Table\n', out2);
            ourc(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Data Fetched for Main Celsious Table\n", out3);
            celtabAfterQuery(out3);
        })
        .catch(err => { throw err });

});

function ourc(out) {
    let len = out.length;
    var tableStringOurAlgoCelcious = "<tr><th>City</th><th>Temp (C)</th></tr>";
    for (let i = 0; i < len; i++) {
        tableStringOurAlgoCelcious += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td></tr>";
    }
    tableOurAlgoCelcious.innerHTML = tableStringOurAlgoCelcious;
}




//             COMPARE OUR ALGORITHM KELVIN PART

btnOurAlgoKelvin.addEventListener("click", function (e) {
    var valueOurAlgoKelvinDataArround = parseFloat(inputOurAlgoKelvinDataArround.value);
    var valueOurAlgoKelvinAlphaCut = parseFloat(inputOurAlgoKelvinAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + valueOurAlgoKelvinDataArround + '&data_col=temp_kelvin&fuzzy_col=fuzzy_data_k&membership_col=temp_k_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=temp_k_membership&membership_value=' + valueOurAlgoKelvinAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on Temperature(K) using ours algo\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Data Fetched for ours algo compare Kelvin Table\n', out2);
            ourk(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Data Fetched for Main Kelvin Table\n", out3);
            keltabAfterQuery(out3);
        })
        .catch(err => { throw err });
});

function ourk(out) {
    let len = out.length;
    var tableStringOurAlgoKelvin = "<tr><th>City</th><th>Temp (C)</th></tr>";
    for (let i = 0; i < len; i++) {
        tableStringOurAlgoKelvin += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td></tr>";
    }
    console.log("hello kkkk");
    tableOurAlgoKelvin.innerHTML = tableStringOurAlgoKelvin;

}
















//             1st QUERY

btn1stQuery.addEventListener("click", function (e) {
    var value1stQueryPrecDataArround = parseFloat(input1stQueryPrecDataArround.value);
    var value1stQueryAlphaCut = parseFloat(input1stQueryAlphaCut.value);

    console.log("\nData Arround Temperature (c) : ", value1stQueryPrecDataArround);
    console.log("Alpha Cut Value : ", value1stQueryAlphaCut);


    let url1 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + value1stQueryPrecDataArround + '&data_col=temp_celsius&fuzzy_col=fuzzy_data_c&membership_col=temp_c_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=temp_c_membership&membership_value=' + value1stQueryAlphaCut;


    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value updated on Temperature (C)\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Fetched Data for q1 Table\n', out2);
            q1(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Fetched Data for Main Table", out3);
            maintab1st(out3);
        })
        .catch(err => { throw err });



});

function q1(out) {
    let len = out.length;
    let tableString1stQuery = "<tr><th>City</th><th>Temp(C)</th><th>Precipitation</th></tr>";
    for (let i = 0; i < len; i++) {
        tableString1stQuery += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].chances_of_precipitation + "</td></tr>";
    }
    table1stQuery.innerHTML = tableString1stQuery;

}





//             2nd QUERY

btn2ndQuery.addEventListener("click", function (e) {
    var value2ndQueryPrecDataArround = parseFloat(input2ndQueryPrecDataArround.value);
    var value2ndQueryAlphaCut = parseFloat(input2ndQueryAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + value2ndQueryPrecDataArround + '&data_col=chances_of_precipitation&fuzzy_col=fuzzy_data_p&membership_col=precipitation_membership';
    let url2 = 'http://localhost/testing/server.php?membership_col=precipitation_membership&membership_value=' + value2ndQueryAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on precipitation\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Fetched Data for q2 Table\n', out2);
            q2(out2);
            return fetch(url);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log("Fetched Data for Main Table\n",out3);
            maintab2nd(out3);
        })
        .catch(err => { throw err });



});

function q2(out) {
    let len = out.length;
    let tableString2ndQuery = "<tr><th>City</th><th>Temp(C)</th><th>Precipitation</th></tr>";
    for (let i = 0; i < len; i++) {
        tableString2ndQuery += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].chances_of_precipitation + "</td></tr>";
    }
    table2ndQuery.innerHTML = tableString2ndQuery;

}




//             3rd QUERY

btn3rdQuery.addEventListener("click", function (e) {
    var value3rdQueryTempDataArround = parseFloat(input3rdQueryTempDataArround.value);
    var value3rdQueryPrecDataArround = parseFloat(input3rdQueryPrecDataArround.value);
    var value3rdQueryAlphaCut = parseFloat(input3rdQueryAlphaCut.value);

    let url1 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + value3rdQueryTempDataArround + '&data_col=temp_celsius&fuzzy_col=fuzzy_data_c&membership_col=temp_c_membership';
    let url2 = 'http://localhost/testing/membershipUsingNewAlgorithm.php?fuzzy=' + value3rdQueryPrecDataArround + '&data_col=chances_of_precipitation&fuzzy_col=fuzzy_data_p&membership_col=precipitation_membership';
    let url3 = 'http://localhost/testing/combindMembership.php';
    let url4 = 'http://localhost/testing/server.php?membership_col=combined_membership&membership_value=' + value3rdQueryAlphaCut;

    fetch(url1)
        .then(res1 => res1.json())
        .then(out1 => {
            console.log('Membership Value Updated on Tempeture (C)\n', out1);
            return fetch(url2);
        })
        .then(res2 => res2.json())
        .then(out2 => {
            console.log('Membership Value Updated on Precipitation\n', out2);
            return fetch(url3);
        })
        .then(res3 => res3.json())
        .then(out3 => {
            console.log('Membership Value Updated on Combined\n', out3);
            return fetch(url4);
        })
        .then(res4 => res4.json())
        .then(out4 => {
            console.log('Fetched Data for q3 Table\n', out4);
            q3(out4);
            return fetch(url);
        })
        .then(res5 => res5.json())
        .then(out5 => {
            console.log('Fetched Data for Main Table\n', out5);
            maintab3rd(out5);
        })
        .catch(err => { throw err });


});

function q3(out) {
    let len = out.length;
    let tableString3rdQuery = "<tr><th>City</th><th>Temp(C)</th><th>Precipitation</th></tr>";
    for (let i = 0; i < len; i++) {
        tableString3rdQuery += "<tr><td>" + out[i].city_name + "</td><td>" + out[i].temp_celsius + "</td><td>" + out[i].chances_of_precipitation + "</td></tr>";
    }
    table3rdQuery.innerHTML = tableString3rdQuery;

}

































function previousAlgorithm(array, arrayMembershipValue, fuzzyData) {
    console.log("\n\nPREV ALGOITHM")
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
        console.log(city[i], arrayMembershipValue[i]);
    }
}

//             OUR ALGORITHM

function ourAlgorithm(array, arrayMembershipValue, fuzzyData) {
    console.log("\n\nOUR ALGORITHM")
    var min = Math.min(...array);
    var max = Math.max(...array);
    var range = max - min;
    for (let i = 0; i < array.length; i++) {
        arrayMembershipValue[i] = 1 - Math.abs(array[i] - fuzzyData) / range;
        arrayMembershipValue[i] = (arrayMembershipValue[i] <= 0) ? 0 : arrayMembershipValue[i];
        console.log(city[i], arrayMembershipValue[i]);
    }
}

