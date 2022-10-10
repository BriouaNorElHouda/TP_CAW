
window.onload = function() {
    

    var b = $$("div#maze div#boundary1.boundary");
    
    for (var i = 0; i < b.length; i++) {
        
        b[i].onmouseover = OnBoundary1;
       
    }
};

function OnBoundary1() {
    
    var b1 = $$("div#maze div#boundary1.boundary");

    for (var i = 0; i < b1.length; i++) {
        
        b1[i].style.backgroundColor = "red";
        
        
        }
    }
}





//----BRIOUA & HEDJILA----//
