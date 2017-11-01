var userCard = prompt("Introduce el número de tu tarjeta sin espacios:"); //pedimos no. tarjeta
  if(userCard.indexOf(" ") != -1 || userCard.length != 16){  //delimitamos las caracteristicas del dato que debe ingresar
      alert("error");
    }
      var arrCard = [];  //Arreglo vacio para guardar los elementos individuales del string que nos retorno el prompt
        for(i=0; i<userCard.length; i++){    //recorre el string userCard
          arrCard.push(userCard.charAt(i));  //agrega al arreglo el caracter que esta en el indice
      }
      arrCard = arrCard.reverse();     //invierte el arreglo

var isValidCard = function(arrCard){ //crea la funcion
      var arreglo1 = arrCard; //el arreglo aprobado
      var arregloPares = [];  //sacamos los pares
      var arregloImpa = [];
        for(i=1; i < arreglo1.length; i++){
          var element=arreglo1.splice(i,1); //sacamos los pares
          arregloPares.push(element);  //los agregamos a arregloPares
          var resulPorDos=[];    //aqui van los pares cuando se multipliquen por 2
          for(j=0; j<arregloPares.length; j++){
              var z=arregloPares[j]*2;
              if(z>=10){        //condicion si tiene 2 digitos
                var zStr=z.toString();  //convertimos en strin para poder usar charAt
                var suma=parseInt(zStr.charAt(0)) + parseInt(zStr.charAt(1));
                z=suma;
      }
      resulPorDos.push(z);  //ya concertido que lo ponga en resulPorDos

}
      }
    }
