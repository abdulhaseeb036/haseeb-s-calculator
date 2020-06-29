function keyword(num){
    var screen = document.getElementById("screen");
    screen.value += num;
    
}

// clear 
function c(num){
    var screen = document.getElementById("screen");
    screen.value = ""; 
 
}
//ans clear
function ans(){
    var screen = document.getElementById("screen");
    rc.value = "";
}


//result
function result(){
    var screen = document.getElementById("screen");
    rc.value= eval(screen.value);

}

//square function
function square(sq){
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value *=  document.getElementById("screen").value;
    screen.value= eval(screen.value);
}

//back 2
function back(){
    var screen= document.getElementById("screen").value;
    document.getElementById("screen").value= screen.slice(0 , -1);
    
}
