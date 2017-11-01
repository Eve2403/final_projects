var stringUs = prompt("Ingresa tu frase:");
function cipher(stringUs){
  for(i=0; i<stringUs.length; i++){
    if((stringUs.charCodeAt(i) < 65) ||
    (stringUs.charCodeAt(i) > 90) && (stringUs.charCodeAt(i) < 97) ||
    (stringUs.charCodeAt(i) > 122)){
      return "Error, intenta de nuevo.";
    }
  }
/*  array = [];
  newStringUs = stringUs.split("");
  for (car = 0; car < newStringUs.length; car++){
    newCahar = newStringUs[car].charCodeAt() + 7;
    if((newCahar <= 84) ||
      (newCahar >= 97 && newCahar <= 116){
        array.push(newCahar);
    } else if ((newCahar >= 84) ||
              (newCahar >= 116)){
              newCahar = (newCahar - 26) + 7;
              array.push(newCahar);
        }
        return array;
  }*/

}
cipher(stringUs);
