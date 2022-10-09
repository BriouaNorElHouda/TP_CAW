var winner =true;

window.onload = function() {
    $("start").onclick = clicking;
    $("end").onmouseover = congrats;
    var ab = $$("div#maze div.boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].onmouseover = OnAllBoundary;
    }
};

function OnAllBoundary() {
    winner = false;
    var ab = $$("div#maze div.boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].addClassName("youlose");
    }
}

function congrats() {
    if(winner) {
        alert("You win!🎊🎉🎊");
    }
}

function clicking() {
    winner = true;
    var ab= $$("div#maze div.boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].removeClassName("youlose");
    }
}
