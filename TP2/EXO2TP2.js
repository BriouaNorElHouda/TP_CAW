window.onload = function() {
   
    var b = document.getElementsByClassName("boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].onmouseover = OnAllBoundary;
        
    }
};

function OnAllBoundary() {
    var ab = document.getElementsByClassName("boundary");

    for (var i = 0; i < ab.length; i++) {
        ab[i].style.backgroundColor = "red";
        
    }
}










//----BNH----//
