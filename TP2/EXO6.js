window.onload = function() {
    $("start").onclick = clicking;
    $("end").onmouseover = result;
    var ab = document.getElementsByClassName("boundary");
    for (var i = 0; i < ab.length; i++) {
        ab[i].onmouseover = OnAllBoundary;
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
        ab[i].style.backgroundColor = "#eeeeee";
        if (ab[i].style.backgroundColor != "red") {
            var st = document.getElementById("status").innerHTML = "You win!🎊🎉🎊";



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


//----BRIOUA & HEDJILA----//
