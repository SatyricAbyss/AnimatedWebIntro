/* SETTINGS */
// Loader settings in seconds
const loaderMinTimeInSeconds    = 1;
const loaderMaxTimeInSeconds    = 2.5;

// General text settings
const textSpeed                 = 25;

// First text
const firstTextDelayInSeconds   = 0.1;
const firstText                 = "Your first phrase goes here";

// Second text and delay
const secondTextDelayInSeconds  = 1;
const secondText                = "Your second phrase goes here";

// Third text and delay
const thirdTextDelayInSeconds   = 3;
const thirdText                 = "Your third phrase goes here";

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
let loadedText;

function loadFirstText() {
    loadedText = firstText;
    typeText();
}

function loadSecondText() {
    loadedText = secondText;
    typeText();
}

function loadThirdText() {
    loadedText = thirdText;
    typeText();
}

function typeText() {
    if(textIterator < loadedText.length) {
        textSection.innerHTML += loadedText.charAt(textIterator);
        textIterator++;
        setTimeout(typeText, textSpeed);
    } else if(textIterator === loadedText.length) {
        if(loadedText === "undefined") {
            alert("Something went wrong...");
        } else if(loadedText === firstText) {
            textIterator = 0;

            let text2 = setTimeout(function() {
                textSection.innerHTML += "<br/>";
                loadSecondText();
            }, secondTextDelay);
        } else if(loadedText === secondText) {
            textIterator = 0;

            let text3 = setTimeout(function() {
                textSection.innerHTML = "";
                loadThirdText();
            }, thirdTextDelay);
        }
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
    loadPage();
});
