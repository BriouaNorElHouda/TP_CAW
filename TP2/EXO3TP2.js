
var winner =true;

window.onload = function() {
    $("end").onmouseover = congrats;
    var ab = $$("div#maze div.boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    winner = false;
    var ab = $$("div#maze div.boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "red";
    }
}

function congrats() {
    if(winner) {
        alert("You win!🎊🎉🎊");
    }
}
