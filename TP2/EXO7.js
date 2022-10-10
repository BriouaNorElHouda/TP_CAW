window.onload = function() {
    $("start").onclick = clicking;
    $("end").onmouseover = result;
    $("maze").onmouseleave = cheating;
    var b = document.getElementsByClassName("boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].onmouseover = OnAllBoundary;
    }
};

var winner =true;

function OnAllBoundary() {
    winner = false;
    var ab = document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
     if(ab[i].style.backgroundColor = "red")  {
    var st = document.getElementById("status").innerHTML = "You Lose😭😭";
     } 
              

    
     }
}





function result() {
    var ab = document.getElementsByClassName("boundary");

    for (var i = 0; i < ab.length; i++) {
        if (ab[i].style.backgroundColor != "red") {
            var W = document.getElementById("status").innerHTML = "You win!🎊🎉🎊";
        }
    }
}




function clicking() {
   
    var ab=  document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "#eeeeee";

        var st = document.getElementById("status").innerHTML = "Move your mouse over the S to begin";


    }
    
}







function cheating(){

    var ab=  document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "red";
if (ab[i].style.backgroundColor != "#eeeeee"){
        var st = document.getElementById("status").innerHTML = "You cheated😡❌";
}

    }
    

}


    
        

//----BRIOUA & HEDJILA----//
