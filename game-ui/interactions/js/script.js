function orderFunction() {
    document.body.style.backgroundImage = "url(images/sweet-shop-counter.jpg)";
}

function fryFunction () {
    document.body.style.backgroundImage = "url(images/donut-shop-kitchen-illustration.jpg)";
}

function decorateFunction() {
    document.body.style.backgroundImage = "url(images/sweets-assembly.jpg)";
}

function creditsFunction() {
    var credits = document.getElementById("credits-div"); 
    if (credits.style.display === "none") {
        credits.style.display = "block"; 
    } else {
        credits.style.display = "none"; 
    }
}
