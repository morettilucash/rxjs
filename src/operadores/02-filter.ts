import { range, from, fromEvent } from 'rxjs'
import { filter, map } from 'rxjs/operators'

// range(20, 40 ).pipe(
//     filter( (val, i) => {
//         // console.log('index', i);        
//         return val % 2 === 1;
//     })
//).subscribe( console.log)

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Jocker'
    },
]


from(personajes).pipe(
    filter( p => p.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code ),
    filter( key => key === 'Enter') // Filtramos los keyups de los Enter solamente
);

keyup$.subscribe( console.log);