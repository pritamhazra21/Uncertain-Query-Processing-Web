<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Uncertain Query Processing</title>
</head>

<body>

    <div class="sidebar">
        <nav class="foreground topbar">
            <h1>Uncertain Query Processing</h1>
        </nav>

        
        <section class="upper-con">
            <div class="foreground container">
                <h4>Weather Table</h4>
                <table id="main-table" class="content-table">
    
                </table>
            </div>
        </section>

        <!-- 2nd part  -->
        <section class="upper-con">
        <div class="foreground container">
            <h4>Data with celcious</h4>
            <table id="table-celcious" class="content-table">
              
            </table>
        </div>
        <div class="foreground container">
            <h4>
                Data with Kelvin
            </h4>
            <table id="table-kelvin" class="content-table">
             
            </table>

        </div>
    </section>
    
	</div>

    <div class="top">
        <nav class="foreground topbar">
            <h1>Uncertain Query Processing</h1>
        </nav>
    </div>



    <div class="content">


    <nav class="foreground topbar">
        <!-- <div id="logo">
            <img src="collegeLogo.png" />
        </div> -->
        <h1>Uncertain Query Processing</h1>
    </nav>


    <!-- MAIN TABLE -->
























    <!-- 1st query result -->
    <nav class="foreground topbar">
        <h1>1st query</h1>
    </nav>
    <div class="foreground querybar">
        <h3>Find City whose temperature is around "Data arround temperature"</h3>
    </div>
    <section class="upper-con">
        <div class="foreground input-box">
            <h3>Data arround temperature(C)</h3>
            <input id="first-query-data-arround" type="number">
            <h3>alpha cut</h3>
            <input id="first-query-alpha-cut" type="number">
            <button id="first-query-result">SUBMIT</button>
        </div>
    </section>
    <section class="upper-con">
        <div class="foreground container">
            <table id="first-query-table" class="content-table">
                <!-- <thead> -->
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Prec</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        </div>
    </section>












    <!-- 2nd query result -->
    <nav class="foreground topbar">
        <h1>2nd query</h1>
    </nav>
    <div class="foreground querybar">
        <h3>Find City whose chances of precipitation around "Data arround precipitation"</h3>
    </div>
    <section class="upper-con">
        <div class="foreground input-box">
            <h3>Data arround precipitation</h3>
            <input id="second-query-data-arround" type="number">
            <h3>alpha cut</h3>
            <input id="second-query-alpha-cut" type="number">
            <button id="second-query-result">SUBMIT</button>
        </div>
    </section>
    <section class="upper-con">
        <div class="foreground container">
            <table id="second-query-table" class="content-table">
                <!-- <thead> -->
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Prec</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>
        </div>
    </section>






















    <!-- 3rd query result -->
    <nav class="foreground topbar">
        <h1>3rd query</h1>
    </nav>
    <div class="foreground querybar">
        <h3>Find City whose temperature is around "Data arround temp" and chances of
precipitation around "Data arround precipitation"</h3>
    </div>
    <section class="upper-con">
        <div class="foreground input-box">
            <h3>Data arround temp</h3>
            <input id="third-query-data-arround-temp" type="number">
            <!-- <h3>alpha cut</h3>
            <input id="third-query-alpha-cut-temp" type="number"> -->
            <h3>Data arround prec</h3>
            <input id="third-query-data-arround-prec" type="number">
            <h3>alpha cut</h3>
            <input id="third-query-alpha-cut-prec" type="number">
            <button id="third-query-result">SUBMIT</button>
        </div>
    </section>
    <section class="upper-con">
        <div class="foreground container">
            <table id="third-query-table" class="content-table">
                <!-- <thead> -->
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Prec</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               
            </table>
        </div>
    </section>





    <!-- table celcius kelvin -->










    <!-- Compare result table prev algorithm-->
    <nav class="foreground topbar">
        <h1>Comparing Result using previous algorithm</h1>
    </nav>
        <!-- INPUT BOX -->
    <section class="upper-con">
        <div class="foreground input-box compare-input-box">
            <h5>Data arround temp(c)</h5>
            <input id="prev-algo-data-arround-celcious" type="number">
            <h5>alpha cut</h5>
            <input id="prev-algo-alpha-cut-celcious" type="number">
            <button id="prev-algo-celcious-result">SUBMIT</button>
        </div>
        <div class="foreground input-box compare-input-box">
            <h5>Data arround temp(K)</h5>
            <input id="prev-algo-data-arround-kelvin" type="number">
            <h5>alpha cut</h5>
            <input id="prev-algo-alpha-cut-kelvin" type="number">
            <button id="prev-algo-kelvin-result">SUBMIT</button>
        </div>
    </section>

    <section class="upper-con">

        <div class="foreground container">
            <table id="prev-algo-celcious-table" class="content-table">
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div  class="foreground container">
            <table id="prev-algo-kelvin-table" class="content-table">
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>

        </div>
    </section>


    <!-- Compare result table our algorithm-->
    <nav class="foreground topbar">
        <h1>Comparing Result using our algorithm</h1>
    </nav>
    <section class="upper-con">
        <div class="foreground input-box compare-input-box">
            <h5>Data arround temp(c)</h5>
            <input id="ours-algo-data-arround-celcious" type="number">
            <h5>alpha cut</h5>
            <input id="ours-algo-alpha-cut-celcious" type="number">
            <button id="ours-algo-celcious-result">SUBMIT</button>
        </div>
        <div class="foreground input-box compare-input-box">
            <h5>Data arround temp(K)</h5>
            <input id="ours-algo-data-arround-kelvin" type="number">
            <h5>alpha cut</h5>
            <input id="ours-algo-alpha-cut-kelvin" type="number">
            <button id="ours-algo-kelvin-result">SUBMIT</button>
        </div>
    </section>
    <section class="upper-con">
        <div class="foreground container">
            <table id="our-algo-celcious-table" class="content-table">
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="foreground container">
            <table id="our-algo-kelvin-table" class="content-table">
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>

        </div>
    </section>





















</div>




</body>
<script src="app.js"></script>
</html>














