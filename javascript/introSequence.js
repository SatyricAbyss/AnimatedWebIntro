/* SETTINGS */
// Loader settings in seconds
const loaderMinTimeInSeconds    = 1;
const loaderMaxTimeInSeconds    = 2.5;

// General text settings
const textSpeed                 = 25;

// First text
const firstTextDelayInSeconds   = 0.1;
let firstText                   = "Your first phrase goes here";

// Second text and delay
const secondTextDelayInSeconds  = 1;
let secondText                  = "Your second phrase goes here";

// Third text and delay
const thirdTextDelayInSeconds   = 3;
let thirdText                   = "Your third phrase goes here";

// -----------------------------
// DO NOT TOUCH BELOW SETTINGS
// SECONDS DECLARATIONS
const firstTextDelay = firstTextDelayInSeconds * 1000;
const secondTextDelay = secondTextDelayInSeconds * 1000;
const thirdTextDelay = thirdTextDelayInSeconds * 1000;
const loaderMinTime = loaderMinTimeInSeconds * 1000;
const loaderMaxTime = loaderMaxTimeInSeconds * 1000;

// MISC SETTINGS
const loaderTimeOut = Math.floor(Math.random() * loaderMaxTime) + loaderMinTime;
const loaderRemoval = loaderTimeOut + 250;
const firstTextTimer = loaderRemoval + firstTextDelay;
let textIterator = 0;


function loadFirstText() {
    if(textIterator < firstText.length) {
        textSection.innerHTML += firstText.charAt(textIterator);
        textIterator++;
        setTimeout(loadFirstText, textSpeed);
    } else if(textIterator === firstText.length) {
        textSection.innerHTML +="<br/>";
        var text2 = setTimeout(function() {
            textIterator = 0;
            loadSecondText();
        }, secondTextDelay)
    }
}

function loadSecondText() {
    if(textIterator < secondText.length) {
        textSection.innerHTML += secondText.charAt(textIterator);
        textIterator++;
        setTimeout(loadSecondText, textSpeed);
    } else if(textIterator === secondText.length) {
        var text3 = setTimeout(function() {
            textSection.innerHTML = "";
            textIterator = 0;
            loadThirdText();
        }, thirdTextDelay)
    }
}

function loadThirdText() {
    if(textIterator < thirdText.length) {
        textSection.innerHTML += thirdText.charAt(textIterator);
        textIterator++;
        setTimeout(loadThirdText, textSpeed);
    }
}

function loadPage() {
    const loader = document.getElementById("loaderSection");

    var load = setTimeout(function() {
        loader.style.transition = ".25s";
        loader.style.opacity = "0";
    }, loaderTimeOut);

    var loadRemove = setTimeout(function() {
        loader.parentNode.removeChild(loader);
    }, loaderRemoval);

    var text1 = setTimeout(function() {
        loadFirstText();
    }, firstTextTimer);
}

window.addEventListener("load", (event) => {
    if (window.location.protocol == 'http:') {
        window.location.href = window.location.href.replace('http:', 'https:');
    }

    loadPage();
});