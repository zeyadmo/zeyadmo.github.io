function writeNumber(inputnumber){
    document.getElementById("maininput").value =
        document.getElementById("maininput").value + 
        inputnumber;
}
function clearinput(){
    document.getElementById("maininput").value="";
    document.getElementById("prevresult").value="";
    document.getElementById("operation").value="";
}
function opinput(inputop){
    document.getElementById("operation").value=inputop;

    document.getElementById("prevresult").value= document.getElementById("maininput").value;

    document.getElementById("maininput").value="";
}
function equation(){
    var maininput =  document.getElementById("maininput").value;
    var prevresult = document.getElementById("prevresult").value;
    var operation =  document.getElementById("operation").value;
    if(operation == "+"){
        document.getElementById("maininput").value = add(parseInt(prevresult),parseInt(maininput));
    }else if (operation == "-"){
        document.getElementById("maininput").value = subtract(parseInt(prevresult),parseInt(maininput));
    }
    else if (operation == "÷"){
        document.getElementById("maininput").value = divide(parseInt(prevresult),parseInt(maininput));
    }
    else if (operation == "x"){
        document.getElementById("maininput").value = multiplie(parseInt(prevresult),parseInt(maininput));
     
    }
    document.getElementById("prevresult").value="";
    document.getElementById("operation").value="";

}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function multiplie(a,b){
    return a * b;
}
