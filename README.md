# Ejercicio de algoritmos

En el ejercicio se usó Javascript (para mayor simplicidad). 

### Algoritmos

La primer solución consta de dos <strong>for</strong> loops anidados, los cuales iteran a través de todo el array sumando cada ítem con los restantes para verificar si se cumple la condición. Es el menos eficiente ya que usa dos bucles, lo cual incrementa su costo algorítmico.

<hr>

La segunda solución es más eficiente, ya que usa un solo <strong>for..of</strong> loop, en el cual se busca dentro de un array el número resultante de la resta entre el parámetro que se le entrega a la función y el elemento del array en cuestión. Si lo encuentra, quiere decir que hay un número que, sumado al número actual del loop, cumple con la condición, por lo cual retorna true. En caso contrario, se verifica que el número actual no esté en el array, y si no lo está, se lo agrega para seguir con la verificación. 
