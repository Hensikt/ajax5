function showList(str, typeSearch) {
    if (str == "") {
        document.getElementById('txtHint').innerHTML = "";
        return;
    } else {
        if (window.XMLHttRequest) {

        }
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (typeSearch == "list") {
                    printArray(this.responseText);
                } else {
                    parseJson(this.responseText);
                    console.log(this.responseText);
                }
            }
        };
        xmlhttp.open("GET", "ajax.php?q=" + str + "&type=" + typeSearch, true);
        xmlhttp.send();
    }
}

function printArray(arr) {
    let landen = JSON.parse(arr);
    let txt = "";
    for (var i = 0; i < landen.length; i++) {
        txt += "<p onclick=land(" + landen[i + 1] + ")>" + landen[i] + "</p><br>";
        i += 1;
    }
    Hint.innerHTML = txt;
}

function parseJson(result) {
    let results = JSON.parse(result);
    let text = "";
    text += "<h1>" + results[1] + "</h1>";
    text += "<p>Code: " + results[0] + "</p>";
    text += "<p>Name: " + results[1] + "</p>";
    text += "<p>Region: " + results[2] + "</p>";
    text += "<p>SurfaceArea: " + results[3] + "</p>";
    text += "<p>IndepYear: " + results[4] + "</p>";
    text += "<p>Population: " + results[5] + "</p>";
    text += "<p>LifeExpectancy: " + results[6] + "</p>";
    text += "<p>GNP: " + results[7] + "</p>";
    text += "<p>GNPOld: " + results[8] + "</p>";
    text += "<p>LocalName: " + results[9] + "</p>";
    text += "<p>GovernmentForm: " + results[10] + "</p>";
    text += "<p>HeadOfState: " + results[11] + "</p>";
    text += "<p>Capital: " + results[12] + "</p>";
    text += "<p>Code2: " + results[13] + "</p>";

    Hint.innerHTML = text;
}

function land(land) {
    showList(land, 'answer');
}
