function fryFunction () {
    document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/process-making-dough-bakery-factory-flat-illustration_1284-65891.jpg?w=1380&t=st=1682278913~exp=1682279513~hmac=16e3b99e26e7ef2c59e995c7c857680df6f25d3085106e02bcad3450268cec5b)";
}

function orderFunction() {
    document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/sweet-shop_1284-21512.jpg?w=1800&t=st=1682294112~exp=1682294712~hmac=83bd1e62916a5760e1918ab1bb0648596a4c99eb097efea044dbd32b9c531e73)";
}

function decorateFunction() {
    document.body.style.backgroundImage = "url(https://img.freepik.com/free-vector/candy-factory-chocolate-production-manufacture_33099-2206.jpg?w=1800&t=st=1682296052~exp=1682296652~hmac=2f1032a3108d94fc0da702c5f444788e8807ec2ce4fddfd6969a0e3257359185)";
}

function creditsFunction() {
    var credits = document.getElementById("credits-div"); 
    if (credits.style.display === "none") {
        credits.style.display = "block"; 
    } else {
        credits.style.display = "none"; 
    }
}
