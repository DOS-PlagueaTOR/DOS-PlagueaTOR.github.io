var a = document.getElementById('nava'),
    b = document.getElementById('navb'),
    c = document.getElementById('first'),
    d = document.getElementById('last'),
    selectiont = document.getElementById('selection-font-title'),
    m = document.getElementById('M').innerHTML,
    r = document.getElementById('R').innerHTML,
    buy_font = document.getElementById('lsprice'),
    ns = document.getElementById('NS').innerHTML;


function ParseURL(){
    console.log('host:'+window.location.host + ';                                                                   hostname:' + window.location.hostname + ';                                                                    pathname:' + window.location.pathname+';');
}

function font_reset() {
    selectiont.innerHTML = "Please select one font";
    buy_font.innerHTML = "first choose your font";
}

function changer_font_m() {
    selectiont.innerHTML = 'Selected font: <span id="selection-font" > ' + m + ' <a onclick="font_reset()">x</a></span>';
    buy_font.innerHTML = m+" font - 250$"+'<a href="http://saroroce.ml#contacts">BUY</a>';
}

function changer_font_r() {
    selectiont.innerHTML = 'Selected font: <span id="selection-font" onclick="font_reset()"> ' + r + ' <a onclick="font_reset()">x</a></span>';
    buy_font.innerHTML = r+" font - 125$"+'<a href="http://saroroce.ml#contacts">BUY</a>';
}

function changer_font_ns() {
    selectiont.innerHTML = 'Selected font: <span id="selection-font" onclick="font_reset()"> ' + ns + ' <a onclick="font_reset()">x</a></span>';
    buy_font.innerHTML = ns+" font - 340$"+'<a href="http://saroroce.ml#contacts">BUY</a>';
}

function colsw1() {
    if (a.style.color = "#bfccdf") {
        a.style.color = "#ff5306";
        a.style.boxShadow = "2px 2px 0,-2px 2px 0,-2px -2px 0,2px -2px 0";
        b.style.color = "#bfccdf";
        b.style.boxShadow = "0 0 0";
        if (c.style.visibility = "hidden") {

            c.style.visibility = "visible";
            c.style.opacity = "1";
            c.style.minHeight = "385px";
            c.style.height = "auto";
            c.style.transform = "rotate3d(1, 0, 0, 0deg)";

            d.style.visibility = "hidden";
            d.style.opacity = "0";
            d.style.height = "0px";
            d.style.transform = "rotate3d(1, 0, 0, 90deg)";
        }
    }
}

function colsw2() {
    if (b.style.color = "#bfccdf") {
        b.style.color = "#ff5306";
        a.style.color = "#bfccdf";
        b.style.boxShadow = "2px 2px 0,-2px 2px 0,-2px -2px 0,2px -2px 0";
        a.style.boxShadow = "0 0 0";
        if (d.style.visibility = "hidden") {

            d.style.visibility = "visible";
            d.style.opacity = "1";
            d.style.minHeight = "385px";
            d.style.height = "auto";
            d.style.transform = "rotate3d(1, 0, 0, 0deg)";

            c.style.visibility = "hidden";
            c.style.opacity = "0";
            c.style.height = "0px";
            c.style.transform = "rotate3d(1, 0, 0, 90deg)";
        }
    }
}
