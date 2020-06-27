function keyword(num){
    var screen = document.getElementById("screen");
    screen.value += num;
    
}

// clear 
function c(){
    var screen = document.getElementById("screen");
     screen.value = "";   
}

// cancel 
function cancel(){
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0 , screen.length-1);
}

//result
function result(){
    var screen = document.getElementById("screen");
    re.value= eval(screen.value);
}
//square function
function square(sq){
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value *=  document.getElementById("screen").value;
    screen.value= eval(screen.value);
}
