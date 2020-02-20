import { of, from } from 'rxjs';


/**
 * of = toma argumentos y genera una secuencia
 * 
 * from = array, promise, iterable, observable
 * 
 */

const observer = {
    next: val => { console.log('next', val) },
    complete: () => { console.log('Complete') }
}

const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// Recorrer funcion generadora:
// for( let id of miIterable) {
//     console.log(id);
// }

// en vez del for:
from(miIterable).subscribe(observer)

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Lucas');

const source$ = from(fetch('https://api.github.com/users/morettilucash'));

source$.subscribe(async (resp) => {
    console.log('resp',resp);
    const dataResp = await resp.json()
    console.log('dataResp',dataResp);
})

