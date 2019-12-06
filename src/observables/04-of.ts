import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 12, 124);
const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));


console.log('Inicio del Obs');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del Obs');


/**
 * 
 * Sintaxis: (...[])
 * La sintaxis extendida o spread sintax permite a un elemento
 * iterable tal como un arreglo o cadena ser expandido en lugares
 * donde cero o más argumentos (para llamadas de  función) ó elementos
 * (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.
 *
 */

