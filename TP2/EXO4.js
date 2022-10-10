window.onload = function() {
    $("start").onclick = clicking;
    $("end").onmouseover = congrats;
    var b = document.getElementsByClassName("boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].onmouseover = OnAllBoundary;
    }
};

var winner =true;

function OnAllBoundary() {
    winner = false;
    var ab =  document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "red";
        
    }
}



function congrats() {
    if(winner) {
        alert("You win!🎊🎉🎊");
    }
}

function clicking() {
    winner = true;
    var ab=  document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "#eeeeee";

    }
}


//----BRIOUA & HEDJILA----//
