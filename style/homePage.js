setInterval(startGradient, 10);
var text = document.querySelector("#navTitle");
var music = document.getElementById("song");
// Filling the progress bar
var percentage = 0;

function startBar() {
    if (percentage == 0) {
        percentage = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 50);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                percentage = 0;
                // Changing page content
                hiddenGradient();
                playMusic();
                changeText();
            } else {
                if (width == 60) {
                    setTimeout(function () {
                        width++;
                        elem.style.width = width + "%";
                        elem.innerHTML = width + "%";
                    }, 280);
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                }

            }
        }
    }
    // Adding progress bar on the page
    hiddenBtn();
    setTimeout(function () { ShowBar() }, 50);
}

// Gradient 

// Color base
var colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);
// Height on the palette
var step = 0;
var colorIndices = [0, 1, 2, 3];
//color change speed
var gradientSpeed = 0.003;

function startGradient() {

    if ($ === undefined) return;

    var index0 = colors[colorIndices[0]];
    var index1 = colors[colorIndices[1]];
    var index2 = colors[colorIndices[2]];
    var index3 = colors[colorIndices[3]];

    var istep = 1 - step;
    // Defining new rgb
    var red1 = Math.round(istep * index0[0] + step * index1[0]);
    var green1 = Math.round(istep * index0[1] + step * index1[1]);
    var blue1 = Math.round(istep * index0[2] + step * index1[2]);
    var color1 = "rgb(" + red1 + "," + green1 + "," + blue1 + ")";

    var red2 = Math.round(istep * index2[0] + step * index3[0]);
    var green2 = Math.round(istep * index2[1] + step * index3[1]);
    var blue2 = Math.round(istep * index2[2] + step * index3[2]);
    var color2 = "rgb(" + red2 + "," + green2 + "," + blue2 + ")";

    // css gradient
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        // New color indexes randomly
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    }
}

function hiddenBtn() {
    document.getElementById("openBtn").style.display = "none";
}

function ShowBar() {
    const bar = document.getElementById("progresstitle");
    if (bar.style.display == "none" || bar.style.display == "") {
        document.getElementById("progresstitle").style.display = "inline-block";
        document.getElementById("myProgress").style.visibility = "visible";
        document.getElementById("myBar").style.visibility = "visible";
    } else {
        document.getElementById("progresstitle").style.display = "none";
        document.getElementById("myProgress").style.visibility = "hidden";
        document.getElementById("myBar").style.visibility = "hidden";
    }
}

function hiddenGradient() {
    const gradient = document.getElementById("gradient");
    if (gradient.style.display == "none") {
        gradient.style.display = "block"
    } else {
        gradient.style.display = "none"
    }
}

function changeText() {
    text.innerHTML = "Currículo"
    document.getElementById("curriculumPage").style.display = "inline-block";
}

function hiddenContent(btnn) {
    const btn = document.getElementById(btnn);
    if (btn.style.display == "none" || btn.style.display == "") {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}

function playMusic() {
    music.volume = 0.1;
    music.play();
}

function closeFile() {
    text.innerHTML = "Bem vindo";
    music.pause();
    music.currentTime = 0;
    ShowBar();
    hiddenGradient();
    document.getElementById("openBtn").style.display = "block";
    document.getElementById("curriculumPage").style.display = "none";
}