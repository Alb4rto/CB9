//--------- primo esercizio ----------//

//const compleanno = prompt("inserisci data del tuo compleanno");

//if (compleanno === "07/04/24")
//{
//  console.log("Buon Compleanno 🎁 !!");
//} 
 //else {
  //console.log("🎉non è il tuo compleanno🎉");}

    //-------- secondo esercizio arrey ---------//

    //const routinequotidiana = ["Mi sveglio", "faccio colazione", "mi lavo", "mi preparo", "gioco all'xbox", "mi arrabbio con il gioco", "preparo il pranzo", "levo la tavola", "guardo la tv", "esco con amici", "ritorno a casa per cena"]

    //------for (let index = 0; index < routinequotidiana.length; index++)//-----
    //-----{ console.log(routinequotidiana[index]) }//-----

    //let index = 0;
    
   // while (index < routinequotidiana.length) 
    //{console.log(index+ "*" + routinequotidiana [index] ); index++
        
    //}

    //------- esercizio Avanzato 2! ---------//

   
    let numberone = parseInt( prompt ("first number"));
    let operator = prompt("choose operator: + - / *");
    let numbertwo = parseInt( prompt("second number"));

    switch (operator) {
        case "+":
            console.log(numberone + numbertwo)
            break;
        case "/":
            console.log(numberone / numbertwo)
            break; 
        case "-":
            console.log(numberone - numbertwo)
            break;
        case "*":
            console.log(numberone * numbertwo)   
            break;
        default : 
            console.log("questa non è una operazione valida")  
            break;
    }


