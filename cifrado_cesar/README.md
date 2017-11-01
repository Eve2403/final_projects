## PSEUDOCODIGO

1. Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números

1.-Pedir al usuario una frase
2.-Analizar la frase para verificar que no contenga espacios vacios o numeros
    A=65 y Z=90 ; a=97 y z=122 lo que este fuera de ese rango no sirve
3.-Si es correcta,seguir.
4.-A traves de la formula de cifrado cesar concluimos que el desplazamiento es de 7 posiciones.
5.-Encomtramos el código ASCII de cada elemento
6.-Aplicamos la formula para encontrar el nuevo carácter cifrado
7.-Delimitamos la busqueda, ya que si un carácter esta a menos de 7 posciciones de la Z nos devolvera un caracter distinto a una letra, usaremos 2 parametros: los de las Mayusculas y los de las minusculas, asi podra cifrar y descifrar ambas.
  A=65 y Z=90 ; a=97 y z=122
8.-Devolvemos a un arreglo nuevo el carácter para el cifrado.
9.-Creamos la funcion inversa para devolver la cadena original.

## Diagrama de flujo
![diagrama_flujo,jpg]
