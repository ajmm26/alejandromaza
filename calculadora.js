let operandoA
let operandoB
let resultado
let operacion = parseFloat(operandoA) + parseFloat(operandoB);

//call the elements by means id
let showinscreen = document.getElementById('pantalla');
let mas = document.getElementById('mas');



// use funtions 

function visualise(addnumber) {
    showinscreen.innerText += addnumber
   
}


function plus () {

    operandoA = parseFloat (showinscreen.innerText);
    operator = "+";
    ac ();
}

function menos() {
    
    operandoA = parseFloat(showinscreen.innerText);
    operator = "-";
    ac ();
     
}

function por () {

    operandoA = parseFloat(showinscreen.innerText);
    operator = "*";
    ac ();

}

function division (){

    operandoA = parseFloat(showinscreen.innerText);
    operator = "/";
    ac ();
}


function raiz(){
    operandoA = parseFloat (showinscreen.innerText)
    showinscreen.innerText = Math.sqrt(operandoA)

   
  
}

function log () {
operandoA = parseFloat(showinscreen.innerText)
showinscreen.innerText = Math.log(operandoA)


}


function sin () {

    operandoA = parseFloat(showinscreen.innerText);
    showinscreen.innerText = Math.sin(operandoA)
}


function ac () {

    showinscreen.innerText = ""

   


}




    


    







function iqual () {
    operandoB=parseFloat(pantalla.innerText)



  if (operator == "+") {

         
    showinscreen.innerText = parseFloat(operandoA) + parseFloat(operandoB);

}     

    else if (operator == "-") {

    showinscreen.innerText = parseFloat(operandoA) - parseFloat(operandoB);

}

    else if (operator == "*" ) {


    showinscreen.innerText = parseFloat(operandoA) * parseFloat(operandoB);

  }

  else if ( operator == "/") {
    showinscreen.innerText = parseFloat(operandoA) / parseFloat(operandoB);

  }

   else if (showinscreen.innerText == Math.sqrt(operandoA)) {

    Math.sqrt(operandoA)


   }

else if (showinscreen.innerText == Math.log) {

    Math.log(operandoA)


}

else if (showinscreen.innerText == Math.sin(operandoA)) {
    Math.sin(operandoA)

}

   else {

     showinscreen.innerText ="SYNTAX ERROR"
   }
  





}




