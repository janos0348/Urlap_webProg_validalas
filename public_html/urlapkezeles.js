window.addEventListener("load", init);
var hiba = "";
var adat = "";

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    ID("kuld").addEventListener("click", validalas);


}
function validalas() {
    var nevMezo = ID("nev").value;
//    if (nevMezo.length<3) {
//        $("aside section:nth-child(1) p")[0].innerHTML+="Legalább három karakterből álljon a név";
//        ID ("nev").style.border="2px solid red";
//    }else{
//        ID ("nev").style.border="none";
//        
//    }
    emailtValidal();
    email2tValidal();
    telValidal();
    webetValidal();


    var szuro = /[A-Z]{1}[a-z]{2,}/;
    if (!szuro.test(nevMezo)) {
        hiba += "Nagy betűvel kezdődjön és legalább három karakterből álljon a név<br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "none";
        if (!adat.contains("Név: " + nevMezo + "<br>")) {
            adat += "Név: " + nevMezo + "<br>";
        }


    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(1) p")[0].innerHTML = adat;
}
function emailtValidal() {
    var emailMezo = ID("email").value;
    var szuro = /@\w+.(hu|com)/;
    if (!szuro.test(emailMezo)) {
        hiba += "A megadott email nem hasonlít egy emailre  <br>";
        ID("email").style.border = "2px solid red";
    } else {
        ID("email").style.border = "none";
        if (!adat.contains("Email: " + emailMezo + "<br>")) {
            adat += "Email: " + emailMezo + "<br>";
        }

    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(1) p")[0].innerHTML = adat;

}
function email2tValidal() {
    var email2Mezo = ID("email2").value;
    var szuro = /@\w+.(hu|com)/;
    if (!szuro.test(email2Mezo)) {
        hiba += "A megadott email nem hasonlít egy emailre  <br>";
        ID("email2").style.border = "2px solid red";
    } else {
        ID("email").style.border = "none";
        if (!adat.contains("Email: " + email2Mezo + "<br>")) {
            adat += "Email: " + email2Mezo + "<br>";
        }


    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(1) p")[0].innerHTML = adat;

}
function telValidal() {
    var telMezo = ID("tel").value;
    var szuro = /[0-9]{10}/;
    if (!szuro.test(telMezo)) {
        hiba += "használjon 0-9 számokat<br>";
        ID("tel").style.border = "2px solid red";
    } else {
        ID("tel").style.border = "none";
        if (!adat.contains("Tel: " + telMezo + "<br>")) {
            adat += "Tel: " + telMezo + "<br>";
        }
    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(1) p")[0].innerHTML = adat;

}
function webetValidal() {
    var webMezo = ID("web").value;
    var szuro = /^http:\\{1}([\w]+\.\w{2,4}$/;
    if (!szuro.test(webMezo)) {
        hiba += "Ez nem egy weboldal<br>";
        ID("web").style.border = "2px solid red";
    } else {
        ID("web").style.border = "none";
        if (!adat.contains("Web: " + webMezo + "<br>")) {
            adat += "Web: " + webMezo + "<br>";
        }
        

    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(1) p")[0].innerHTML = adat;

}
